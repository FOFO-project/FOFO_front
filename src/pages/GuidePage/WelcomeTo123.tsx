import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import style from "./WelcomTo123.module.scss";
import guide1 from "../../assets/guide1.jpeg";
import guide2 from "../../assets/guide2.jpeg";
import guide3 from "../../assets/guide3.jpeg";
import guide4 from "../../assets/guide4.jpeg";
import guide5 from "../../assets/guide5.jpeg";
import guide6 from "../../assets/guide6.jpeg";
import guide7 from "../../assets/guide7.jpeg";


export function WelcomeTo123() {
    const navigate = useNavigate();
    const scrollRef = useRef<any>(null);
    const sectionRefs = [
        useRef<any>(null),
        useRef<any>(null),
        useRef<any>(null),
        useRef<any>(null),
        useRef<any>(null),
        useRef<any>(null),
        useRef<any>(null)
    ];

    const onMoveToFocus = (focus: React.RefObject<HTMLDivElement>) => {
		focus.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

    return (
        <div className={style.wrap} ref={scrollRef}>
            <div className={`${style.section}`} ref={sectionRefs[0]}>
                <img src={guide1} alt="" />
            </div>
            <div className={style.section} ref={sectionRefs[1]}>
                <img src={guide2} alt="" />
            </div>
            <div className={style.section} ref={sectionRefs[2]}>
                <img src={guide3} alt="" />
            </div>
            <div className={style.section} ref={sectionRefs[3]}>
                <img src={guide4} alt="" />
            </div>
            <div className={style.section} ref={sectionRefs[4]}>
                <img src={guide5} alt="" />
            </div>
            <div className={style.section} ref={sectionRefs[5]}>
                <img src={guide6} alt="" />
            </div>
            <div className={style.section} ref={sectionRefs[6]}>
                <div className={style.section_item}>
                    <img src={guide7} alt="" />
                    <div className={style.button_box}>
                        <button className={`btn btn-md btn-outline-dark ${style.box_cont}`}
                                onClick={() => onMoveToFocus(sectionRefs[0])}>
                            처음으로
                        </button>
                        <button className={`btn btn-md btn-outline-dark ${style.box_cont}`}
                                onClick={() => {
                                    navigate("/MemberForm")
                                }}>
                            시작하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}