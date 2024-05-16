import { ApiCaller } from "../../../../shared/shared";

export const getResult = async (matchData:any) => {
	return ApiCaller.post("/match/temporary-save", matchData
	).then((e) => {
		return e.result;
	});
};
