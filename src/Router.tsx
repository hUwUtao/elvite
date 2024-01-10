// import lz from "@loadable/component";

import Router from "./core/modules/router";

const { router, routes } = Router(
	"/src/views",
	import.meta.glob("/src/views/**/*.tsx") as any, // weird
);

export { routes, router };
