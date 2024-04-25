import { ApiCaller, Matching } from "../../../../shared/shared";

export const getResult = async (param: any) => {
	return ApiCaller.get("/match/result", param).then((e) => {
		return e.data.content
			? e.data.content.map((e: any) => new Matching(e))
			: [];
	});
};
