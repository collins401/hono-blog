import { createRoute } from "honox/factory";
import type { Meta } from "../types";

export default createRoute(async (c) => {
  // 获取所有 MDX 文件
  const posts = import.meta.glob<{ frontmatter: Meta }>("./post/*.mdx", {
    eager: true,
  });

  // 站点信息
  const siteTitle = "My Blog";
  const siteDescription = "A blog built with HonoX";
  const siteUrl = "https://yourdomain.com"; // 请替换为实际域名
  const lastBuildDate = new Date().toUTCString();

  // 生成文章项
  const items = Object.entries(posts)
    .filter(([_, module]) => module.frontmatter)
    .map(([id, module]) => {
      const postId = id.replace("./post/", "").replace(".mdx", "");
      const { title, description, date } = module.frontmatter;
      const postUrl = `${siteUrl}/post/${postId}`;
      const pubDate = date ? new Date(date).toUTCString() : lastBuildDate;

      return `
    <item>
      <title><![CDATA[${title}]]></title>
      <description><![CDATA[${description || ""}]]></description>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join("");

  // 生成完整的 RSS XML
  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${siteTitle}]]></title>
    <description><![CDATA[${siteDescription}]]></description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/rss" rel="self" type="application/rss+xml" />
    <language>zh-cn</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>HonoX</generator>${items}
  </channel>
</rss>`;

  // 设置正确的 Content-Type 并返回 XML
  return c.newResponse(rssXml, {
    headers: {
      "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
});
