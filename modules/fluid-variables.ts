import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { addTemplate, defineNuxtModule, updateTemplates } from '@nuxt/kit';
import { normalizePath } from 'vite';

export default defineNuxtModule({
	meta: {
		name: 'asasinmode:fluid-variables',
	},
	async setup(_options, nuxt) {
		const variablesByFile: Map<string, IFileVariables> = new Map();
		let generatedCss = '';

		const files = await findStyleFiles(path.join(process.cwd(), 'app'));
		await Promise.all(files.map(file => processFile(file)));
		generatedCss = generateCss(variablesByFile);

		const template = 'asasinmode:fluid-variables.css';
		addTemplate({
			filename: template,
			getContents: () => generatedCss,
		});

		async function processFile(file: string, isVue = file.endsWith('.vue')) {
			if (!file.endsWith('assets/reset.css')) {
				variablesByFile.set(file, await extractFluidVariables(file, isVue));
			}
		}

		nuxt.hook('builder:watch', async (_event, path) => {
			const isVue = path.endsWith('.vue');
			if (path.endsWith('.css') || isVue) {
				await processFile(path, isVue);
				generatedCss = generateCss(variablesByFile);
				updateTemplates({ filter: t => t.filename === template });
			}
		});
	},
});

type IFileVariables = Map<string, [number, number]>;

const variableRegex = /--fluid-(\d+)-(\d+)/g;
const minScreenWidth = 20;
const maxScreenWidth = 90;
const remInPx = 16;

function generateClamp(sizeFrom: number, sizeTo: number): string {
	sizeFrom = sizeFrom / remInPx;
	sizeTo = sizeTo / remInPx;

	const slope = (sizeTo - sizeFrom) / (maxScreenWidth - minScreenWidth);
	const yAxisIntersection = -minScreenWidth * slope + sizeFrom;

	return `clamp(${sizeFrom}rem, ${yAxisIntersection.toFixed(3)}rem + ${(slope * 100).toFixed(3)}vw, ${sizeTo}rem)`;
}

async function extractFluidVariables(filePath: string, isVue: boolean): Promise<IFileVariables> {
	const variables: IFileVariables = new Map();

	let content = await fs.readFile(filePath, 'utf-8');
	if (isVue) {
		content = content.slice(content.indexOf('\n<style>') + 9, content.indexOf('\n</style>'));
	}

	for (const match of content.matchAll(variableRegex)) {
		const sizeFrom = Number(match[1]);
		const sizeTo = Number(match[2]);
		if (!Number.isNaN(sizeFrom) && !Number.isNaN(sizeTo) && !variables.has(`${sizeFrom}-${sizeTo}`)) {
			variables.set(`${sizeFrom}-${sizeTo}`, [sizeFrom, sizeTo]);
		}
	}

	return variables;
}

function generateCss(variablesByFile: Map<string, IFileVariables>) {
	const wantedVariables: IFileVariables = new Map();
	for (const fileVariables of variablesByFile.values()) {
		for (const [variable, [sizeFrom, sizeTo]] of fileVariables.entries()) {
			if (!wantedVariables.has(variable)) {
				wantedVariables.set(variable, [sizeFrom, sizeTo]);
			}
		}
	}

	let css = ':root {\n';
	for (const [variable, [minSize, maxSize]] of wantedVariables.entries()) {
		css += `\t--fluid-${variable}: ${generateClamp(minSize, maxSize)};\n`;
	}
	css += '}';

	return css;
}

async function findStyleFiles(dir: string, fileList: string[] = []): Promise<string[]> {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isFile()) {
			const ext = path.extname(entry.name);
			if (ext === '.css' || ext === '.vue') {
				fileList.push(normalizePath(fullPath));
			}
		} else if (entry.name !== 'node_modules') {
			await findStyleFiles(fullPath, fileList);
		}
	}
	return fileList;
}

// vite plugin maybe useful for just vue apps
// import type { Plugin, ViteDevServer } from 'vite';
// function vitePluginFluidVariables(): Plugin {
// 	const variablesByFile: Map<string, IFileVariables> = new Map();
// 	const servers: ViteDevServer[] = [];
// 	let rootDir = process.cwd();
// 	let generatedCss = '';

// 	function updateCss() {
// 		generatedCss = generateCss(variablesByFile);
// 		for (const server of servers) {
// 			server.hot.send({
// 				type: 'custom',
// 				event: 'asasinmode:fluid-variables-update',
// 				data: generatedCss,
// 			});
// 		}
// 	}

// 	async function processFile(file: string) {
// 		const vars = await extractFluidVariables(file);
// 		variablesByFile.set(file, vars);
// 	}

// 	return {
// 		name: 'asasinmode:fluid-variables',
// 		enforce: 'pre',

// 		configResolved(config) {
// 			rootDir = config.root;
// 		},

// 		async buildStart() {
// 			generatedCss = '';
// 			variablesByFile.clear();
// 			const files = await findStyleFiles(rootDir);
// 			await Promise.all(files.map(processFile));
// 			updateCss();
// 		},

// 		configureServer(server) {
// 			servers.push(server);
// 			server.watcher.on('change', async (file) => {
// 				if (file.endsWith('.css')) {
// 					await processFile(normalizePath(file));
// 					updateCss();
// 				}
// 			});

// 			server.watcher.on('unlink', async (file) => {
// 				if (file.endsWith('.css')) {
// 					variablesByFile.delete(normalizePath(file));
// 					updateCss();
// 				}
// 			});
// 		},

// 		// maybe useful in a vue spa?
// 		// transformIndexHtml() {
// 		// 	console.log('--------------------');
// 		// 	console.log('TRANSFORM INDEX HTML', generatedCss);
// 		// 	console.log('--------------------');
// 		// 	return [
// 		// 		{
// 		// 			tag: 'style',
// 		// 			attrs: { id: 'fluid-variables' },
// 		// 			children: generatedCss,
// 		// 			injectTo: 'head',
// 		// 		},
// 		// 	];
// 		// },

// 		resolveId(id) {
// 			if (id === 'virtual:fluid-variables-hmr') {
// 				return id;
// 			}
// 		},

// 		load(id) {
// 			if (id === 'virtual:fluid-variables-hmr') {
// 				return `
// if (import.meta.hot) {
// 	const id = 'fluid-variables';

// 	let el = document.getElementById(id);
// 	if (!el) {
// 		el = Object.assign(document.createElement('style'), { id });
// 		el.textContent = \`${generatedCss}\`
// 		document.head.appendChild(el);
// 	}

// 	import.meta.hot.on('asasinmode:fluid-variables-update', (css) => {
// 		el.textContent = css;
// 	});
// }`;
// 			}
// 		},
// 	};
// }
