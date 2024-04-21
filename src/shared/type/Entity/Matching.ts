import { MatchingStatus } from "../Enum/memberEnum";
import { Member } from "./Member";

export class Matching {
	id: string | null = null;
	man: Member | null = null;
	woman: Member | null = null;
	matchStatus: MatchingStatus | null = null;
	createdTime: Date | null = null;
	updatedTime: Date | null = null;
	constructor(data: Partial<Matching> = {}) {
		Object.assign(this, data);
	}
}
