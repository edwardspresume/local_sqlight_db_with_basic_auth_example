import type { LayoutServerLoad } from './$types';

import { createBaseMetaTags } from '$lib/utils/metaTags';

export const load = (async ({ url }) => {
	const baseMetaTags = createBaseMetaTags(url);

	return {
		baseMetaTags: Object.freeze(baseMetaTags)
	};
}) satisfies LayoutServerLoad;
