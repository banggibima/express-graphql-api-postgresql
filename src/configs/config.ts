import dotenv from 'dotenv';

dotenv.config();

const config = {
  port: process.env.PORT,
  database: {
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT as string),
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS,
    name: process.env.POSTGRES_NAME,
  },
};

export default config;
