import { Member } from "../../shared/shared"
import style from "../features.module.scss";
import { useEffect, useState } from "react";
import { getResult } from "./api/getResult";

interface FindProps {
    name?:String;
    gender?: String;
    age?: String;
    company?: String;
    job?: String;
    university?: String;
    mbti?: String;
    smoking_yn: String;
    kakao_id: String;
    religion?: String;
    deposit_date?: String;
    note?: String;
}

export const Find = (param:FindProps) => {
    const [member, setMember] = useState();
    
    useEffect(() => {
		const result:any = getResult(param);
		if (result !== "error") {
            setMember(result);
		}
	}, []);
	const btnData = {
		btnName: "조회"
	};
    return (
        // link는 차후 매칭완료 페이지 url로 설정
        <a className={`${style.btn} ${style.red}`} href="#">{btnData.btnName}</a>
    );
}