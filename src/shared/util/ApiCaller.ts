import config from "../../app/config";

const HEADER = {
	"Content-Type": "application/json",
};

export const ApiCaller = Object.freeze({
	get: async (url: string) => {
		const response = await fetch(config.server_url + url, {
			method: "GET",
			headers: HEADER,
		});
		return response.json();
	},
	post: async (url: string, data: any) => {
		const response = await fetch(config.server_url + url, {
			method: "POST",
			headers: HEADER,
			body: JSON.stringify(data),
		});
		return response.json();
	},
	put: async (url: string, data: any) => {
		const response = await fetch(config.server_url + url, {
			method: "PUT",
			headers: HEADER,
			body: JSON.stringify(data),
		});
		return response.json();
	},
	delete: async (url: string) => {
		const response = await fetch(config.server_url + url, {
			method: "DELETE",
			headers: HEADER,
		});
		return response.json();
	},
});
