import { config } from "_/utils/config.ts"; // prelude

import { root } from "_/utils/dom";
import { router } from "@/Router";
import "@/styles/index.css";
import { TreatyProvider } from "_/hooks/treaty";
import { BrowserRouter } from "react-router-dom";

root(
	// <React.StrictMode>
	<TreatyProvider url={config.endpoint}>
		<BrowserRouter>{router}</BrowserRouter>
	</TreatyProvider>,
	// </React.StrictMode>
);
