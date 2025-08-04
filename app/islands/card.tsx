import { Arrow } from "../components/icons";
import { Link } from "honox/server";
export default function Card({
  link,
  frontmatter,
}: {
  link: string;
  frontmatter: any;
}) {
  function linkPage(url: string) {}

  return (
    <a
      href={link}
      class="relative block border border-transparent border-dashed cursor-pointer p-7 group rounded-2xl"
    >
      <div class="relative z-30 duration-300 ease-out group-hover:-translate-x-1 group-hover:-translate-y-1">
        <h2 class="flex items-center mb-3">
          <div
            href={link}
            class="text-lg text-[#317039] font-bold leading-tight tracking-tight sm:text-2xl "
          >
            {frontmatter.title}
          </div>
          <Arrow />
        </h2>
        <p class="text-neutral-600">
          <span>{frontmatter.desc}</span>
        </p>
        <div class="mt-2 text-sm text-neutral-400">{frontmatter.date}</div>
      </div>
    </a>
  );
}
