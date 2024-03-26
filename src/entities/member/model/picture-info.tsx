// Image Models
export interface Picture {
    id:number,
    member_id:number,

    type:String,
    image_url:String,
    sts:String,
    create_dt:Date,
    mod_dt:Date
}