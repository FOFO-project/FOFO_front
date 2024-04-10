import axios from "axios";

export const getResult = async (members?: any[]) => {
	try {
		const response = await axios.post(
			"http://144.24.79.73:8080/match/manual",
			members
		);
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
