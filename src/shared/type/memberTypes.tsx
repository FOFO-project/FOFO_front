// Address Models
export interface Address {
	id: number;

	zip_code: String;
	// 시/도
	category_first: String;
	// 시/군/구
	category_second: String;
	// 읍/면/동
	category_third: String;
	detail?: String;
	road_name_cd?: String;
	location?: String;
	sts: String;
	create_dt: Date;
	mod_dt: Date;
}

// Image Models
export interface Picture {
	id: number;
	member_id: number;

	type: String;
	image_url: String;
	sts: String;
	create_dt: Date;
	mod_dt: Date;
}

// Member Models
export interface Member {
	id: number;
	address_cate1: String;
	address_cate2: String;
	address_cate3: String;

	tumbnail: String[];
	name: String;
	gender: String;
	age: number;
	company?: String;
	job?: String;
	university?: String;
	mbti?: MBTI;
	smoking_yn?: String;
	kakao_id: String;
	religion?: Religion;
	charming_point?: String[];
	filtering_condition?: String[];
	deposit_date?: Date;
	note?: String;
	profile_card?: String;

	pass_count?: number;
	chance?: number;

	approval_sts: ApprovalStatus;
	matching_sts: MatchingStatus;

	sts: String;
	create_dt: Date;
	mod_dt: Date;
}

export enum MBTI {
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
	기독교 = "1",
	천주교 = "2",
	불교 = "3",
	원불교 = "4",
	무교 = "5",
	기타 = "6",
}

export enum ApprovalStatus {
	입금대기중 = "10",
	입금완료 = "20",
	승인 = "30",
}

export enum MatchingStatus {
	"매칭 대기중" = "1",
	"매칭 진행중" = "2",
	"매칭 완료" = "3",
}
