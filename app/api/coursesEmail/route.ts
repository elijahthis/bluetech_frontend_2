import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";
import path from "path";
import hbs from "nodemailer-express-handlebars";
import { create } from "express-handlebars";

export async function POST(req: NextRequest, res: NextApiResponse) {
	if (req.method === "POST") {
		try {
			const body = await req.json();
			console.log("body", body);

			// Create a nodemailer transporter using your email service provider's SMTP server
			const transporter = nodemailer.createTransport({
				// service: "Gmail", // You can replace with your email service provider (e.g., 'SendGrid')
				host: "mail.privateemail.com",
				port: 465,
				auth: {
					user: "hello@elijahthis.com",
					pass: "Espionage098!",
				},

				// host: "smtp.ionos.co.uk",
				// port: 25, // Use the appropriate port (587 for TLS, 465 for SSL, 25 for non-secure)
				// secure: false, // True for 465, false for other ports
				// auth: {
				// 	user: "info@bluetechconsulting.uk", // Your Ionos email address
				// 	pass: "L@gbaja_1973", // Your Ionos email password
				// },
			});

			// point to the template folder
			const handlebarsOptions = {
				viewEngine: {
					extName: ".hbs",
					partialsDir: path.resolve("./app/api/views/"),
					defaultLayout: false,
				},
				viewPath: path.resolve("./app/api/views/"),
				extName: ".hbs",
			};

			transporter.use("compile", hbs(handlebarsOptions as any));

			// Define the email message
			const mailOptionsCustomer = {
				from: "hello@elijahthis.com",
				to: body?.email,
				subject:
					"Congratulations on booking your course with BlueTech Consulting!",
				template: "coursesSuccessfulCustomer",
				context: {
					firstName: body?.firstName,
					lastName: body?.lastName,
					email: body?.email,
					course: body?.course,
					date: new Date().toLocaleDateString("en-GB", {
						weekday: "long",
						year: "numeric",
						month: "long",
						day: "numeric",
					}),
				},
			};
			const mailOptionsCompany = {
				from: "hello@elijahthis.com",
				to: "info@bluetechconsulting.uk",
				subject: `BlueTech COURSE Booking -- ${body?.firstName} ${body?.lastName} just booked a course!`,
				template: "coursesSuccessfulCompany",
				context: {
					firstName: body?.firstName,
					lastName: body?.lastName,
					email: body?.email,
					course: body?.course,
					date: new Date().toLocaleDateString("en-GB", {
						weekday: "long",
						year: "numeric",
						month: "long",
						day: "numeric",
					}),
				},
			};

			// Send the email
			await transporter.sendMail(mailOptionsCustomer);
			await transporter.sendMail(mailOptionsCompany);

			return NextResponse.json({ message: "Email sent successfully" });
		} catch (error) {
			console.log("error", error);
			return NextResponse.json({
				error: "An error occurred while sending the email.",
			});
		}
	} else {
		res.status(405).end();
		return NextResponse.json({ error: "Method not allowed" });
	}
}
