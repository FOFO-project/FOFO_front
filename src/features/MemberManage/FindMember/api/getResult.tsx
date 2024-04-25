import { ApiCaller, Member } from "../../../../shared/shared";

export const getResult = async (param: any) => {
	return ApiCaller.get("/members", param).then((e) => {
		return e.data.content
			? e.data.content.map((e: any) => new Member(e))
			: [];
	});
};
