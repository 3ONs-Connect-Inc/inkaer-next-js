import { db, admin } from "../config/firebase.js";
import sgMail from "../config/sendgrid.js";

export const submitShortlist = async (req, res) => {
  const { name, company, roleTitle, tools, domain, industry, location, urgency, email } = req.body;

  // Save to Firestore
  const docRef = await db.collection("shortlistRequests").add({
    name,
    company,
    roleTitle,
    tools,
    domain,
    industry,
    location,
    urgency,
    email,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  // 1. Confirmation email to the user
  const userMsg = {
    to: email,
    from: process.env.FROM_EMAIL,
    templateId: process.env.SENDGRID_TEMPLATE_ID,
    dynamicTemplateData: {
      name,
      company,
      roleTitle,
      tools,
      domain,
      industry,
      location,
      urgency,
      email,
    },
  };

  // 2. Notification email to admin/fromEmail
  const adminMsg = {
    to: process.env.FROM_EMAIL, 
    from: process.env.FROM_EMAIL, // must be verified sender in SendGrid
    subject: "📩 New Shortlist Subscription",
    text: `${name || "Someone"} just subscribed with email ${email}.`,
    html: `
      <p><strong>${name || "Someone"}</strong> just subscribed.</p>
      <p>Email: ${email}</p>
      <p>Company: ${company}</p>
      <p>Role: ${roleTitle}</p>
      <p>Urgency: ${urgency}</p>
      <p>Submitted at: ${new Date().toLocaleString()}</p>
    `,
  };

  try {
    // Send both emails
    await sgMail.send([userMsg, adminMsg]);

    res.status(200).json({ success: true, id: docRef.id });
  } catch (error) {
    console.error("SendGrid error:", error);
    res.status(500).json({ error: "Email failed to send" });
  }
};
