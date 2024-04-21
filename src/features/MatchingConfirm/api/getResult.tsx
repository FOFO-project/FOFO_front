import { ApiCaller } from "../../../shared/shared";

export const getResult = async (matchData:any) => {
	return ApiCaller.post("/match", matchData
	).then((e) => {
		return e.data.result;
	});
};
