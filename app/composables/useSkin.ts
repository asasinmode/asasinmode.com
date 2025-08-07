const skinCache: Partial<Record<ISkinKey, Skin>> = {};

// TODO should also change the skin stylesheet
/**
 * should be called only in page component and enables skins on that page
 *
 * by default all skins are enabled and the function expects `~/composables/skins/${page}`
 * to contain a `${skin}.ts` for every `ISkinName` but you can enable only some of them with
 * @example
 * ```ts
 * definePageMeta({ enabledSkins: ['default'] });
 * useSkin(defaultSkin); // only default skin will be enabled
 * ```
 */
export default async function useSkin(defaultSkin: Skin) {
	const route = useRoute();
	const { enabledSkins } = route.meta;
	const page = route.name as string;
	// const page = useRouteBaseName()(route) as ISkinPage;
	const skinName = useState<ISkinName>('skinName', () => 'default');

	let currentSkin: Skin | undefined;

	if (enabledSkins && !enabledSkins.includes(skinName.value)) {
		skinName.value = 'default';
	}

	const unwatch = watch(skinName, async (value) => {
		if (enabledSkins && !enabledSkins.includes(value)) {
			skinName.value = 'default';
		}

		const skin = await getSkin(page, value);
		currentSkin?.onBeforeUnmount?.();
		currentSkin = skin;
		currentSkin.onMounted?.();
	});

	/**
	 * when navigating, `onMounted` is called before `currentSkin` is changed to a new page's one
	 * in those cases new skin's `onMounted` is called manually
	 */
	let mountNewSkinManually = false;

	onMounted(() => {
		if (currentSkin?.key === `${page}-${skinName.value}`) {
			currentSkin?.onMounted?.();
			mountNewSkinManually = false;
		} else {
			mountNewSkinManually = true;
		}
	});

	onBeforeUnmount(() => {
		unwatch();
		currentSkin?.onBeforeUnmount?.();
	});

	currentSkin = await getSkin(page, skinName.value);
	mountNewSkinManually && currentSkin?.onMounted?.();

	async function getSkin(page: ISkinPage, skin: ISkinName): Promise<Skin> {
		if (skin === 'default') {
			return defaultSkin;
		}

		const key: ISkinKey = `${page}-${skin}`;
		// TODO maybe add loading indicator?
		skinCache[key] ||= await import(`./skins/${page}/${skin}.ts`).then(mod => mod.default);

		return skinCache[key]!;
	}
}
