import { register, init, getLocaleFromNavigator, _, waitLocale } from 'svelte-i18n';

const setupI18n = () => {
	register('en', () => import('./en.json'));
	register('fr', () => import('./fr.json'));

	return init({
		fallbackLocale: 'en',
		initialLocale: getLocaleFromNavigator()
	});
};

setupI18n();

export { _, setupI18n, waitLocale };
