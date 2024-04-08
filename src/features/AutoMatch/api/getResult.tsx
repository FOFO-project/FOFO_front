import axios from "axios";

export const getResult = async () => {
	try {
		const response = await axios.post("https://fofo/match/auto");
		if (response.status === 200) {
			return response.data;
		} else if (response.status === 400) {
			return "error";
		} else {
			// Handle other status codes
		}
	} catch (error) {
		console.error("err:", error);
	}
};