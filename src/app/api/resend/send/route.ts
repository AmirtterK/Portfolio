import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return Response.json(
        { error: "Server configuration error" }, 
        { status: 500 }
      );
    }

    const body = await req.json();
    console.log("Received body:", body); // Debug log
    
    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return Response.json(
        { error: "Missing required fields: name, email, message" }, 
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return Response.json(
        { error: "Invalid email format" }, 
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["strikereureka7661@gmail.com"],
      subject: "New Portfolio Contact Form Submission",
      replyTo: body.email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Message:</strong></p>
        <p>${body.message}</p>
        `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error("sending failed:", error);
    return Response.json(
      { error: "Failed to send email", details: error }, 
      { status: 500 }
    );
  }
}