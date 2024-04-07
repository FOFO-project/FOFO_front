import { MBTI, Religion } from "../../shared";

export class ConditionListModel {
	age?: number;
	address_cate?: String;
	company?: String;
	job?: String;
	university?: String;
	mbti?: MBTI;
	smoking_yn?: String;
	religion?: Religion;
	filtering_condition?: String[];
	charming_point?: String[];

	kakao_id?: String;
	constructor() {}
}
