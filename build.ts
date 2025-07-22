import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm");
await build({
  configFile: import.meta.resolve("./deno.json"),
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {},
  package: {
    name: "@nyoon/vite-plugin-inline",
    description: "Vite plugin to inline everything into a single HTML file.",
    version: Deno.args[0],
    license: "GPL-3.0-or-later",
    repository: {
      type: "git",
      url: "git+https://github.com/nathanielyoon/vite-plugin-inline.git",
    },
  },
  typeCheck: false,
  test: false,
  scriptModule: false,
  postBuild: () => Deno.copyFile("LICENSE", "npm/LICENSE"),
});
