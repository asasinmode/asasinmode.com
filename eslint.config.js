import antfu from '@antfu/eslint-config';
import nuxt from './.nuxt/eslint.config.mjs';

export default nuxt(
	antfu({
		stylistic: {
			semi: true,
			indent: 'tab',
		},
		rules: {
			'curly': ['error', 'all'],
			'no-labels': 'off',
			'style/brace-style': ['error', '1tbs'],
		},
		formatters: true,
	}),
);
