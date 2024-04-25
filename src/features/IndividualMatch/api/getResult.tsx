import axios from "axios";
import { ApiCaller } from "../../../shared/shared";
axios.defaults.headers.common["Content-Type"] = "application/json";

export const getResult = async (memberIds: number[]) => {
	return ApiCaller.post("/match/auto", {
		memberIdList: memberIds,
	}).then((e) => {
		return e.data ? e.data.unmatchedMemberIdList : [];
	}).catch((e) => {
		throw JSON.stringify(e.error.data);
	});
};
