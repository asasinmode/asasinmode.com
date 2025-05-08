import antfu from '@antfu/eslint-config';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	antfu({
		stylistic: {
			semi: true,
			indent: 'tab',
		},
		rules: {
			'curly': ['error', 'all'],
			'style/brace-style': ['error', '1tbs'],
		},
		formatters: true,
	}),
);
