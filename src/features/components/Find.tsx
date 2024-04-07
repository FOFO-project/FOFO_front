import style from "../features.module.scss";

interface FindProps {
    data:{
        btnName:String;
    }
}
export function Find({data}:FindProps){
    return (
        // link는 차후 매칭완료 페이지 url로 설정
        <a className={`${style.btn} ${style.red}`} href="#">{data.btnName}</a>
    );
}