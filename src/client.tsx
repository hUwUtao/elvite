import { config } from "./core/utils/config.ts"; // prelude

import React from "react";
import { root } from "./core/utils/dom";
import Router from "./Router.tsx";
import "./assets/styles/index.css";
import { TreatyProvider } from "./core/hooks/treaty.tsx";
import { BrowserRouter } from "react-router-dom";

root.render(
	// <React.StrictMode>
	<TreatyProvider url={config.endpoint}>
		<BrowserRouter>
			<Router />
		</BrowserRouter>
	</TreatyProvider>,
	// </React.StrictMode>
);
