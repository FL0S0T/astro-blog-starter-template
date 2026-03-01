import type { MiddlewareHandler } from "astro";

const PASSWORD = "PreviewFlorianBlog1337#";
const COOKIE_NAME = "site-auth";
const AUTH_TOKEN = "authenticated";
const AUTH_PATH = "/__auth";

function loginPage(error?: string): Response {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Site Preview</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: "Inter", -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif;
      background: #0a0a0c;
      color: #f5f5f7;
      min-height: 100dvh;
      display: flex;
      align-items: center;
      justify-content: center;
      -webkit-font-smoothing: antialiased;
    }
    .card {
      background: #141416;
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      padding: 2.5rem 2rem;
      width: 100%;
      max-width: 380px;
      margin: 1rem;
      box-shadow: 0 8px 40px rgba(0,0,0,0.4);
    }
    h1 {
      font-size: 1.5em;
      font-weight: 700;
      letter-spacing: -0.025em;
      margin-bottom: 0.5rem;
    }
    p {
      color: #86868b;
      font-size: 0.925em;
      line-height: 1.5;
      margin-bottom: 1.5rem;
    }
    .error {
      color: #ff453a;
      font-size: 0.875em;
      margin-bottom: 1rem;
    }
    label {
      display: block;
      font-size: 0.85em;
      font-weight: 500;
      color: #86868b;
      margin-bottom: 0.5rem;
    }
    input[type="password"] {
      width: 100%;
      padding: 0.875em 1.25em;
      background: #1c1c1e;
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 12px;
      color: #f5f5f7;
      font-size: 1em;
      font-family: inherit;
      min-height: 48px;
      transition: border-color 0.2s ease, box-shadow 0.2s ease;
      outline: none;
    }
    input[type="password"]:focus {
      border-color: #4f7cff;
      box-shadow: 0 0 0 3px rgba(79,124,255,0.12);
    }
    button {
      display: block;
      width: 100%;
      margin-top: 1rem;
      padding: 0.75em 1.75em;
      background: #4f7cff;
      color: #fff;
      font-weight: 500;
      font-size: 0.95em;
      font-family: inherit;
      border: none;
      border-radius: 980px;
      cursor: pointer;
      min-height: 44px;
      letter-spacing: -0.01em;
      transition: filter 0.25s ease, transform 0.25s ease;
    }
    button:hover {
      filter: brightness(1.1);
      transform: scale(1.02);
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Preview Access</h1>
    <p>This site is not public yet. Enter the password to continue.</p>
    ${error ? `<p class="error">${error}</p>` : ""}
    <form method="POST" action="${AUTH_PATH}">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required autofocus />
      <button type="submit">Continue</button>
    </form>
  </div>
</body>
</html>`;

  return new Response(html, {
    status: 401,
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { request, url, cookies } = context;

  // Handle auth form submission
  if (url.pathname === AUTH_PATH && request.method === "POST") {
    const formData = await request.formData();
    const password = formData.get("password");

    if (password === PASSWORD) {
      cookies.set(COOKIE_NAME, AUTH_TOKEN, {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        maxAge: 604800,
      });
      return context.redirect("/");
    }

    return loginPage("Wrong password. Please try again.");
  }

  // Check auth cookie on all other requests
  const authCookie = cookies.get(COOKIE_NAME);
  if (authCookie?.value !== AUTH_TOKEN) {
    return loginPage();
  }

  return next();
};
