import { Elysia, t } from "elysia";
import cors from "_/plugins/cors";
import Middleware from "_/modules/ssr";
export const PORT = process.env.PORT || 3000;

// deinline = break eden
const app = new Elysia()
	// auto dev cors
	.use(cors())
	.group("/api", (e) =>
		e.get(
			"/",
			({ query: { n } }) => ({ msg: `Hello World! ${n} times button` }),
			{
				query: t.Object({
					n: t.String(),
				}),
			},
		),
	);

const runtime = app
	.get("/*", ({ path }) => {
		return Bun.file(`./dist/client/${path}`);
	})
	.use(Middleware())
	.compile()
	.listen(PORT);

console.log(
	`🦊 Elysia is running at ${runtime.server?.hostname}:${runtime.server?.port}`,
);

export type App = typeof app;
