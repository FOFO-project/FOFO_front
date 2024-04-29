import config from "../../app/config";

const HEADER = {
	"Content-Type": "application/json",
};

export const ApiCaller = Object.freeze({
	get: async (url: string, params?: Record<string, any>) => {
		let fullUrl = config.api_url + url;

		if (params) {
			const queryString = Object.keys(params)
				.map((key) => {
					const value = params[key];
					if (value === null || value === undefined) {
						return encodeURIComponent(key);
					}
					return `${encodeURIComponent(key)}=${encodeURIComponent(
						value
					)}`;
				})
				.join("&");

			if (queryString) {
				fullUrl += `?${queryString}`;
			}
		}

		const response = await fetch(fullUrl, {
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
		const response = await fetch(config.api_url + url, {
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
		const response = await fetch(config.api_url + url, {
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
		const response = await fetch(config.api_url + url, {
			method: "DELETE",
			headers: HEADER,
			body: params ? JSON.stringify(params) : "",
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
	patch: async (url: string, data?: any) => {
		const response = await fetch(config.api_url + url, {
			method: "PATCH",
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
	formDataPost: async (url: string, data: FormData) => {
		const response = await fetch(config.api_url + url, {
			method: "POST",
			body: data,
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
