// Address Models
export interface Address {
	zipcode: string;
	sido: string;
	sigungu: string;
	eupmyundong: string;
	location: {
		x: number;
		y: number;
	};
}

export enum Gender {
	남자 = "MAN",
	여자 = "WOMAN",
}

export enum AgeRelationType {
	연상 = "OLDER",
	연하 = "YOUNGER",
	동갑 = "SAME",
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
	기독교 = "CHRISTIANITY",
	천주교 = "CATHOLIC",
	불교 = "BUDDHISM",
	원불교 = "WON_BUDDHISM",
	무교 = "NON_RELIGIOUS",
	기타 = "OTHER",
}

export enum ApprovalStatus {
	입금대기중 = "DEPOSIT_PENDING",
	입금완료 = "DEPOSIT_COMPLETED",
	승인 = "APPROVED",
}

export enum MatchingStatus {
	"매칭 대기중" = "1",
	"매칭 진행중" = "2",
	"매칭 완료" = "3",
}
export enum ActuveStatus {
	CREATED = "CREATED",
	UPDATED = "UPDATED",
	DELETED = "DELETED",
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
