import { redirect } from '@sveltejs/kit';

import type { Actions, PageServerLoad } from './$types';

import { SESSION_COOKIE_NAME } from '$lib/constants';
import { getUserName } from '$lib/database/databaseUtils.server';
import { route } from '$lib/ROUTES';

export const load = (async ({ cookies }) => {
	const userId = cookies.get(SESSION_COOKIE_NAME);

	if (!userId) throw redirect(303, route('/auth/login'));

	return {
		loggedOnUser: await getUserName(userId)
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ cookies }) => {
		cookies.delete(SESSION_COOKIE_NAME, {
			path: route('/')
		});

		throw redirect(303, route('/auth/login'));
	}
};
