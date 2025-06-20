declare module '#app' {
	interface PageMeta {
		enabledSkins?: ISkinName[];
	}
}

declare global {
	interface Window {
		/** reset in `Skin` constructor and maybe set in skin setup */
		skinUpdateColorScheme: (() => void) | undefined;
	}
	/** added in `nuxt.config.ts` injected script */
	function skinIsDarkMode(): boolean;
}

export {};
