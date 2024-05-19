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
	OTHERS = "기타",
}

export enum ApprovalStatus {
	DEPOSIT_PENDING = "DEPOSIT_PENDING", //"입금대기중",
	DEPOSIT_COMPLETED = "DEPOSIT_COMPLETED", //"입금완료",
	APPROVED = "APPROVED", //"승인",
}

export enum MatchingStatus {
	MATCHING_PENDING = "MATCHING_PENDING", //"매칭대기중",
	MATCHING_PROGRESSING = "MATCHING_PROGRESSING", //"매칭진행중",
	MATCHING_COMPLETED = "MATCHING_COMPLETED", //"매칭완료",
	MATCHING_SAVE = "MATCHING_SAVE" // 매칭상태저장
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

export const ageFilteringMap = new Map<string | null, string>([
	["OLDER", "연상"],
	["YOUNGER", "연하"],
	["SAME", "동갑"],
	[null, "상관없음"],
]);
export const religionFilteringMap = new Map<string | null, string>([
	["CHRISTIANITY", "기독교"],
	["CATHOLIC", "천주교"],
	["BUDDHISM", "불교"],
	["WON_BUDDHISM", "원불교"],
	["NON_RELIGIOUS", "무교"],
	["OTHERS", "기타"],
	[null, "상관없음"],
]);
export const smokerFilteringMap = new Map<string | null, string>([
	["Y", "비흡연"],
	["N", "상관없음"],
]);

export const smokingYnMap = new Map<string | null, string>([
	["Y", "흡연"],
	["N", "비흡연"],
	[null, "입력값 없음"],
]);
export const religionMap = new Map<string | null, string>([
	["CHRISTIANITY", "기독교"],
	["CATHOLIC", "천주교"],
	["BUDDHISM", "불교"],
	["WON_BUDDHISM", "원불교"],
	["NON_RELIGIOUS", "무교"],
	["OTHERS", "기타"],
	[null, "입력값 없음"],
]);
export const inputLimit = new Map<string | null, number>([
	["kakaoId", 20],
	["sido", 20],
	["sigungu", 20],
	["eupmyundong", 20],
	["name", 20],
	["company", 20],
	["job", 20],
	["university", 20],
	["charmingPoint", 100],
	["note", 100]
]);