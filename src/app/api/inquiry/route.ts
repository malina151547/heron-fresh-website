import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, port, desk, program, product, volume, requirements } = body;

    // Validate required fields
    if (!name || !email || !port) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, port)" },
        { status: 400 }
      );
    }

    // HTML Email Template matching our high-end branding
    const htmlEmail = `
      <div style="font-family: sans-serif; background-color: #F7F9F5; padding: 40px; color: #333C37; max-width: 600px; margin: 0 auto; border: 1px solid rgba(34, 93, 56, 0.15); border-radius: 16px;">
        <!-- Header -->
        <div style="background-color: #225D38; padding: 24px; text-align: center; border-radius: 12px 12px 0 0;">
          <h2 style="color: #F7F9F5; margin: 0; font-family: serif; font-size: 24px; font-weight: 600;">Heron Fresh</h2>
          <p style="color: #459A26; margin: 4px 0 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: bold;">New B2B RFQ Inquiry</p>
        </div>

        <!-- Body -->
        <div style="padding: 24px 16px; background-color: #ffffff; border-radius: 0 0 12px 12px;">
          <h3 style="color: #225D38; border-bottom: 1px solid rgba(34, 93, 56, 0.1); padding-bottom: 8px; margin-top: 0; font-size: 16px;">Buyer Contact Details</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 13px;">
            <tr>
              <td style="padding: 6px 0; color: #225D38; font-weight: bold; width: 140px;">Contact Name:</td>
              <td style="padding: 6px 0; color: #333C37;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #225D38; font-weight: bold;">Corporate Email:</td>
              <td style="padding: 6px 0; color: #333C37;"><a href="mailto:${email}" style="color: #459A26; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #225D38; font-weight: bold;">Destination Port:</td>
              <td style="padding: 6px 0; color: #333C37;">${port}</td>
            </tr>
          </table>

          <h3 style="color: #225D38; border-bottom: 1px solid rgba(34, 93, 56, 0.1); padding-bottom: 8px; margin-top: 0; font-size: 16px;">Trade & Order Specifications</h3>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 13px;">
            <tr>
              <td style="padding: 6px 0; color: #225D38; font-weight: bold; width: 140px;">Trade Desk Route:</td>
              <td style="padding: 6px 0; color: #333C37;">${desk}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #225D38; font-weight: bold;">Supply Program:</td>
              <td style="padding: 6px 0; color: #333C37;">${program}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #225D38; font-weight: bold;">Product Segment:</td>
              <td style="padding: 6px 0; color: #333C37;">${product}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #225D38; font-weight: bold;">Target Volume:</td>
              <td style="padding: 6px 0; color: #333C37;">${volume}</td>
            </tr>
          </table>

          <h3 style="color: #225D38; border-bottom: 1px solid rgba(34, 93, 56, 0.1); padding-bottom: 8px; margin-top: 0; font-size: 16px;">Packaging & Grading Requirements</h3>
          <div style="background-color: #F7F9F5; padding: 16px; border-radius: 8px; font-size: 13px; color: #333C37; line-height: 1.6; border-left: 3px solid #459A26;">
            ${requirements ? requirements.replace(/\n/g, "<br />") : "<i>No custom requirements specified.</i>"}
          </div>
        </div>

        <!-- Footer -->
        <div style="margin-top: 24px; text-align: center; font-size: 10px; color: #333C37/50; line-height: 1.5;">
          <p style="margin: 0;">This inquiry was submitted from the official Heron Fresh website.</p>
          <p style="margin: 4px 0 0 0;">&copy; ${new Date().getFullYear()} Heron Fresh Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    `;

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      // Development mode simulation: Log to console and return success
      console.log("=== RESEND EMAIL SIMULATION (RESEND_API_KEY is not configured) ===");
      console.log(`To: malina151547@gmail.com`);
      console.log(`Subject: New B2B RFQ Specification: ${product} from ${name}`);
      console.log("===============================================================");
      return NextResponse.json({
        success: true,
        simulated: true,
        message: "Email successfully logged in console. Configure RESEND_API_KEY in production to send real emails.",
      });
    }

    // Call Resend REST API (clean and dependency-free)
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Heron Fresh Trade Desk <onboarding@resend.dev>",
        to: ["malina151547@gmail.com"],
        subject: `[Heron Fresh RFQ] ${product} - ${name}`,
        html: htmlEmail,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Resend API Error:", data);
      return NextResponse.json(
        { error: "Failed to send email through Resend API", details: data },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: "Email sent successfully", data });
  } catch (error) {
    console.error("Inquiry API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
