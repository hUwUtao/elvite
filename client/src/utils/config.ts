export const config = {
	endpoint: import.meta.env.PROD
		? import.meta.env.VITE_API_ENDPOINT || ""
		: "http://localhost:3000",
};
