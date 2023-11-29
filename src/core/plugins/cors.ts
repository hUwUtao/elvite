import { Elysia } from "elysia";

const isDev = process.env.NODE_ENV !== "production";

function hset(
	set: {
		headers: Record<string, string> & {
			"Set-Cookie"?: string | string[] | undefined;
		};
	},
	request: Request,
) {
	if (isDev) {
		set.headers.Vary = "*";
		set.headers["Access-Control-Allow-Origin"] =
			request.headers.get("Origin") || "*";
		set.headers["Access-Control-Allow-Credentials"] = "true";
	}
}
export const cors = () => {
	return new Elysia({
		name: "@elysiajs/cors",
	})
		.options("/", ({ set, request }) => {
			hset(set, request);
			return new Response("", {
				status: 204,
			});
		})
		.options("/*", ({ set, request }) => {
			hset(set, request);
			return new Response("", {
				status: 204,
			});
		})
		.onRequest(({ set, request }) => {
			hset(set, request);
		});
};

export default cors;
