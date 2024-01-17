import { usersTable } from '$lib/database/schema';
import { createInsertSchema } from 'drizzle-zod';

export const RegisterUserSchema = createInsertSchema(usersTable, {
	name: (schema) => schema.name.min(2),
	email: (schema) => schema.email.email(),
	password: (schema) => schema.password.min(2)
});
