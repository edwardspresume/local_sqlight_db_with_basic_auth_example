import Database from 'better-sqlite3';
import { drizzle, type BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';

const sqliteClient = new Database('databaseStorage/sqlite.db');

export const database: BetterSQLite3Database = drizzle(sqliteClient);
