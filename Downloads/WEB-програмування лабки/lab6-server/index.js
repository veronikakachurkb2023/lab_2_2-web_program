require("dotenv").config();

const Koa = require("koa");
const Router = require("@koa/router");
const bodyParser = require("koa-bodyparser");
const serve = require("koa-static");
const path = require("path");
const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const app = new Koa();
const router = new Router();

app.use(bodyParser());

// Static files
app.use(serve(path.join(__dirname, "public")));

// Test route
router.get("/api/status", (ctx) => {
  ctx.body = {
    success: true,
    message: "Server is running",
  };
});

// Contact form
router.post("/api/contact", async (ctx) => {
  const { name, email, subject, message } = ctx.request.body;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kachyrv@gmail.com",
      subject: subject,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    ctx.body = {
      success: true,
      message: "Email sent successfully",
    };
  } catch (error) {
    console.error(error);

    ctx.status = 500;

    ctx.body = {
      success: false,
      message: "Error sending email",
    };
  }
});

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});