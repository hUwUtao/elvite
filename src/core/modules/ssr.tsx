// import React from "react";

import Elysia from "elysia";
import { RouteProps } from "react-router-dom";
import { ViteDevServer } from "vite";
// import fs from "fs";

const RGX = /<draw(?:\s*|)(?:\s([^<>]*)|)(?:\/>|>([^<>]*)<\/draw>)/gm;
const prod = process.env.NODE_ENV === "production";

const vite: ViteDevServer | undefined = !prod
	? await (await import("vite")).createServer({
			server: { middlewareMode: true },
			appType: "custom",
			base: "/",
	  })
	: undefined;

const t = ((t: string[]) => [`${t[0]}<draw h2>`, t[1], t[2], `</draw>${t[3]}`])(
	(!prod && vite
		? await vite.transformIndexHtml("/", await Bun.file("index.html").text())
		: await Bun.file("dist/client/index.html").text()
	).split(RGX),
);

type Itype = typeof import("../../entry-server");

const render: Itype = prod
	? // @ts-ignore
	  await import("../../../dist/server/entry-server.mjs")
	: vite &&
	  (await vite.ssrLoadModule("/src/entry-server.tsx", {
			fixStacktrace: true,
	  }));

function CreatePageTransform() {
	return new TransformStream({
		start(controller) {
			controller.enqueue(t[0]);
		},
		flush(controller) {
			controller.enqueue(t[3]);
		},
	});
}

async function Render(path: string) {
	return await (await render.default({ path })).pipeThrough(
		CreatePageTransform(),
	);
}

export default function Middleware() {
	return render.routes
		.filter((v) => v.path !== undefined)
		.reduce(
			(d: Elysia, v: RouteProps) =>
				d.get(v.path || "", async (r) => {
					return new Response(await Render(r.path));
				}),
			new Elysia(),
		);
}
