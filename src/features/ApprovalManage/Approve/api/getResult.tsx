import { ApiCaller } from "../../../../shared/shared";

export const getResult = async (selected: any) => {
	return ApiCaller.post("/members/approve", {
		memberIds: selected,
	}).then((e) => {
		return e.data.content ? e.data.failMemberIds : [];
	});
};
