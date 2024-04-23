import { ApiCaller, Member } from "../../../shared/shared";

export const getResult = async (selected: any) => {
	return ApiCaller.delete("/members", {
		memberIds: selected,
	}).then((e) => {
		return e.data.content ? e.data.failMemberIds : [];
	});
};
