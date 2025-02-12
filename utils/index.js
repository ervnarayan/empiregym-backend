import { SMTP_HOST, SMTP_PASS, SMTP_PORT, SMTP_SERVICE, SMTP_USER } from "../config";
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    service: SMTP_SERVICE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
});

const mailUtils = {

    async sendTextMail (req, res, next) {
        const { name, email, message } = req.body; 
        if(!name || !email || !message) return next(res.status(400).json({ message: "Please provide all the required fields." }));

        try {
            await transporter.sendMail({
                from: email, // sender address
                to: SMTP_USER, // list of receivers
                subject: "Empire Gym Contacts", // Subject line
                text: `${message} \n\n This message is sent by : ${name} (${email}) `, // plain text body
            });
            return res.status(200).json({ success: true, message: "Email sent successfully." });

        }catch (error) {
            return next(res.status(500).json({ message: error.message }));
        }   
    }
}

export default mailUtils;