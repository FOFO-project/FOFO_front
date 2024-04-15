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
		const formattedDate = this.birthday?.toISOString().slice(0,10).replace(/-/g, ''); // YYYYMMDD 형식
		// if(this.birthday == null){
		// 	return "생일입력필요"
		// }
		// const year = this.birthday.getFullYear();
		// let month:any = this.birthday.getMonth() + 1;
		// let day:any = this.birthday.getDate();
		// if(month < 10){
		// 	month = '0' + month;
		// }
		// if(day < 10){
		// 	day = '0' + day;
		// }
		return `${formattedDate}`;
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
		const formattedDate = this.depositDate?.toISOString().slice(0,10).replace(/-/g, ''); // YYYYMMDD 형식
		// if(this.depositDate == null){
		// 	return "생일입력필요"
		// }
		// const year = this.depositDate.getFullYear();
		// let month:any = this.depositDate.getMonth() + 1;
		// let day:any = this.depositDate.getDate();
		// if(month < 10){
		// 	month = '0' + month;
		// }
		// if(day < 10){
		// 	day = '0' + day;
		// }
		// return `${year}${month}${day}`;
		return `${formattedDate}`;
	}
	
	getAddressString(): string {
		if (this.address) {
			return `${this.address.sido} ${this.address.sigungu} ${this.address.eupmyundong}`;
		}
		return "";
	}

	constructor(data: Partial<Member> = {}) {
        data.birthday = data.birthday ? new Date(data.birthday) : null;
        data.depositDate = data.depositDate ? new Date(data.depositDate) : null;
        data.createdTime = data.createdTime ? new Date(data.createdTime) : null;
        data.modifiedTime = data.modifiedTime
            ? new Date(data.modifiedTime)
            : null;
        Object.assign(this, data);
    }
}
