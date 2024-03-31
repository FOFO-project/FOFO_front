// Member Models

export interface Member {
    id:number,
    address_cate1:String,
    address_cate2:String,
    address_cate3:String,

    tumbnail:String[],
    name:String,
    gender:String,
    age:number,
    company?:String,
    job?:String,
    university?:String,
    mbti?:String,
    smoking_yn?:String,
    kakao_id:String,
    religion?:String,
    charming_point?:String[],
    filtering_condition?:String[],
    deposit_date?:Date,
    note?:String,
    profile_card?:String,
    
    pass_count?:number,
    chance?:number,
    
    approval_sts:String,
    matching_sts:String,
    
    sts:String,
    create_dt:Date,
    mod_dt:Date,
    
}