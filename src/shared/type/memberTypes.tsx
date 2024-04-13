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
	매칭완료
}
export enum ActiveStatus {
	CREATED = "CREATED",
	UPDATED = "UPDATED",
	DELETED = "DELETED",
}

export enum SmokingYn {
	Y = "흡연",
	N = "비흡연"
}

export interface Member {
	memberId?: string;
	kakaoId: string; //maxlength:20
	address: Address;
	name: string; //maxlength:30
	gender: Gender;
	birthday: Date;
	phoneNumber: string; //maxlength:30
	filteringConditionAgeRelation?: AgeRelationType;
	company: string; //maxlength:20
	job: string; //maxlength:30
	university: string; //maxlength:30
	mbti: Mbti;
	smokingYn: boolean;
	filteringConditionSmokingYn: boolean;
	religion: Religion;
	filteringConditionReligion: Religion;
	charmingPoint: string; //maxlength:100
}
