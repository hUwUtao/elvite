import { StaticRouter } from "react-router-dom/server";
import { TreatyProvider } from "_/hooks/treaty";
import render from "_/modules/render";
import { router } from "./Router";

// import React from "react";
export { routes } from "./Router";

export default render((path = "/") => (
	<TreatyProvider url={`http://localhost:${process.env.PORT || 3000}`}>
		<StaticRouter location={path}>{router}</StaticRouter>
	</TreatyProvider>
));
