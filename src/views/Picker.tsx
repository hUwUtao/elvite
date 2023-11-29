import { useState } from "react";
import { useTreaty } from "../core";

export default function Picker() {
	// const [copts, coptset] = useState<>
	const d = useTreaty((t) => t.geo.city.get(), []);
	const [dd, sd] = useState<number>(1);
	const e = useTreaty((t) => t.geo.city[dd].get(), [dd]);
	// const f = useTreaty((t) => t.geo.city.get(), []);
	const [ed, se] = useState<number>(1);
	const f = useTreaty((t) => t.geo.dist[ed].get(), [dd, ed]);

	return (
		<>
			<select
				onChange={(e) =>
					sd(
						// @ts-ignore
						e.target.value,
					)
				}
				value={dd}
			>
				{d?.data?.map((c) => (
					<option value={c.id} key={c.id}>
						{c.name}
					</option>
				))}
			</select>
			<select
				onChange={(e) =>
					se(
						// @ts-ignore
						e.target.value,
					)
				}
				value={ed}
			>
				{e?.data?.map((c) => (
					<option value={c.id} key={c.id}>
						{c.name}
					</option>
				))}
			</select>
			<select>
				{f?.data?.map((c) => (
					<option value={c.id} key={c.id}>
						{c.name}
					</option>
				))}
			</select>
		</>
	);
}
