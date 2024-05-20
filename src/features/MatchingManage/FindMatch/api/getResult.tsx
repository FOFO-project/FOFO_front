import { ApiCaller, Matching, PageInfo } from "../../../../shared/shared";

export const getResult = async (param: any) => {
	return ApiCaller.get("/match/result", param).then((e) => {
		const matches = e.data.content
			? e.data.content.map((e: any) => new Matching(e))
			: [];
		return {
			matches: matches,
			pageInfo: new PageInfo(e.data.pageInfo),
		};
	});
};
