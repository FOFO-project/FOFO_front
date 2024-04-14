// Address Models
export class Address {
	zipcode: string | null = null;
	sido: string | null = null;
	sigungu: string | null = null;
	eupmyundong: string | null = null;
	location: {
		x: number;
		y: number;
	} | null = null;
}

export enum Gender {
	MAN = "남자",
	WOMAN = "여자",
}

export enum AgeRelationType {
	OLDER = "연상",
	YOUNGER = "연하",
	SAME = "동갑",
}

export enum Mbti {
	ISTJ = "ISTJ",
	ISTP = "ISTP",
	ISFJ = "ISFJ",
	ISFP = "ISFP",
	INTJ = "INTJ",
	INTP = "INTP",
	INFJ = "INFJ",
	INFP = "INFP",
	ESTJ = "ESTJ",
	ESTP = "ESTP",
	ESFJ = "ESFJ",
	ESFP = "ESFP",
	ENTJ = "ENTJ",
	ENTP = "ENTP",
	ENFJ = "ENFJ",
	ENFP = "ENFP",
}

export enum Religion {
	CHRISTIANITY = "기독교",
	CATHOLIC = "천주교",
	BUDDHISM = "불교",
	WON_BUDDHISM = "원불교",
	NON_RELIGIOUS = "무교",
	OTHER = "기타",
}

export enum ApprovalStatus {
	DEPOSIT_PENDING = "입금대기중",
	DEPOSIT_COMPLETED = "입금완료",
	APPROVED = "승인",
}

export enum MatchingStatus {
	매칭대기중,
	매칭진행중,
	매칭완료,
}
export enum ActiveStatus {
	CREATED = "CREATED",
	UPDATED = "UPDATED",
	DELETED = "DELETED",
}

export enum SmokingYn {
	Y = "흡연",
	N = "비흡연",
}

export class Member {
	id: number | null = null;
	kakaoId: string | null = null;
	name: string | null = null;
	gender: Gender | null = null;
	birthday: Date | null = null;
	age: number | null = null;
	phoneNumber: string | null = null;
	company: string | null = null;
	job: string | null = null;
	university: string | null = null;
	mbti: Mbti | null = null;
	smokingYn: SmokingYn | null = null;
	religion: Religion | null = null;
	charmingPoint: string | null = null;
	filteringConditionAgeRelation: AgeRelationType | null = null;
	filteringSmoker: SmokingYn | null = null;
	filteringConditionReligion: Religion | null = null;
	//폼 입력 이외 데이터
	depositDate: Date | null = null;
	note: string | null = null;
	passCount: number | null = null;
	chance: number | null = null;
	approvalStatus: ApprovalStatus | null = null;
	status: ActiveStatus | null = null;
	createdTime: Date | null = null;
	modifiedTime: Date | null = null;

	constructor(data: Partial<Member> = {}) {
		Object.assign(this, data);
	}
}
