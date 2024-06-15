import antfu from '@antfu/eslint-config';

const config = await antfu({
	unocss: true,
	stylistic: {
		semi: true,
		indent: 'tab',
	},
	rules: {
		'curly': ['error', 'all'],
		'no-labels': 'off',
		'style/brace-style': ['error', '1tbs'],
	},
});

export default config;
