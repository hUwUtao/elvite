import { hydrateRoot, createRoot } from "react-dom/client";

const q = document.querySelector("draw");
export const root = (node) =>
	q.getAttribute("h2") === ""
		? hydrateRoot(q, node)
		: createRoot(q).render(node);
