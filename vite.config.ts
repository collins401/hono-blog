import build from '@hono/vite-build/cloudflare-workers'
import ssg from '@hono/vite-ssg'
import mdx from '@mdx-js/rollup'
import honox from 'honox/vite'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { defineConfig } from 'vite'
import rehypePrettyCode from 'rehype-pretty-code'
import tailwindcss from '@tailwindcss/vite'
const entry = './app/server.ts'
import { resolve } from 'node:path'
export default defineConfig(({ mode }) => {
    return {
      plugins: [
        tailwindcss(),
        honox({
          client: {
            input: ['./app/style.css']
          }
        }),
        ssg({ entry, }),
        mdx({
          jsxImportSource: 'hono/jsx',
          remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                tokensMap: {
                  fn: 'entity.name.function'
                },
                theme: 'one-dark-pro',
                keepBackground: true,
              }
            ]
          ]
        })
      ],
      build: {
        emptyOutDir: false
      },
      resolve: {
        alias: {
          '@': resolve(__dirname, './src')
        }
      },
    }
})
