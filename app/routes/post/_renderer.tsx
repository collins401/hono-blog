import { jsxRenderer } from "hono/jsx-renderer";
import { Link } from "honox/server";

export default jsxRenderer(({ children, Layout, title }) => {
  return (
    <Layout>
      <title>asdas</title>
      <div class="max-w-4xl pt-10 mx-auto prose md:prose-lg [&>figure>pre]:p-4 [&>figure>pre]:rounded-lg">
        {children}
      </div>
    </Layout>
  );
});
