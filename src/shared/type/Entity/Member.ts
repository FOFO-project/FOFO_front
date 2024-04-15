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
	gender: Gender | null = null;
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
		if (this.birthday) {
			return this.birthday.toISOString().split("T")[0];
		}
		return "";
	}
	getFilteringString(): string {
		let res = [
			this.filteringAgeRelation,
			this.filteringReligion,
			this.filteringSmoker,
		].map((e) => (e ? e.toString() : "None"));
		return res.join(" | ");
	}
	getDepositDateString(): string {
		if (this.depositDate) {
			return (
				this.depositDate.toISOString().split("T")[0] +
				" " +
				this.depositDate.toTimeString().split(" ")[0]
			);
		}
		return "";
	}
	getAddressString(): string {
		if (this.address) {
			return `${this.address.sido} ${this.address.sigungu} ${this.address.eupmyundong}`;
		}
		return "";
	}

	constructor(data: Partial<Member> = {}) {
		Object.assign(this, data);
	}
}
