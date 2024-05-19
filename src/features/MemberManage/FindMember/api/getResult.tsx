import { ApiCaller, Member } from "../../../../shared/shared";

export const getResult = async (param: any) => {
	return ApiCaller.get("/members", param).then((e) => {
		const members = e.data.content
			? e.data.content.map((e: any) => new Member(e))
			: [];
		const pageInfo = e.data.pageInfo;
		return {
			members,
			pageInfo,
		};
	});
};
