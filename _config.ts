import lume from "lume/mod.ts";

const site = lume({
    src: "./src",
    dest: "_site",
    server: {
      open: true,
    },
});

export default site;
