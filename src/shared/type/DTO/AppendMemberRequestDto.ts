import {
	AddressFormDTO,
	AgeRelationType,
	Gender,
	Mbti,
	Religion,
	SmokingYn,
} from "../../shared";

export class AppendMemberRequestDto {
	kakaoId: string | null = null;
	address: AddressFormDTO = new AddressFormDTO();
	name: string | null = null;
	gender: Gender | null = null;
	birthday: string | null = null;
	phoneNumber: string | null = null;
	filteringAgeRelation: AgeRelationType | null = null;
	company: string | null = null;
	job: string | null = null;
	university: string | null = null;
	mbti: Mbti | null = null;
	smokingYn: SmokingYn | null = null;
	filteringSmoker: SmokingYn | null = null;
	religion: Religion | null = null;
	filteringReligion: Religion | null = null;
	charmingPoint: string | null = null;

	constructor(data: Partial<AppendMemberRequestDto> = {}) {
		Object.assign(this, data);
	}
}
