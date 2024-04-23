import { ApiCaller } from "../../../shared/shared";

export const getResult = async (selected: any) => {
	return ApiCaller.post("/members/deposit-check", {
		memberIds: selected,
		depositDate: new Date(),
	}).then((e) => {
		return e.data.content ? e.data.failMemberIds : [];
	});
};
