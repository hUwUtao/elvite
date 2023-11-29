import { hydrateRoot, createRoot } from "react-dom/client";

const q = document.querySelector("draw");
export const root = (q.getAttribute("h2") === "" ? hydrateRoot : createRoot)(q);
