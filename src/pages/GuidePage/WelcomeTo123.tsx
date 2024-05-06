import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./WelcomTo123.module.scss";


export function WelcomeTo123() {
    const navigate = useNavigate();

    const element = useRef<HTMLDivElement | null>(null)
    const [inviewPort, setInviewPort] = useState<boolean>(false)
    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
          // callback function에서 전달받은 entries 배열을 forEach로 확인하면서 inIntersecting으로 노출 여부를 확인한다.
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setInviewPort(true)
                }
                else setInviewPort(false)
            })
        }
        // IntersectionObserver 객체를 생성하고 callback function과 option값을 전달한다. threshold를 0.5로 설정
        const observer = new IntersectionObserver(observerCallback, {
            threshold: 0.5
        })
        // IntersectionObserver가 observe할 대상을 추가한다.
        if (element.current) {
            observer.observe(element.current)
        }
    }, [])


    return (
        <div className={style.body}>
            <div className={`${inviewPort ? "opacity-100" : "opacity-0"} ${style.section}`} ref={element}>
                <h1>123</h1>
                <p>;한명의 개인이 만나 둘이 되는 세상</p>
            </div>
            <div className={style.section}>
                <h1>123의 약속</h1>
                <div className={style.text_box}>
                    <p>1. 허위 매물 없이 100% 결제한 회원의 프로필 카드만 제공하겠습니다.</p>
                    <p>2. 회원 모두 좋은 인연을 만날 수 있도록 노력하겠습니다.</p>
                    <p>3. 최상의 회원 풀을 유지할 수 있도록 철저히 관리하겠습니다.</p>
                </div>
            </div>
            <div className={style.section}>
                <h1>가입조건</h1>
                <div className={style.text_box}>
                    <p>1. 수도권 거주</p>
                    <p>2. 미혼</p>
                    <p>3. 솔로(사실혼/돌싱 불가)</p>
                </div>
            </div>
            <div className={style.section}>
                <h1>가입신청</h1>
                <div className={style.text_box}>
                    <p>1. <strong>이성에게 공개 | </strong>나이, 지역, 직업, 키 MBTI, 흡연여부, 종교, 어필사항</p>
                    <p>2. <strong>123에게 공개 | </strong>이름, 회사, 출신학교</p>
                    <p>3. <strong>단, </strong>서비스 취지와 맞지 않는다고 판단될 경우, 가입이 거절될 수 있습니다</p>
                </div>
            </div>
            <div className={style.section}>
                <h1>진행과정</h1>
                <div className={style.text_box}>
                    <p>1. 123 카카오톡 채널 추가 및 가입신청서 제출</p>
                    <p>2. 회사 인증 및 가입비 결제</p>
                    <p>3. 후보 선택 및 매칭</p>
                </div>
            </div>
            <div className={style.section}>
                <h1>환불규정</h1>
                <div className={style.text_box}>
                    <p>1. 프로필 카드 발송 후, 첫 프로필 카드 발송 전까지 70% 환불</p>
                    <p>2. 첫 프로필 카드 발송 후 50% 환불</p>
                    <p>3. 두 번째 프로필 카드 발송 이후 환불 불가</p>
                </div>
            </div>
            <div className={style.section}>
                <h1>Welcome To 123</h1>
                <div className={style.text_box}>
                    <button className="btn btn-outline-dark"
                            onClick={() => {
                                navigate("/MemberForm")
                            }}>
                        시작하기
                    </button>
                </div>
            </div>
        </div>
    )
}