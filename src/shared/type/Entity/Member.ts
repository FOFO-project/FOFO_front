import {
	ActiveStatus,
	AgeRelationType,
	ApprovalStatus,
	Gender,
	Mbti,
	Religion,
	SmokingYn,
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
	//폼 입력 이외 데이터
	depositDate: Date | null = null;
	note: string | null = null;
	passCount: number | null = null;
	chance: number | null = null;
	approvalStatus: ApprovalStatus | null = null;
	status: ActiveStatus | null = null;
	createdTime: Date | null = null;
	modifiedTime: Date | null = null;

	getBirthdayString(): string {
		try {
			return new Date(this.birthday ? this.birthday : "-")
				.toISOString()
				.slice(0, 10)
				.replace(/-/g, ""); // YYYYMMDD 형식
		} catch (e) {
			return "날짜 없음";
		}
	}

	getFilteringString(): string {
		let res = [
			AgeRelationType[this.filteringAgeRelation],
			SmokingYn[this.filteringSmoker],
			Religion[this.filteringReligion],
		].map((e) => (e ? e.toString() : "상관없음"));
		return res.join(" | ");
	}

	getDepositDateString(): string {
		try {
			return new Date(this.depositDate ? this.depositDate : "-")
				.toISOString()
				.slice(0, 10)
				.replace(/-/g, ""); // YYYYMMDD 형식
		} catch (e) {
			return "날짜 없음";
		}
	}

	getAddressString(): string {
		if (this.address) {
			return `${this.address.sido} ${this.address.sigungu} ${this.address.eupmyundong}`;
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
