import axios from "axios";
import { ApiCaller } from "../../../shared/shared";
axios.defaults.headers.common["Content-Type"] = "application/json";

export const getResult = async () => {
	return ApiCaller.post("/match/auto", {
		memberIdList: [],
	}).then((e) => {
		if(Object.keys(e).length < 1){
			return {result : "자동매칭(개별매칭)에 실패했습니다. 관리자에게 문의바랍니다."}
		}
		return e.data ? e.data.unmatchedMemberIdList : [];
	}).catch((e) => {
		throw JSON.stringify(e.error.data);
	});
};
