import { usersTable } from '$lib/database/schema';
import { createInsertSchema } from 'drizzle-zod';

export const RegisterUserSchema = createInsertSchema(usersTable);
