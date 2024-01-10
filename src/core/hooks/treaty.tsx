import React, { createContext, useContext, useEffect, useState } from "react";
import { edenTreaty } from "@elysiajs/eden";

import type { App } from "../../server";
import { EdenTreaty } from "@elysiajs/eden/treaty";
import { config } from "../utils/config";

// const treaty = edenTreaty<App>(config.endpoint);

// @ts-ignore
type Client = EdenTreaty.Create<App>;

const Treaty = createContext<Client | undefined>(undefined);
const prefix = "api";

interface ITreatyProvider {
	children?: React.ReactNode;
	url: string;
}

function createTreaty(url = config.endpoint) {
	return edenTreaty<App>(url);
}

export function TreatyProvider({ children, url }: ITreatyProvider) {
	return (
		// @ts-ignore
		<Treaty.Provider value={createTreaty(url)}>{children}</Treaty.Provider>
	);
}

export function useTreaty<T>(
	f: (cli: Client[typeof prefix]) => Promise<T>,
	d?: any[],
) {
	const [st, sst] = useState<T>();
	const tr = useContext(Treaty);
	useEffect(() => {
		tr
			? f(tr[prefix]).then(sst)
			: (() => {
					throw new Error("RPC did not initialized");
			  })();
	}, d);
	return st;
}
