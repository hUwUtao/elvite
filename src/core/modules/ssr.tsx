// import React from "react";
import { PORT } from "../../server";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { TreatyProvider } from "../hooks/treaty";
import Router from "../../Router";
// import fs from "fs";

const RGX = /<draw(?:\s*|)(?:\s([^<>]*)|)(?:\/>|>([^<>]*)<\/draw>)/gm;
const prod = process.env.NODE_ENV === "production";
const base = (await Bun.file("dist/index.html").text()).split(RGX);
// base = prod ? (await Bun.file("dist/index.html").text()).split(RGX) : "";
console.log(base);

export default async function Render(path: string) {
	return `${base[0]}<draw h2>${renderToString(
		// <React.StrictMode>
		<TreatyProvider url={`http://localhost:${PORT}`}>
			<StaticRouter location={path}>
				<Router />
			</StaticRouter>
		</TreatyProvider>,
		// </React.StrictMode>
	)}</draw>${base.at(3)}`;
}
