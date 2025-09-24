import { db, admin } from "../config/firebase.js";
import sgMail from "../config/sendgrid.js";

export const submitContact = async (req, res) => {
  const { firstName, lastName, email, company, subject, message } = req.body;

  try {
    // Save to Firestore
    const docRef = await db.collection("contactMessages").add({
      firstName,
      lastName,
      email,
      company,
      subject,
      message,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    // 1. Confirmation email to the user
    const userMsg = {
      to: email,
      from: process.env.FROM_EMAIL,
      templateId: process.env.SENDGRID_CONTACT_TEMPLATE_ID, // your dynamic template for contact confirmation
      dynamicTemplateData: {
        firstName,
        lastName,
        email,
        company,
        subject,
        message,
      },
    };

    // 2. Notification email to admin/fromEmail
    const adminMsg = {
      to: process.env.FROM_EMAIL, // you (admin) get the alert
      from: process.env.FROM_EMAIL,
      subject: "📩 New Contact Form Submission",
      text: `${firstName} ${lastName} just sent a message: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <blockquote>${message}</blockquote>
        <hr/>
        <p>Submitted at: ${new Date().toLocaleString()}</p>
      `,
    };

    // Send both emails
    await sgMail.send([userMsg, adminMsg]);

    res.status(200).json({ success: true, id: docRef.id });
  } catch (error) {
    console.error("SendGrid error:", error);
    res.status(500).json({ error: "Email failed to send" });
  }
};
