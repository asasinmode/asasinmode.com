import type { RouteNamedMapI18n } from 'vue-router/auto-routes';

export type ISkinName = 'default' | 'minimal';
export type ISkinPage = keyof RouteNamedMapI18n;
export type ISkinKey = `${ISkinPage}-${ISkinName}`;

export class Skin {
	constructor(
		public readonly key: ISkinKey,
		public readonly onMounted?: () => void,
		public readonly onBeforeUnmount?: () => void,
	) {}
}
