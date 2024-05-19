import {
	ActiveStatus,
	ApprovalStatus,
	Gender,
	Mbti,
	Religion,
	SmokingYn,
	ageFilteringMap,
	smokerFilteringMap,
	religionFilteringMap,
} from "../../shared";
import { Address } from "./Address";

export class Member {
	id: number | null = null;
	kakaoId: string | null = null;
	address: Address | null = null;
	name: string | null = null;
	gender: Gender | "MAN" | "WOMAN" | null = null;
	birthday: Date | null = null;
	age: number | null = null;
	phoneNumber: string | null = null;
	filteringAgeRelation: string | null = null;
	company: string | null = null;
	job: string | null = null;
	university: string | null = null;
	mbti: Mbti | null = null;
	smokingYn: SmokingYn | null = null;
	filteringSmoker: string | null = null;
	religion: Religion | null = null;
	filteringReligion: string | null = null;
	charmingPoint: string | null = null;
	//폼 입력 이외 데이터
	depositDate: Date | null = null;
	note: string | null = null;
	passCount: number | null = null;
	chance: number | null = null;
	approvalStatus: ApprovalStatus | null = null;
	status: ActiveStatus | null = null;
	createdTime: Date | null = null;
	modifiedTime: Date | null = null;
	profileImageId: string | null = null;

	static getBirthdayString(birthday: Date | null): string {
		try {
			return birthday ? new Date(birthday).toLocaleDateString() : "";
		} catch (e) {
			return "날짜 없음";
		}
	}

	static getFilteringString(
		filteringAgeRelation: string | null,
		filteringSmoker: string | null,
		filteringReligion: string | null
	): string {
		let res = [
			ageFilteringMap.get(filteringAgeRelation),
			smokerFilteringMap.get(filteringSmoker),
			religionFilteringMap.get(filteringReligion),
		];
		return res.join(" | ");
	}

	static getDepositDateString(depositDate: Date | null): string {
		try {
			return depositDate
				? new Date(depositDate).toLocaleDateString()
				: "";
		} catch (e) {
			return "날짜 없음";
		}
	}

	static getAddressString(address: Address | null): string {
		if (address) {
			return `${address.sido} ${address.sigungu}`;
		}
		return "";
	}

	static getCountAndChanceString(
		passCount: number | null,
		chance: number | null
	): string {
		if (passCount && chance) {
			return `${passCount} / ${chance}`;
		}
		return "";
	}

	constructor(data: Partial<Member> = {}) {
		data.gender =
			data.gender === "MAN"
				? Gender.MAN
				: data.gender === "WOMAN"
				? Gender.WOMAN
				: null;
		Object.assign(this, data);
	}
}
