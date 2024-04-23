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

	//수정시에만 활성화
	note: string | null = null;

	static exceptNote(dto: AppendMemberRequestDto) {
		const { note, ...rest } = dto;
		return rest;
	}

	constructor(data: any = {}) {
		for (const key in data as AppendMemberRequestDto) {
			if (this.hasOwnProperty(key)) {
				this[key as keyof this] = data[key];
			}
		}
	}
}
