import Card from "../islands/card";
import type { Meta } from "../types";
export default function Posts() {
  const posts = import.meta.glob<{ frontmatter: Meta }>("./post/*.mdx", {
    eager: true,
  });
  return (
    <div class="pt-10 max-w-3xl mx-4 md:mx-auto">
      <h2>My Posts</h2>
      <p>最近更新</p>
      <div class="mt-4">
        <div class="space-x-6">
          {Object.entries(posts).map(([id, module]) => {
            if (module.frontmatter) {
              console.log(module.frontmatter);
              return (
                <Card
                  link={`${id.replace(/\.mdx$/, "")}`}
                  frontmatter={module.frontmatter}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
