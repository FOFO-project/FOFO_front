import { ApiCaller } from "../../../shared/shared";

export const getResult = async (matchIds: any) => {
	return ApiCaller.delete("/match", {
		matchIdList: matchIds
	}).then((e) => {
		return e.data.result;
	});
};
