import { ApiCaller } from "../../../../shared/shared";

export const getResult = async (matchIds: any) => {
	return ApiCaller.post("/match/meeting/fail", {
		matchIdList: matchIds
	}).then((e) => {
		return e.result;
	});
};
