import { Route, RouteProps, Routes } from "react-router-dom";
import { lazy, createElement, FC } from "react";
import NotFound from "@/views/404";

type ExportOnce = { default: FC };
// type Recursive<T> = () => Promise<Recursive<T> | T>;

export default function Router(
	prefix: string,
	rout: Record<string, () => Promise<ExportOnce>>,
) {
	const routes = Object.keys(rout).map(
		(k) =>
			({
				path: k
					.slice(prefix.length)
					.replace(/index|\.tsx$/g, "")
					.replace(/\[\.{3}.+\]/, "*")
					.replace(/\[(.+)\]/, ":$1"),
				element: createElement(lazy(rout[k])),
			}) as RouteProps,
	);
	return {
		routes,
		router: (
			<Routes>
				{routes.map((r) => (
					<Route {...r} key={r.path} />
				))}
				<Route path="*" element={<NotFound />} />
			</Routes>
		),
	};
}
