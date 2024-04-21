import axios from "axios";
import { ApiCaller } from "../../../shared/shared";
axios.defaults.headers.common["Content-Type"] = "application/json";

export const getResult = async () => {
	return ApiCaller.post("/match/auto", {
		memberIdList: [],
	}).then((e) => {
		return e.data ? e.data.unmatchedMemberIdList : [];
	});
};
