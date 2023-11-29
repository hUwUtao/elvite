// import lz from "@loadable/component";
import { Route, Routes } from "react-router-dom";
import Index from "./views/Index";
import Picker from "./views/Picker";
// const Index = lz(() => import("./pages/Index"));

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Index />} />
			<Route path="/app/city" element={<Picker />} />
		</Routes>
	);
}
