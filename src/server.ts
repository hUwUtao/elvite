import { Elysia, t } from "elysia";
// import Render from "./core/modules/ssr";
import cors from "./core/plugins/cors";
import city from "./controllers/city";

export const PORT = process.env.PORT || 3000;

// deinline = break eden
const app = new Elysia()
	// auto dev cors
	.use(cors())
	.group("/api", (e) =>
		e
			.use(city)
			.get(
				"/",
				({ query: { n } }) => ({ msg: `Hello World! ${n} times button` }),
				{
					query: t.Object({
						n: t.String(),
					}),
				},
			),
	);

const runtime = app.compile().listen(PORT);

console.log(
	`🦊 Elysia is running at ${runtime.server?.hostname}:${runtime.server?.port}`,
);

export type App = typeof app;
