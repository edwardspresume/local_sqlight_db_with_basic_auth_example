import type { Actions, PageServerLoad } from './$types';

import { message, setError, superValidate } from 'sveltekit-superforms/server';

import {
	checkIfEmailExists,
	deleteAllUsers,
	getAllUsers,
	insertNewUser
} from '$lib/database/databaseUtils.server';
import type { AlertMessageType } from '$lib/types';
import { logError } from '$lib/utils';
import { RegisterUserSchema } from '$validations/RegisterUserSchema';

export const load = (async () => {
	return {
		registerUserFormData: await superValidate(RegisterUserSchema),

		allUsers: await getAllUsers()
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	deleteAllUsers: async () => {
		await deleteAllUsers();
	},

	registerUser: async ({ request }) => {
		const registerUserFormData = await superValidate<typeof RegisterUserSchema, AlertMessageType>(
			request,
			RegisterUserSchema
		);

		if (registerUserFormData.valid === false) {
			return message(registerUserFormData, {
				alertType: 'error',
				alertText: 'There was a problem with your submission.'
			});
		}

		try {
			const isEmailAlreadyRegistered = await checkIfEmailExists(registerUserFormData.data.email);

			if (isEmailAlreadyRegistered === true) {
				return setError(registerUserFormData, 'email', 'Email already exists.');
			}

			await insertNewUser({
				name: registerUserFormData.data.name,
				email: registerUserFormData.data.email,
				password: registerUserFormData.data.password
			});

			return message(registerUserFormData, {
				alertType: 'success',
				alertText: 'User registered successfully.'
			});
		} catch (error) {
			logError(error);

			return message(registerUserFormData, {
				alertType: 'error',
				alertText: 'There was an error with your submission'
			});
		}
	}
};
