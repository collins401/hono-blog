import { Circle, LinkSvg } from "../components/icons";
import Card from "../islands/card";
import type { Meta } from "../types";

export default function Home() {
  const posts = Object.entries(
    import.meta.glob<{ frontmatter: Meta }>("./post/*.mdx", {
      eager: true,
    })
  )
    .sort(([, a], [, b]) => {
      const dateA = new Date(a.frontmatter?.date || "");
      const dateB = new Date(b.frontmatter?.date || "");
      return dateB.getTime() - dateA.getTime(); // 按时间降序排序（最新的在前）
    })
    .reduce(
      (acc, [key, value]) => {
        acc[key] = value;
        return acc;
      },
      {} as Record<string, { frontmatter: Meta }>
    );
  return (
    <>
      <div class="flex mx-5 md:mx-0 pt-10">
        <div class="flex-1 prose">
          <h2 class="text-4xl">Hi,there!</h2>
          <div class="text-xl font-medium">一个大龄前端开发、俩娃的爸</div>
          <ul class="prose-li:marker:text-neutral-500">
            <li>有时写点 React</li>
            <li>也写一些 Vue</li>
            <li>偶尔写点 SolidJs</li>
            <li>和 NodeJs</li>
            <li>more...</li>
          </ul>
          <a
            href="/about"
            class="inline-block relative px-8 py-4 rounded-md border-[1px] group mt-4 font-semibold text-lg"
          >
            About Me
            <span class="absolute w-full h-full duration-300 left-0 top-0 ease-out group-hover:translate-x-2 group-hover:translate-y-2 bg-amber-400 -z-1 rounded-md"></span>
          </a>
        </div>
        <div class="flex-1 hidden md:flex">
          <div class="relative w-[514px] h-[525px]  overflow-hidden">
            <Circle />
            <img
              src="/avatar.png"
              class="absolute object-cover left-[10%] top-[10%] rounded-full top-0 w-[80%] h-[80%]"
            />
          </div>
        </div>
      </div>
      <div class="mx-4 md:mx-0">
        <div class="relative md:my-32 my-16">
          <div class="relative w-full pl-5 overflow-x-hidden md:pl-0">
            <div class="absolute w-full h-px bg-gradient-to-r from-transparent to-white md:from-white dark:from-transparent dark:to-neutral-950 md:dark:from-neutral-950 md:via-transparent md:dark:via-transparent md:to-white md:dark:to-neutral-950"></div>{" "}
            <div class="w-full h-px border-t border-dashed border-neutral-300 dark:border-neutral-600"></div>{" "}
          </div>
          <div class="absolute flex items-center justify-center w-auto h-auto px-3 py-1.5 uppercase tracking-widest space-x-1 text-[0.6rem] md:-translate-x-1/2 -translate-y-1/2 border rounded-full bg-white dark:bg-neutral-900 text-neutral-400 left-0 md:ml-0 ml-5 md:left-1/2 border-neutral-100 dark:border-neutral-800 shadow-sm">
            <p class="leading-none">Check out my posts</p>
            <div class="flex items-center justify-center w-5 h-5 translate-x-1 border rounded-full border-neutral-100 dark:border-neutral-800">
              <LinkSvg />
            </div>
          </div>
        </div>
        <div class="md:flex gap-8 items-start">
          <ul class="flex-1 grid-cols-1 grid gap-5">
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
          </ul>
          <div class="border w-[250px] mt-6 md:mt-0 border-dashed rounded-2xl p-5">
            订阅 Rss
            <div>
              <input
                id="rss-input"
                class="border p-1 rounded-md w-full"
                value="https://your-domain.com/feed.xml"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
