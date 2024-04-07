import style from "../features.module.scss";

interface MatchingProps {
    data:{
        btnName:String;
        btnType:string;
    }
}
export function Matching({data}:MatchingProps){
    return (
        // link는 차후 매칭완료 페이지 url로 설정
        <div className={style.container}>
            <a className={`${style.btn} ${style.blue}`} href={`http://fofo/match/`+data.btnType}>{data.btnName}</a>
        </div>
    );
}