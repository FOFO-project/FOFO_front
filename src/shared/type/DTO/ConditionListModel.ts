import {
	AddressFormDTO,
	AgeRelationType,
	ApprovalStatus,
	FindMembersConditionDto,
	Gender,
	MatchingStatus,
	Mbti,
	Religion,
	SmokingYn,
} from "../../shared";

export class Filtering {
	AgeRelation: AgeRelationType | null = null;
	SmokingYn: SmokingYn | null = null;
	Religion: Religion | null = null;
}

export class ConditionListModel {
	name: string | null = null;
	birthday: Date | null = null;
	address: AddressFormDTO = new AddressFormDTO();
	company: string | null = null;
	job: string | null = null;
	university: string | null = null;
	mbti: Mbti | null = null;
	smoking_yn: SmokingYn | null = null;
	religion: Religion | null = null;
	filtering_condition: Filtering = new Filtering();
	charming_point: string | null = null;
	rem: string | null = null;
	kakao: string | null = null;
	deposit_date: Date | null = null;
	gender: Gender | null = null;
	approvalStatus: ApprovalStatus | null = null;
	matchingStatus: MatchingStatus | null = null;
	matchableYn: "Y" | "N" = "Y";

	static toFindMembersConditionDto(
		model: ConditionListModel
	): FindMembersConditionDto {
		return new FindMembersConditionDto({
			kakaoId: model.kakao,
			name: model.name,
			gender:
				model.gender === "남자"
					? "MAN"
					: model.gender === "여자"
					? "WOMAN"
					: null,
			yearOfBirthday: model.birthday
				? model.birthday.toISOString().split("T")[0]
				: null,
			filteringAgeRelation: model.filtering_condition.AgeRelation,
			company: model.company,
			job: model.job,
			university: model.university,
			mbti: model.mbti,
			smokingYn: model.smoking_yn,
			filteringSmoker: model.filtering_condition.SmokingYn,
			religion: model.religion,
			filteringReligion: model.filtering_condition.Religion,
			approvalStatus: model.approvalStatus,
			zipcode: model.address.zipcode,
			sido: model.address.sido,
			sigungu: model.address.sigungu,
			eupmyundong: model.address.eupmyundong,
			matchingStatus: model.matchingStatus,
			matchableYn: model.matchableYn,
		});
	}

	constructor(data: Partial<ConditionListModel> = {}) {
		Object.assign(this, data);
	}
}
