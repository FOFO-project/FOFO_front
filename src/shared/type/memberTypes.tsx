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
	mbti?: String;
	smoking_yn?: String;
	kakao_id: String;
	religion?: String;
	charming_point?: String[];
	filtering_condition?: String[];
	deposit_date?: Date;
	note?: String;
	profile_card?: String;

	pass_count?: number;
	chance?: number;

	approval_sts: String;
	matching_sts: String;

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
