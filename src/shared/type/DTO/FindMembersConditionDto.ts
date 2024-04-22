import {
	AgeRelationType,
	ApprovalStatus,
	Gender,
	MatchingStatus,
	Mbti,
	Religion,
	SmokingYn,
} from "../../shared";

export class FindMembersConditionDto {
	kakaoId: string | null = null;
	name: string | null = null;
	gender: Gender | null = null;
	yearOfBirthday: Date | null = null;
	filteringAgeRelation: AgeRelationType | null = null;
	company: string | null = null;
	job: string | null = null;
	university: string | null = null;
	mbti: Mbti | null = null;
	smokingYn: SmokingYn | null = null;
	filteringSmoker: SmokingYn | null = null;
	religion: Religion | null = null;
	filteringReligion: Religion | null = null;
	approvalStatus: ApprovalStatus | null = null;
	zipcode: string | null = null;
	sido: string | null = null;
	sigungu: string | null = null;
	eupmyundong: string | null = null;
	matchingStatus: MatchingStatus | null = null;

	constructor(data: Partial<FindMembersConditionDto> = {}) {
		Object.assign(this, data);
	}
}
