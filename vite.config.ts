import { defineConfig, Alias } from "vite";
import react from "@vitejs/plugin-react-swc";
import pkg from "./package.json";

import { createHtmlPlugin } from "vite-plugin-html";

// @ts-ignore
const isDev = process.env.NODE_ENV !== "production";
const noCDN = Boolean(
	// @ts-ignore
	process.env.VITE_NOCDN,
);

const str = ["DEV Mode", "Force local deps"];
[isDev, noCDN].map((i, _b) => console.info(`${i ? "T" : "F"}  ${str[_b]}`));

function aliased(r: Record<string, string>): Alias[] {
	return Object.keys(r).map((k) => ({
		find: k,
		replacement: r[k],
	}));
}

function esmsh(): Alias[] {
	return pkg.cdnDependencies.map((k) => ({
		find: new RegExp(`^(${k}[/]?.*)$`),
		replacement: "https://esm.sh/$1?bundle",
	}));
}

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		sourcemap: "inline",
		outDir: "./dist/client",
		rollupOptions: {
			external: ["node_modules/react-dom/server"],
		},
	},
	plugins: [
		react(),
		createHtmlPlugin({
			minify: true,
		}),
	],
	resolve: {
		alias: [
			...(noCDN || isDev ? [] : esmsh()),
			...aliased({
				"@": "/src",
				_: "/src/core",
			}),
		],
	},
});
