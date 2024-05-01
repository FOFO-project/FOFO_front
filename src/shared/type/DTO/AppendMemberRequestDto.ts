import {
	AgeRelationType,
	Gender,
	Mbti,
	Religion,
	SmokingYn,
} from "../../shared";

export class AppendMemberRequestDto {
	kakaoId: string | null = null;
	sido: string | null = null;
	sigungu: string | null = null;
	eupmyundong: string | null = null;
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
	userProfileImages: File[] | null = null;

	constructor(data: any = {}) {
		for (const key in data as AppendMemberRequestDto) {
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
			if (key === "userProfileImages") {
				const files = source.userProfileImages as Blob[];
				if (files) {
					for (const file of files) {
						formData.append("userProfileImages", file);
					}
				}
				continue;
			}
			formData.append(key, source[key] as string);
		}

		return formData;
	}
}
