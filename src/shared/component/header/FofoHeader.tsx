import { ReactElement, useReducer, useState } from "react";
import style from "./header.module.scss";

interface headerProps { // 차후, logo는 실제 FOFO image, items는 각각의 features로 대체될 예정
    data:{
        logo:any,
        item1:String,
        item2:String,
        item3:String
    }
}

export function FofoHeader({data}:headerProps) {
    return(
        <>
        <header className={style.header}>
            <div className={style.header_wrapper}>
                <img className={style.header_logo} src={data.logo} alt="FOFO logo" />
                <ul className={style.header_item}>
                    <li className={style.header_items}>{data.item1}</li>
                    <li className={style.header_items}>{data.item2}</li>
                    <li className={style.header_items}>{data.item3}</li>
                </ul>
            </div>
        </header>
        </>
    );
}