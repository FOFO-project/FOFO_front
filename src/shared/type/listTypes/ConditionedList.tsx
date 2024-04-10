import { Address, AgeRelationType, Mbti, Religion } from "../../shared";

export class ConditionListModel {
	birthday?: Date;
	address?: Address;
	company?: string;
	job?: string;
	university?: string;
	mbti?: Mbti;
	smoking_yn?: string;
	religion?: Religion;
	filtering_condition: {
		AgeRelation: AgeRelationType | null;
		SmokingYn: boolean | null;
		Religion: AgeRelationType | null;
	} = { AgeRelation: null, SmokingYn: null, Religion: null };
	charming_point?: string;

	kakao_id?: string;
	constructor() {}
}
