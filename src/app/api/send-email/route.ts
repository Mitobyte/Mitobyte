import { NextResponse, NextRequest } from "next/server";
import { CreateEmailOptions, Resend } from "resend";

export const runtime = "edge";
const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req: NextRequest) => {
  try {
    // Parse the request body to extract form data
    const { name, email, message } = await req.json();

    // Define the email options based on whether an attachment is provided
    let mailOptions;

    // If no attachment is provided, use this configuration
    mailOptions = {
      from: process.env.SMTP_EMAIL, // Sender's email address
      to: ["contact@mitobyte.com"], // Recipient's email address
      subject: `New Message from ${email}`, // Email subject
      html: `
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>New Message from ${name}</title>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  color: #333;
                }
                .container {
                  padding: 20px;
                  max-width: 600px;
                  margin: 0 auto;
                  border: 1px solid #ddd;
                  border-radius: 4px;
                }
                .header {
                  font-size: 20px;
                  font-weight: bold;
                  margin-bottom: 10px;
                }
                .content {
                  line-height: 1.5;
                }
                .footer {
                  text-align: center;
                  font-size: 12px;
                  margin-top: 20px;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h1 class="header">New message from your Website</h1>
                <p class="content">
                 A new message from <strong>${name}</strong> (${email}).
                </p>
                <p class="content">
                  **Message:**<br>
                  ${message}
                </p>
                <p class="footer">
                  &copy; mitobyte.com 2025. All rights reserved.
                </p>
              </div>
            </body>
          </html>`,
    } as CreateEmailOptions;

    // Send the email with the configured options
    const { data, error } = await resend.emails.send(mailOptions);

    // Respond with success message
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (err) {
    // Respond with error message if something goes wrong
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
