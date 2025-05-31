import type { Plugin, ViteDevServer } from 'vite';
import fs from 'node:fs/promises';
import path from 'node:path';
import { normalizePath } from 'vite';

export default function vitePluginFluidVariables(): Plugin {
	let server: ViteDevServer;
	const variablesByFile: Map<string, IFileVariables> = new Map();

	return {
		name: 'vite-plugin-fluid-variables',
		enforce: 'pre',

		buildStart() {
			variablesByFile.clear();
		},

		configureServer(_server) {
			server = _server;
		},

		load(id) {
			console.log('load?', id);
		},

		transformIndexHtml() {
			return [
				{
					tag: 'style',
					children: `
:root {
	--test-variable: 12rem;
}`,
				},
			];
		},
	};
}

type IFileVariables = Map<string, [number, number]>;

const variableRegex = /--fluid-(\d+)-(\d+)/g;
const minScreenWidth = 20;
const maxScreenWidth = 120;
const remInPx = 16;

function generateClamp(sizeFrom: number, sizeTo: number): string {
	sizeFrom = sizeFrom / remInPx;
	sizeTo = sizeTo / remInPx;

	const slope = (sizeTo - sizeFrom) / (maxScreenWidth - minScreenWidth);
	const yAxisIntersection = -minScreenWidth * slope + sizeFrom;

	return `clamp(${sizeFrom}rem, ${yAxisIntersection}rem + ${(slope * 100)}vw, ${sizeTo}rem)`;
}

async function extractFluidVariables(filePath: string): Promise<IFileVariables> {
	const variables: IFileVariables = new Map();

	const content = await fs.readFile(filePath, 'utf-8');
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

	const css = [':root {'];
	for (const [variable, [minSize, maxSize]] of wantedVariables.entries()) {
		css.push(`\t--fluid-${variable}: ${generateClamp(minSize, maxSize)};`);
	}
	css.push('}');

	return css.join('\n');
}

async function findStyleFiles(dir: string, fileList: string[] = []): Promise<string[]> {
	const entries = await fs.readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		const fullPath = path.join(dir, entry.name);
		if (entry.isFile()) {
			if (path.extname(entry.name) === '.css') {
				fileList.push(normalizePath(fullPath));
			}
		} else if (entry.name !== 'node_modules') {
			findStyleFiles(fullPath, fileList);
		}
	}
	return fileList;
}
