import config from "../../app/config";

const HEADER = {
	"Content-Type": "application/json",
};

export const ApiCaller = Object.freeze({
	get: async (url: string, params?: Record<string, any>) => {
		let fullUrl = config.server_url + url;

		if (params) {
			const queryString = Object.keys(params)
				.map(
					(key) =>
						`${encodeURIComponent(key)}=${encodeURIComponent(
							params[key]
						)}`
				)
				.join("&");

			fullUrl += `?${queryString}`;
		}

		const response = await fetch(config.server_url + url, {
			method: "GET",
			headers: HEADER,
		});
		if (!response.ok) {
			const error: any = new Error(
				`HTTP error! Status: ${response.status}`
			);
			error.data = await response.json();
			throw error;
		}
		return response.json();
	},
	post: async (url: string, data?: any) => {
		console.log(JSON.stringify(data, null, 2));
		const response = await fetch(config.server_url + url, {
			method: "POST",
			headers: HEADER,
			body: data ? JSON.stringify(data) : "",
		});
		if (!response.ok) {
			const error: any = new Error(
				`HTTP error! Status: ${response.status}`
			);
			error.data = await response.json();
			throw error;
		}
		return response.json();
	},
	put: async (url: string, data?: any) => {
		const response = await fetch(config.server_url + url, {
			method: "PUT",
			headers: HEADER,
			body: data ? JSON.stringify(data) : "",
		});
		if (!response.ok) {
			const error: any = new Error(
				`HTTP error! Status: ${response.status}`
			);
			error.data = await response.json();
			throw error;
		}
		return response.json();
	},
	delete: async (url: string, params?: Record<string, any>) => {
		let fullUrl = config.server_url + url;

		if (params) {
			const queryString = Object.keys(params)
				.map(
					(key) =>
						`${encodeURIComponent(key)}=${encodeURIComponent(
							params[key]
						)}`
				)
				.join("&");

			fullUrl += `?${queryString}`;
		}
		const response = await fetch(config.server_url + url, {
			method: "DELETE",
			headers: HEADER,
		});
		if (!response.ok) {
			const error: any = new Error(
				`HTTP error! Status: ${response.status}`
			);
			error.data = await response.json();
			throw error;
		}
		return response.json();
	},
});
