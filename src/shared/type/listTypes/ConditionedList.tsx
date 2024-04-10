import { Address, AgeRelationType, Mbti, Religion } from "../../shared";

export class Filtering {
	AgeRelation: AgeRelationType | null = null;
	SmokingYn: boolean | null = null;
	Religion: Religion | null = null;
}
export class ConditionListModel {
	birthday?: Date;
	address: Address = new Address();
	company?: string;
	job?: string;
	university?: string;
	mbti?: Mbti;
	smoking_yn?: boolean;
	religion?: Religion;
	filtering_condition: Filtering = new Filtering();
	charming_point?: string;

	kakao_id?: string;
	constructor() {}
}
