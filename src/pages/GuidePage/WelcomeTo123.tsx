import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import style from "./WelcomTo123.module.scss";


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
                <div className={style.section_item}>
                    <h1>123</h1>
                    <p>;한명의 개인이 만나 둘이 되는 세상</p>
                    <button className="btn btn-sm btn-outline-light"
                            onClick={() => onMoveToFocus(sectionRefs[1])}>
                        next
                    </button>
                </div>
            </div>
            <div className={style.section} ref={sectionRefs[1]}>
                <div className={style.section_item}>
                    <h1>123의 약속</h1>
                    <div className={style.text_box}>
                        <p>1. 허위 매물 없이 100% 결제한 회원의 프로필 카드만 제공하겠습니다.</p>
                        <p>2. 회원 모두 좋은 인연을 만날 수 있도록 노력하겠습니다.</p>
                        <p>3. 최상의 회원 풀을 유지할 수 있도록 철저히 관리하겠습니다.</p>
                    </div>
                    <div className="btn-group" role="group" aria-label="">
                        <button className="btn btn-sm btn-outline-light"
                                onClick={() => onMoveToFocus(sectionRefs[0])}>
                            previous
                        </button>
                        <button className="btn btn-sm btn-outline-light"
                                onClick={() => onMoveToFocus(sectionRefs[2])}>
                            next
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.section} ref={sectionRefs[2]}>
                <div className={style.section_item}>
                    <h1>가입조건</h1>
                    <div className={style.text_box}>
                        <p>1. 수도권 거주</p>
                        <p>2. 미혼</p>
                        <p>3. 솔로(사실혼/돌싱 불가)</p>
                    </div>
                    <div className="btn-group" role="group" aria-label="">
                        <button className="btn btn-sm btn-outline-light"
                                onClick={() => onMoveToFocus(sectionRefs[1])}>
                            previous
                        </button>
                        <button className="btn btn-sm btn-outline-light"
                                onClick={() => onMoveToFocus(sectionRefs[3])}>
                            next
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.section} ref={sectionRefs[3]}>
                <div className={style.section_item}>
                    <h1>가입신청</h1>
                    <div className={style.text_box}>
                        <p>1. <strong>이성에게 공개 | </strong>나이, 지역, 직업, 키 MBTI, 흡연여부, 종교, 어필사항</p>
                        <p>2. <strong>123에게 공개 | </strong>이름, 회사, 출신학교</p>
                        <p>3. <strong>단, </strong>서비스 취지와 맞지 않는다고 판단될 경우, 가입이 거절될 수 있습니다</p>
                    </div>
                    <div className="btn-group" role="group" aria-label="">
                        <button className="btn btn-sm btn-outline-light"
                                onClick={() => onMoveToFocus(sectionRefs[2])}>
                            previous
                        </button>
                        <button className="btn btn-sm btn-outline-light"
                                onClick={() => onMoveToFocus(sectionRefs[4])}>
                            next
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.section} ref={sectionRefs[4]}>
                <div className={style.section_item}>
                    <h1>진행과정</h1>
                    <div className={style.text_box}>
                        <p>1. 123 카카오톡 채널 추가 및 가입신청서 제출</p>
                        <p>2. 회사 인증 및 가입비 결제</p>
                        <p>3. 후보 선택 및 매칭</p>
                    </div>
                    <div className="btn-group" role="group" aria-label="">
                        <button className="btn btn-sm btn-outline-light"
                                onClick={() => onMoveToFocus(sectionRefs[3])}>
                            previous
                        </button>
                        <button className="btn btn-sm btn-outline-light"
                                onClick={() => onMoveToFocus(sectionRefs[5])}>
                            next
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.section} ref={sectionRefs[5]}>
                <div className={style.section_item}>
                    <h1>환불규정</h1>
                    <div className={style.text_box}>
                        <p>1. 프로필 카드 발송 후, 첫 프로필 카드 발송 전까지 70% 환불</p>
                        <p>2. 첫 프로필 카드 발송 후 50% 환불</p>
                        <p>3. 두 번째 프로필 카드 발송 이후 환불 불가</p>
                    </div>
                    <div className="btn-group" role="group" aria-label="">
                        <button className="btn btn-sm btn-outline-light"
                                onClick={() => onMoveToFocus(sectionRefs[4])}>
                            previous
                        </button>
                        <button className="btn btn-sm btn-outline-light"
                                onClick={() => onMoveToFocus(sectionRefs[6])}>
                            next
                        </button>
                    </div>
                </div>
            </div>
            <div className={style.section} ref={sectionRefs[6]}>
                <div className={style.section_item}>
                    <h1>Welcome To 123</h1>
                    <div className="btn-group" role="group" aria-label="">
                        <button className="btn btn-sm btn-outline-light"
                                onClick={() => onMoveToFocus(sectionRefs[0])}>
                            처음으로
                        </button>
                        <button className="btn btn-sm btn-outline-light"
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