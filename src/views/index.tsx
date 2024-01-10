import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg?url";
import { useTreaty } from "_";
import "@/styles/App.css";

export default function Index() {
	const [count, setCount] = useState(0);
	const bmsg = useTreaty(
		(c) =>
			c[""].get({
				$query: {
					n: count.toString(),
				},
			}),
		[count],
	);

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<p>The server lazily said</p>
				<code>{bmsg?.data?.msg}</code>
			</div>
			<div className="card">
				<h3>Current count is {count}</h3>
				<button onClick={() => setCount((c) => (c >= 1 ? c - 1 : 0))}>-</button>
				<button onClick={() => setCount((c) => c + 1)}>+</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}
