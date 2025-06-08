const REM = 16;
const MAX_DROP_INTENSITY_TIME = 20_000;

export default new Skin('index-default', () => {
	const canvas = Object.assign(document.createElement('canvas'), { id: 'name-header-canvas' });
	const textCanvas = document.createElement('canvas');
	const dropCanvas = document.createElement('canvas');
	let context = canvas.getContext('2d')!;
	let dropContext = dropCanvas.getContext('2d')!;

	const dpi = window.devicePixelRatio;
	let fontSize = REM;

	const headerText = document.getElementById('name-header-text')!;
	headerText.appendChild(canvas);
	headerText.style = 'color: transparent;';

	const drops: Drop[] = [];
	const idsToRemove: string[] = [];
	let lastFrameTime = performance.now();

	handleResize();

	window.addEventListener('resize', handleResize);
	headerText.addEventListener('click', clickAddDrop);

	const dropTimeouts: NodeJS.Timeout[] = [];

	randomDrop(0);
	randomDrop(1);
	randomDrop(2);
	dropTimeouts[3] = setTimeout(() => randomDrop(3), 10_000);
	dropTimeouts[4] = setTimeout(() => randomDrop(4), 15_000);
	dropTimeouts[5] = setTimeout(() => randomDrop(5), 17_500);

	animate();

	function handleResize() {
		dropCanvas.height = textCanvas.height = canvas.height = canvas.offsetHeight * dpi;
		dropCanvas.width = textCanvas.width = canvas.width = canvas.offsetWidth * dpi;

		context = canvas.getContext('2d')!;
		dropContext = dropCanvas.getContext('2d')!;

		fontSize = updateTextContext(textCanvas, dpi);

		drawDrops(context, 0);
	}

	function drawDrops(context: CanvasRenderingContext2D, msPassed: number) {
		context.globalCompositeOperation = 'source-over';
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(textCanvas, 0, canvas.height * 0.08);
		context.globalCompositeOperation = 'source-atop';

		for (const drop of drops) {
			const shouldRemove = drop.update(msPassed);
			shouldRemove && idsToRemove.push(drop.id);
		}
		while (idsToRemove.length) {
			const dropIndex = drops.findIndex(drop => drop.id === idsToRemove.pop());
			~dropIndex && drops.splice(dropIndex, 1);
		}

		dropContext.clearRect(0, 0, dropCanvas.width, dropCanvas.height);
		for (const drop of drops) {
			dropContext.beginPath();
			dropContext.arc(drop.x, drop.y, drop.size, 0, 2 * Math.PI);
			dropContext.fillStyle = drop.color;
			dropContext.fill();
		}

		context.drawImage(dropCanvas, 0, 0);
	}

	function animate() {
		const currentTime = performance.now();
		const msPassed = currentTime - lastFrameTime;

		drawDrops(context, msPassed);

		lastFrameTime = currentTime;
		requestAnimationFrame(animate);
	}

	function clickAddDrop(event: MouseEvent | TouchEvent) {
		const { left, top } = headerText.getBoundingClientRect();

		let eventX: number, eventY: number;
		if ('touches' in event && event.touches.length) {
			const [touch] = event.touches;
			eventX = touch!.pageX;
			eventY = touch!.pageY;
		} else {
			eventX = (event as MouseEvent).pageX;
			eventY = (event as MouseEvent).pageY;
		}

		const elementX = left + window.pageXOffset;
		const elementY = top + window.pageYOffset;
		const x = eventX - elementX;
		const y = eventY - elementY;

		drops.push(new Drop(dropCanvas.width, dropCanvas.height, dpi, fontSize, `click-${performance.now()}`, x * dpi, y * dpi));
	}

	function randomDrop(timeoutIndex: number) {
		const intensityPercentage = 1 - Math.min(0.8, lastFrameTime / MAX_DROP_INTENSITY_TIME);
		drops.push(new Drop(canvas.width, canvas.height, dpi, fontSize));
		dropTimeouts[timeoutIndex] = setTimeout(() => randomDrop(timeoutIndex), Math.round(randomInt(1250, 2500) * intensityPercentage));
	}

	return () => {
		headerText.removeEventListener('click', clickAddDrop);
		window.removeEventListener('resize', handleResize);

		for (const timeout of dropTimeouts) {
			timeout !== undefined && clearTimeout(timeout);
		}
	};
});

function clamp(min: number, value: number, max: number) {
	return value < min ? min : value > max ? max : value;
}

function updateTextContext(textCanvas: HTMLCanvasElement, dpi: number): number {
	const fontSize = Math.round(clamp(2.5 * REM, REM + 7.5 * (window.innerWidth / 100), 10 * REM));

	const textContext = Object.assign(textCanvas.getContext('2d')!, {
		fillStyle: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'white' : 'black',
		textAlign: 'center',
		textBaseline: 'middle',
		font: `700 ${fontSize * dpi}px Atkinson Hyperlegible Next`,
	} satisfies Partial<CanvasRenderingContext2D>);
	textContext.clearRect(0, 0, textCanvas.width, textCanvas.height);
	textContext.fillText('Stanisław Perek', textCanvas.width / 2, textCanvas.height / 2);

	return fontSize;
}

function randomInt(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Drop {
	private colorPrefix;
	private timeAlive;
	public color;

	constructor(
		canvasWidth: number,
		canvasHeight: number,
		dpi: number,
		fontSize: number,
		public readonly id = performance.now().toString(),
		public readonly x = randomInt(0, canvasWidth),
		public readonly y = randomInt(canvasHeight * 0.05, canvasHeight * 0.75),
		public readonly size = Math.max(0.05, Math.random() / 5) * fontSize * dpi,
		public readonly lifespan = randomInt(800, 1800),
	) {
		this.timeAlive = 0;

		const hue = randomInt(0, 11) * 30;
		this.colorPrefix = `hsl(${hue} 100% 50%`;
		this.color = `${this.colorPrefix})`;
	}

	public update(msPassed: number): boolean {
		this.timeAlive += msPassed;

		if (this.timeAlive >= this.lifespan) {
			this.color = `${this.colorPrefix} / 0)`;
			return true;
		}

		const lifetimePassedPercentage = this.timeAlive / this.lifespan;
		const colorSuffix = 1 - lifetimePassedPercentage ** 3;

		this.color = `${this.colorPrefix} / ${colorSuffix.toFixed(4)})`;

		return false;
	}
}
