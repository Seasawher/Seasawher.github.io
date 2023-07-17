import lume from "lume/mod.ts";
import blog from "https://deno.land/x/lume_theme_simple_blog@v0.5.0/mod.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";

const site = lume({
    src: "src",
    dest: "_site",
    server: {
      open: true,
    },
});

site
  .use(blog())
  .remoteFile(
    "_includes/css/code.css",
    "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/github-dark.min.css"
  )
  .use(codeHighlight());

export default site;
