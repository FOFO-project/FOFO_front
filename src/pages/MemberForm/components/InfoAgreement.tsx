import style from "../MemberForm.module.scss";

interface InfoAgreementProps {
	setInformationAgreeStatus: Function;
}

export function InfoAgreement({
	setInformationAgreeStatus,
}: InfoAgreementProps) {
	const InformationAgreement = (
		e: React.MouseEvent<HTMLButtonElement>,
		param: string
	) => {
		e.preventDefault();
		setInformationAgreeStatus(param);
	};

	return (
		<div
			className="modal fade"
			id="staticBackdrop"
			data-bs-backdrop="static"
			data-bs-keyboard="false"
			tabIndex={-1}
			aria-labelledby="staticBackdropLabel"
			aria-hidden="true"
		>
			<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
				<div className="modal-content">
					<div className="modal-header">
						<h1
							className="modal-title fs-6"
							id="staticBackdropLabel"
						>
							개인정보 수집/이용 동의서
						</h1>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
					</div>
					<div className="modal-body">
						<p className={style.modal_title}>
							<strong>
								개인정보 수집 및 이용에 동의해 주세요.
								<br /> 동의한 사람에 한해 가입이 진행됩니다.
							</strong>
						</p>
						<hr />
						<p className={style.modal_content}>
							<strong>1. 수집 목적:</strong> 본인 확인 및 지원자의
							정보에 맞는 상대방을 연결하는데 이용
						</p>
						<p className={style.modal_content}>
							<strong>2. 수집 항목:</strong>{" "}
							개인식별정보(성명,생년월일,주소,kakaoId,학력 등)
						</p>
						<p className={style.modal_content}>
							<strong>3. 보유 및 이용 기간:</strong> 정보
							제출일로부터 1년 이하
						</p>
						<p className={style.modal_content}>
							* 귀하는 이에 대한 동의를 거부할 수 있으며, 다만,
							동의가 없을 경우 가입 진행이 불가능 할 수 있음을
							알려드립니다.
						</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-sm btn-secondary"
							data-bs-dismiss="modal"
							onClick={(e) => InformationAgreement(e, "N")}
						>
							동의안함
						</button>
						<button
							type="button"
							className="btn btn-sm btn-primary"
							data-bs-dismiss="modal"
							onClick={(e) => InformationAgreement(e, "Y")}
						>
							동의
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
