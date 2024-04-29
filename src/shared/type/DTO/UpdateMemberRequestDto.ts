import {
	AddressFormDTO,
	AgeRelationType,
	Gender,
	Mbti,
	Religion,
	SmokingYn,
} from "../../shared";

export class UpdateMemberRequestDto {
	kakaoId: string | null = null;
	address: AddressFormDTO = new AddressFormDTO();
	name: string | null = null;
	gender: Gender | null = null;
	birthday: string | null = null;
	height: number | null = null;
	phoneNumber: string | null = "010";
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
	note: string | null = null;
	profileCardImage: string | null = null;

	constructor(data: any = {}) {
		for (const key in data as UpdateMemberRequestDto) {
			if (this.hasOwnProperty(key)) {
				this[key as keyof this] = data[key];
			}
		}
	}
}
