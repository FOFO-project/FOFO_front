import { ApiCaller } from "../../../../shared/shared";

export const getResult = async (matchIds: any) => {
	return ApiCaller.post("/match/matchable", {
		matchIdList: matchIds
	}).then((e) => {
		return e.result;
	});
};
