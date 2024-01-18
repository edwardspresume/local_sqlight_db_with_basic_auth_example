import type { LayoutServerLoad } from './$types';

import { loadFlash } from 'sveltekit-flash-message/server';

import { createBaseMetaTags } from '$lib/utils/metaTags';

export const load = loadFlash(async ({ url }) => {
	const baseMetaTags = createBaseMetaTags(url);

	return {
		baseMetaTags: Object.freeze(baseMetaTags)
	};
}) satisfies LayoutServerLoad;
