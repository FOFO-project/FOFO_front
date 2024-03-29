// Address Models
export interface Address {
    id:number,

    zip_code:String,
    // 시/도
    category_first:String,
    // 시/군/구
    category_second:String,
    // 읍/면/동
    category_third:String,
    detail?:String,
    road_name_cd?:String,
    location?:String,
    sts:String,
    create_dt:Date,
    mod_dt:Date
}