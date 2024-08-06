import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT,
    sessionKey: process.env.SESSION_KEY,
    db: {
        user: process.env.PG_USER,
        host: process.env.PG_HOST,
        database: process.env.PG_DB,
        password: process.env.PG_PASSWORD,
        port: process.env.PG_PORT,
    },
    email: process.env.EMAIL,
    emailPassword: process.env.PASSWORD,
    supabaseURL: process.env.SUPABASE_URL,
    supabaseKEY: process.env.SUPABASE_KEY
};
