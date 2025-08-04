import { Logo } from "../components/icons";
import { jsxRenderer } from "hono/jsx-renderer";
import { Link } from "honox/server";

export default jsxRenderer(({ children, title, frontmatter }) => {
  return (
    <html lang="en" class="light">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {<title>{title ?? frontmatter?.title ?? "My Blog"}</title>}
        <Link rel="stylesheet" href="/app/style.css" />
      </head>
      <body>
        <header>
          <div class="max-w-5xl mx-auto py-3 flex justify-between">
            <a href="/" class="flex items-center gap-2">
              <span class="p-2 rounded-xl bg-[#a3a85e] ">
                <Logo class="size-6" />
              </span>
              <span class="text-xl font-bold text-[#a3a85e]">SAIL-FORGE</span>
            </a>
            <nav class="h-10 flex items-center gap-3 text-lg font-medium">
              <a href="/">Home</a>
              <a href="/posts">Posts</a>
              <a href="/about">About</a>
            </nav>
          </div>
        </header>
        <main class={"max-w-5xl mx-auto min-h-[calc(100svh-8rem)]"}>
          {children}
        </main>
        <footer class="h-16 border-t border-dashed pt-4 mx-auto text-center">
          <p>&copy; 2024 My Blog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
});
