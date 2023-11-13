import { Elysia, t } from "elysia";

// deinline = break eden
const app = new Elysia()
	.group("/api", (e) =>
		e
			.get("/prelude.json", () => ({
				endpoint: "",
			}))
			.get(
				"/",
				({ query: { n } }) => ({ msg: `Hello World! ${n} times button` }),
				{
					query: t.Object({
						n: t.String(),
					}),
				},
			),
	)
	.onError((e) => {
		if (e.code === "NOT_FOUND") {
			return Bun.file("public/index.html");
		}
	})
	.listen(3000);

console.log(
	`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);

export type App = typeof app;
