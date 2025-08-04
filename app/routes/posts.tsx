import Card from "../islands/card";
import type { Meta } from "../types";
export default function Posts() {
  const posts = import.meta.glob<{ frontmatter: Meta }>("./post/*.mdx", {
    eager: true,
  });
  return (
    <div>
      <h2>My Posts</h2>
      <p>最近更新</p>
      <div>
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
