import Database from 'better-sqlite3';
import { drizzle } from 'drizzle-orm/better-sqlite3';

import * as schema from './schema';

const sqliteClient = new Database('databaseStorage/sqlite.db');

export const database = drizzle(sqliteClient, {
	schema
});
