import type { RouteNamedMapI18n } from 'vue-router/auto-routes';

export type ISkinName = 'default' | 'minimal';
export type ISkinPage = keyof RouteNamedMapI18n;
export type ISkinKey = `${ISkinPage}-${ISkinName}`;

export class Skin {
	public onMounted: (() => void) | undefined;
	public onBeforeUnmount: (() => void) | undefined;

	constructor(
		public readonly key: ISkinKey,
		setup?: () => (() => void) | void,
	) {
		if (setup) {
			this.onMounted = () => {
				this.onBeforeUnmount = setup() || undefined;
			};
		}
	}
}
