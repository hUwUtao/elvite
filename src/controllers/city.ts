import Elysia, { t } from "elysia";
import { pris } from "../core";

// ik, just make it with a macro function, but who cares, plus why engineering so hard?

export default new Elysia().group("/geo", (e) =>
	e
		.get("/city", () =>
			pris.city.findMany({
				select: {
					id: true,
					name: true,
				},
			}),
		)
		.get(
			"/city/:id",
			({
				params: { id },
				// query: { query }
			}) => {
				return pris.district.findMany({
					select: {
						id: true,
						name: true,
					},
					where: {
						city: {
							id: id,
						},
					},
				});
			},
			{
				params: t.Object({
					id: t.Numeric(),
				}),
			},
		)
		.get("/dist", () =>
			pris.district.findMany({
				select: {
					id: true,
					name: true,
				},
			}),
		)
		.get(
			"/dist/:id",
			({ params: { id } }) => {
				return pris.ward.findMany({
					select: {
						id: true,
						name: true,
					},
					where: {
						district: {
							id: id,
						},
					},
				});
			},
			{
				params: t.Object({
					id: t.Numeric(),
				}),
			},
		),
);
