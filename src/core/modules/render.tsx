// @ts-ignore
import { renderToReadableStream } from "react-dom/server.browser";
import { ReactNode } from "react";
import React from "react";
export const PORT = process.env.PORT || 3000;

export default function render(nodes: (path: string) => ReactNode) {
	return async ({ path }: { path: string }) =>
		renderToReadableStream(
			// <React.StrictMode>
			React.createElement(nodes, path),
			// </React.StrictMode>
		) as ReadableStream;
}
