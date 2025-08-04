import { Circle, LinkSvg } from "../components/icons";
import Card from "../islands/card";
import type { Meta } from "../types";

export default function Home() {
  const posts = import.meta.glob<{ frontmatter: Meta }>("./post/*.mdx", {
    eager: true,
  });
  return (
    <>
      <div class="flex mx-5 md:mx-0 pt-10">
        <div class="flex-1 prose">
          <h2 class="text-4xl">Hi,there!</h2>
          <div class="text-xl font-medium">
            一个前端开发工程师/全粘开发/vibe code
          </div>
          <ul>
            <li>偶尔写点 ReactJs</li>
            <li>偶尔写点 VueJs</li>
            <li>偶尔写点 SolidJs</li>
            <li>偶尔写点 NodeJs</li>
            <li>more...</li>
          </ul>
          <a
            href="/about"
            class="inline-block relative px-8 py-4 rounded-md border-[1px]   mt-4 font-semibold text-lg"
          >
            About Me
            <span class="absolute w-full h-full left-[6px] top-[6px] bg-amber-400 -z-1 rounded-md"></span>
          </a>
        </div>
        <div class="flex-1 hidden md:flex">
          <div>
            <Circle />
          </div>
        </div>
      </div>
      <div class="relative my-32">
        <div class="relative w-full pl-5 overflow-x-hidden md:pl-0">
          <div class="absolute w-full h-px bg-gradient-to-r from-transparent to-white md:from-white dark:from-transparent dark:to-neutral-950 md:dark:from-neutral-950 md:via-transparent md:dark:via-transparent md:to-white md:dark:to-neutral-950"></div>{" "}
          <div class="w-full h-px border-t border-dashed border-neutral-300 dark:border-neutral-600"></div>{" "}
        </div>
        <div class="absolute flex items-center justify-center w-auto h-auto px-3 py-1.5 uppercase tracking-widest space-x-1 text-[0.6rem] md:-translate-x-1/2 -translate-y-1/2 border rounded-full bg-white dark:bg-neutral-900 text-neutral-400 left-0 md:ml-0 ml-5 md:left-1/2 border-neutral-100 dark:border-neutral-800 shadow-sm">
          <p class="leading-none">Check out my projects</p>
          <div class="flex items-center justify-center w-5 h-5 translate-x-1 border rounded-full border-neutral-100 dark:border-neutral-800">
            <LinkSvg />
          </div>
        </div>
      </div>
      <div class="flex gap-8 items-start">
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
        <div class="border border-dashed rounded-2xl p-5">
          订阅 Rss
          <div>
            <input class="border p-1 rounded-md bg-gray-200" />
          </div>
          <button>复制</button>
        </div>
      </div>
    </>
  );
}
