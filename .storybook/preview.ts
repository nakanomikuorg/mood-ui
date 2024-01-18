import type { Preview } from '@storybook/svelte';
import '../src/app.css';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

if (CSS && 'paintWorklet' in CSS) {
	// @ts-ignore
	CSS.paintWorklet.addModule('https://unpkg.com/smooth-corners');
}

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},

	// @ts-ignore
	decorators: [
		withThemeByDataAttribute({
			themes: {
				// nameOfTheme: 'dataAttributeForTheme',
				light: '',
				dark: 'dark'
			},
			defaultTheme: 'light',
			// @ts-ignore
			dataAttribute: 'data-theme'
		})
	]
};

export default preview;
