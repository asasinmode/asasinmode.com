const rem = 16;

export default new Skin('index-default', () => {
	const canvas = Object.assign(document.createElement('canvas'), { id: 'name-header-canvas' });
	const dropCanvas = document.createElement('canvas');
	const textCanvas = document.createElement('canvas');

	const dpi = window.devicePixelRatio;

	const headerText = document.getElementById('name-header-text')!;
	headerText.appendChild(canvas);
	headerText.style = 'color: transparent;';

	handleResize();

	window.addEventListener('resize', handleResize);

	function handleResize() {
		dropCanvas.height = textCanvas.height = canvas.height = canvas.offsetHeight * dpi;
		dropCanvas.width = textCanvas.width = canvas.width = canvas.offsetWidth * dpi;

		updateTextContext(textCanvas, dpi);

		const context = canvas.getContext('2d')!;

		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(textCanvas, 0, canvas.height * 0.08);
		context.globalCompositeOperation = 'source-in';
	}

	return () => {
		console.log('unmounting DEFAULT index');

		window.removeEventListener('resize', handleResize);
	};
});

function clamp(min: number, value: number, max: number) {
	return value < min ? min : value > max ? max : value;
}

function updateTextContext(textCanvas: HTMLCanvasElement, dpi: number) {
	const fontSize = Math.round(clamp(2.5 * rem, rem + 7.5 * (window.innerWidth / 100), 10 * rem));
	const textContext = Object.assign(textCanvas.getContext('2d')!, {
		fillStyle: 'white',
		textAlign: 'center',
		textBaseline: 'middle',
		font: `700 ${fontSize * dpi}px Atkinson Hyperlegible Next`,
	} satisfies Partial<CanvasRenderingContext2D>);
	textContext.clearRect(0, 0, textCanvas.width, textCanvas.height);
	textContext.fillText('Stanisław Perek', textCanvas.width / 2, textCanvas.height / 2);
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
		public readonly id = performance.now(),
		public readonly x = randomInt(0, canvasWidth),
		public readonly y = randomInt(0, canvasHeight),
		public readonly size = randomInt(2, 5),
		public readonly lifespan = randomInt(50, 70),
		public readonly disappearDuration = randomInt(20, 50),
	) {
		this.timeAlive = 0;

		const colorRandom = Math.random();
		this.colorPrefix = colorRandom < 0.33
			? 'hsl(205 100% 65%'
			: colorRandom < 0.66
				? 'hsl(205 100% 70%'
				: 'hsl(205 100% 75%';
		this.color = `${this.colorPrefix})`;
	}

	public update(msPassed: number, idsToRemove: number[]) {
		this.timeAlive += msPassed;
		let colorSuffix = ')';

		const disappearTime = this.timeAlive - this.lifespan + this.disappearDuration + 5 * this.size;
		if (disappearTime > 0) {
			if (disappearTime >= this.disappearDuration) {
				idsToRemove.push(this.id);
				return;
			}
			const x = Math.max(0, 1 - disappearTime / this.disappearDuration);
			colorSuffix = `/ ${x})`;
		}

		this.color = this.colorPrefix + colorSuffix;
	}
}

// let drops: Drop[] = [];
// let idsToRemove: number[] = [];
// let lastFrameTime = performance.now();

// function animate() {
// 	const currentTime = performance.now();
// 	const msPassed = currentTime - lastFrameTime;

// 	dropContext.clearRect(0, 0, canvas.width, canvas.height);
// 	for (const ripple of ripples) {
// 		ripple.draw(msPassed);
// 	}
// 	if (idsToRemove.length) {
// 		ripples = ripples.filter(ripple => !idsToRemove.includes(ripple.id));
// 		idsToRemove = [];
// 	}

// 	lastFrameTime = currentTime;
// 	requestAnimationFrame(animate);
// }

// animate();

// function randomRipple() {
// 	ripples.push(new Ripple());
// 	setTimeout(randomRipple, randomInt(1250, 2500));
// }

// randomRipple();
// setTimeout(randomRipple, 300);
