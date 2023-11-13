import { config } from "../utils/config";
import { mktreaty } from "elvite/index";
import { useEffect, useState } from "react";

const treaty = mktreaty(config.endpoint);

export function useTreaty<T>(f: (cli: typeof treaty) => Promise<T>, d?: any[]) {
	const [st, sst] = useState<T>();
	useEffect(() => {
		f(
			// add api prefix here
			treaty, //.api
		).then(sst);
	}, d);
	return st;
}
