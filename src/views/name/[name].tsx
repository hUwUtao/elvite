import { useParams } from "react-router-dom";

export default function Damn() {
	const param = useParams();
	return (
		<>
			<h1>Hello {param.name}</h1>
		</>
	);
}
