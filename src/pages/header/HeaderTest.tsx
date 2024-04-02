import { FofoHeader } from "../../shared/shared"
import logo from "../../assets/fofologo-removebg-preview.png"

export function HeaderTest(){
    const headerdata:any = {
        logo: logo,
        item1: "승인관리",
        item2: "유저관리",
        item3: "매칭관리"
    }
    return(
        <>
            <FofoHeader data={headerdata}/>
        </>
    );
}