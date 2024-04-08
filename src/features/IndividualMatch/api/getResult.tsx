import axios from "axios";
import { Member } from "../../../shared/shared";

export const getResult = async (members?: Member[]) => {
	try {
		const response = await axios.post("https://fofo/match/auto", members);
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