import nodemailer from 'nodemailer';
import { MailAdapter, SendaMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8b633eec6b4457",
      pass: "48d7d4cd327c26"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendaMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Luiz Fernando Alves <lfoalves0001@gmail.com',
            subject,
            html: body,
        });        
    }
}