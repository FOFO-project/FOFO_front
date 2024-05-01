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
	sido: string | null = null;
	sigungu: string | null = null;
	eupmyundong: string | null = null;
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
	// 관리자멘트
	note: string | null = null;
	// 프로필카드
	profileCardImage: File | null = null;

	constructor(data: any = {}) {
		for (const key in data as UpdateMemberRequestDto) {
			if (this.hasOwnProperty(key)) {
				this[key as keyof this] = data[key];
			}
		}
	}

	static toFormData(source: any) {
		const formData = new FormData();
		for (const key in source) {
			if (source[key] === null) {
				continue;
			}
			if (key === "profileCardImage") {
				const file = source.profileCardImage as Blob;
				if (file) {
					formData.append("profileCardImage", file);
				}
				continue;
			}
			formData.append(key, source[key] as string);
		}
		return formData;
	}
}
