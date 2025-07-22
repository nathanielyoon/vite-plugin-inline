import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm");
await build({
  configFile: import.meta.resolve("./deno.json"),
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {},
  package: {
    name: "@nyoon/vite-plugin-inline",
    version: Deno.args[0],
  },
  typeCheck: false,
  test: false,
  scriptModule: false,
  postBuild: () => Deno.copyFile("LICENSE", "npm/LICENSE"),
});
