import dotenv from "dotenv";
dotenv.config();

export const {
    SERVER_PORT,
    APP_URL,
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_SERVICE
} =  process.env;