import { ApiCaller } from "../../../shared/shared";

export const getResult = async (manId: number, womanId: number) => {
	return ApiCaller.post("/match/manual", {
		manMemberId: manId,
		womanMemberId: womanId,
	}).then((e) => {
		return e.result;
	}).catch((e) => {
		console.log(e);
		throw JSON.stringify(e.error.data);
	});
};
