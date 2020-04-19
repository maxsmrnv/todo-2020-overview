import dotenv from 'dotenv';

dotenv.config();

export const APP_PORT = process.env.APP_PORT || 7777;
export const DB_URL = process.env.DB_URL;
