import { MatchingStatus } from "../Enum/memberEnum";
import { MatchRequestDto } from "../DTO/MatchRequestDto";
import { Member } from "./Member";

export class Matching {
	id: number | null = null;
	man: Member | null = null;
	woman: Member | null = null;
	manAgreement: string | null = null;
	womanAgreement: string | null = null;
	matchingStatus: MatchingStatus | null = null;
	createdTime: Date | null = null;
	updatedTime: Date | null = null;

	constructor(data: any = {}) {
		const man = new Member(data.man.member);
		man.address = data.man.address;
		const woman = new Member(data.woman.member);
		woman.address = data.woman.address;
		data.man = man;
		data.woman = woman;
		Object.assign(this, data);
	}

	MatchRequestDto(): MatchRequestDto {
		return {
			id: this.id,
			manId: this.man?.id ? this.man.id : null,
			manAgreement: this.manAgreement,
			womanId: this.woman ? this.woman.id : null,
			womanAgreement: this.womanAgreement,
			matchingStatus: this.matchingStatus,
		};
	}
}
