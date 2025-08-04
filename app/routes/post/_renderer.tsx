import { Meta } from "@/types";
import { spawn } from "child_process";
import { jsxRenderer } from "hono/jsx-renderer";
import { Link } from "honox/server";

export default jsxRenderer(async ({ children, Layout, title }, c) => {
  const currentPath = c.req.path.split("/");
  const name = currentPath[currentPath.length - 1];
  console.log("---", name);

  // 使用静态 glob 模式导入所有 MDX 文件
  const posts = import.meta.glob<{ frontmatter: Meta }>("./*.mdx", {
    eager: true,
  });

  // 根据当前路径找到对应的 MDX 文件
  let currentTitle = title || "博客文章";
  let date = "";
  let tag = "";
  const currentPostKey = `./${name}.mdx`;
  const currentPost = posts[currentPostKey];

  if (currentPost && currentPost.frontmatter) {
    currentTitle = currentPost.frontmatter.title;
    date = currentPost.frontmatter.date;
    tag = currentPost.frontmatter.tag;
  }

  console.log("Current post key:", currentPostKey);
  console.log("Found post:", !!currentPost);

  return (
    <Layout>
      <title>{currentTitle}</title>

      <div class="max-w-4xl mx-4 pt-10  md:mx-auto prose md:prose-lg prose-li:marker:text-neutral-500 [&>figure>pre]:p-4 [&>figure>pre]:rounded-lg">
        <h1 class="text-center">{currentTitle}</h1>
        <div class="border-b pb-2 text-base border-dashed flex gap-5 justify-center items-center">
          发布时间：{date}
          <div>
            标签：
            {tag?.map((t, i) => (
              <span
                key={t}
                class={`inline-block font-bold mx-2 rounded-md px-2  ${i === 0 ? "bg-[#F1BE49] text-[#317039]" : "bg-[#317039] text-white"}`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        {children}
      </div>
    </Layout>
  );
});
