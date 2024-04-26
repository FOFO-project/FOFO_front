import {
	Gender,
	AgeRelationType,
	Mbti,
	Religion,
	SmokingYn,
	ApiCaller,
	AppendMemberRequestDto,
} from "../../shared/shared";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import {
	labelColumnsMap,
	getMissingValueColumns,
} from "./model/labelColumnsMap";
import { useFormData } from "./hooks/useForm";
import style from "./MemberForm.module.scss";

export function MemberForm() {
	const navigate = useNavigate();
	const [formData, setters] = useFormData(new AppendMemberRequestDto());

	// 개인정보 수집 이용 동의서
	const [ informationAgreeStatus, setInformationAgreeStatus ] = useState("N");

	const InformationAgreement = (e: React.MouseEvent<HTMLButtonElement> , param:string) => {
		console.log(informationAgreeStatus);
		e.preventDefault();
		setInformationAgreeStatus(param);
		console.log(informationAgreeStatus);
	}

	const handleSubmit = (e: any) => {
		e.preventDefault();
		const missing = getMissingValueColumns(formData);
		if (missing.length > 0) {
			alert(`${missing.join(", ")}은 필수 입력 항목입니다.`);
			return;
		}

		if(informationAgreeStatus == "N"){
			alert(`개인정보 수집 및 이용 동의가 필요합니다.`);
			return;
		}
		ApiCaller.post("/member", AppendMemberRequestDto.exceptNote(formData))
			.then(() => {
				alert("제출완료");
				navigate("/MemberForm");
				window.location.reload();
			})
			.catch((e) => {
				console.error(e);
				alert("Fail");
			});
		return;
	};

	return (
		<div>
			{/* 개인정보 이용 동의서 모달 */}
			<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
					<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-6" id="staticBackdropLabel">개인정보 수집/이용 동의서</h1>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<p className={style.modal_title}><strong>개인정보 수집 및 이용에 동의해 주세요.<br /> 동의한 사람에 한해 가입이 진행됩니다.</strong></p>
						<hr />
						<p className={style.modal_content}><strong>1. 수집 목적:</strong> 본인 확인 및 지원자의 정보에 맞는 상대방을 연결하는데 이용</p>
						<p className={style.modal_content}><strong>2. 수집 항목:</strong> 개인식별정보(성명,생년월일,주소,전화번호,kakaoId,학력 등)</p>
						<p className={style.modal_content}><strong>3. 보유 및 이용 기간:</strong> 정보 제출일로부터 1년 이하</p>
						<p className={style.modal_content}>* 귀하는 이에 대한 동의를 거부할 수 있으며, 다만, 동의가 없을 경우 가입 진행이 불가능 할 수 있음을 알려드립니다.</p>
					</div>
					<div className="modal-footer">
						<button type="button" 
								className="btn btn-sm btn-secondary" 
								data-bs-dismiss="modal"
								onClick={e => InformationAgreement(e, "N")}>
								동의안함
						</button>
						<button type="button" 
								className="btn btn-sm btn-primary" 
								data-bs-dismiss="modal"
								onClick={e => InformationAgreement(e, "Y")}>
								동의
						</button>
					</div>
					</div>
				</div>
			</div>
			{/* 유저 입력폼 */}
			<form className={classNames("container mt-5")}>
				<h5>내 정보</h5>
				<div className="mb-3">
					<label htmlFor="kakaoId" className="form-label">
						{labelColumnsMap.kakaoId}
					</label>
					<input
						type="text"
						className="form-control"
						id="kakaoId"
						name="kakaoId"
						value={formData.kakaoId || ""}
						onChange={setters.handleChange}
					/>
				</div>
				<h6>주소</h6>
				{/* <div className="mb-3">
					<label htmlFor="zipcode" className="form-label">
						{labelColumnsMap.address.zipcode}
					</label>
					<input
						type="text"
						className="form-control"
						id="zipcode"
						name="zipcode"
						value={formData.address.zipcode || ""}
						onChange={setters.handleAddressChange}
					/>
				</div> */}
				<div className="mb-3">
					<label htmlFor="sido" className="form-label">
						{labelColumnsMap.address.sido}
					</label>
					<input
						type="text"
						className="form-control"
						id="sido"
						name="sido"
						value={formData.address.sido || ""}
						onChange={setters.handleAddressChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="sigungu" className="form-label">
						{labelColumnsMap.address.sigungu}
					</label>
					<input
						type="text"
						className="form-control"
						id="sigungu"
						name="sigungu"
						value={formData.address.sigungu || ""}
						onChange={setters.handleAddressChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="eupmyundong" className="form-label">
						{labelColumnsMap.address.eupmyundong}
					</label>
					<input
						type="text"
						className="form-control"
						id="eupmyundong"
						name="eupmyundong"
						value={formData.address.eupmyundong || ""}
						onChange={setters.handleAddressChange}
					/>
				</div>
				<h6>내 정보</h6>
				<div className="mb-3">
					<label htmlFor="name" className="form-label">
						{labelColumnsMap.name}
					</label>
					<input
						type="text"
						className="form-control"
						id="name"
						name="name"
						value={formData.name || ""}
						onChange={setters.handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="gender" className="form-label">
						{labelColumnsMap.gender}
					</label>
					<select
						className="form-select"
						id="gender"
						name="gender"
						value={formData.gender || ""}
						onChange={setters.handleChange}
					>
						<option value="">선택해주세요</option>
						{Object.entries(Gender).map(([key, value]) => (
							<option key={key} value={key}>
								{value}
							</option>
						))}
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="birthday" className="form-label">
						{labelColumnsMap.birthday}
					</label>
					<input
						type="date"
						className="form-control"
						id="birthday"
						name="birthday"
						value={
							formData.birthday
								? new Date(formData.birthday)
										.toISOString()
										.substring(0, 10)
								: ""
						}
						onChange={setters.handleDateChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="height" className="form-label">
						{labelColumnsMap.height}
					</label>
					<div className="input-group">
						<input
							type="number"
							className="form-control"
							id="height"
							name="height"
							value={formData.height || ""}
							onChange={setters.handleHeightChange}
							min="0"
							max="1000"
							step="1"
						/>
						<span className="input-group-text">cm</span>
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="phoneNumber" className="form-label">
						{labelColumnsMap.phoneNumber}
					</label>
					<input
						type="text"
						className="form-control"
						id="phoneNumber"
						name="phoneNumber"
						value={formData.phoneNumber || ""}
						onChange={setters.handlePhoneNumberChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="company" className="form-label">
						{labelColumnsMap.company}
					</label>
					<input
						type="text"
						className="form-control"
						id="company"
						name="company"
						value={formData.company || ""}
						onChange={setters.handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="job" className="form-label">
						{labelColumnsMap.job}
					</label>
					<input
						type="text"
						className="form-control"
						id="job"
						name="job"
						value={formData.job || ""}
						onChange={setters.handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="university" className="form-label">
						{labelColumnsMap.university}
					</label>
					<input
						type="text"
						className="form-control"
						id="university"
						name="university"
						value={formData.university || ""}
						onChange={setters.handleChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="mbti" className="form-label">
						{labelColumnsMap.mbti}
					</label>
					<select
						className="form-select"
						id="mbti"
						name="mbti"
						value={formData.mbti || ""}
						onChange={setters.handleChange}
					>
						<option value="">선택해주세요</option>
						{Object.entries(Mbti).map(([key, value]) => (
							<option key={key} value={key}>
								{value}
							</option>
						))}
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="smokingYn" className="form-label">
						{labelColumnsMap.smokingYn}
					</label>
					<select
						className="form-select"
						id="smokingYn"
						name="smokingYn"
						value={formData.smokingYn || ""}
						onChange={setters.handleChange}
					>
						<option value="">선택해주세요</option>
						{Object.entries(SmokingYn).map(([key, value]) => (
							<option key={key} value={key}>
								{value}
							</option>
						))}
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="religion" className="form-label">
						{labelColumnsMap.religion}
					</label>
					<select
						className="form-select"
						id="religion"
						name="religion"
						value={formData.religion || ""}
						onChange={setters.handleChange}
					>
						<option value="">선택해주세요</option>
						{Object.entries(Religion).map(([key, value]) => (
							<option key={key} value={key}>
								{value}
							</option>
						))}
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="charmingPoint" className="form-label">
						{labelColumnsMap.charmingPoint}
					</label>
					<textarea
						className="form-control"
						id="charmingPoint"
						name="charmingPoint"
						value={formData.charmingPoint || ""}
						onChange={setters.handleChange}
					/>
				</div>
				<h5>절대 안되는 상대 정보</h5>
				<div className="mb-3">
					<label
						htmlFor="filteringAgeRelation"
						className="form-label"
					>
						{labelColumnsMap.filteringAgeRelation}
					</label>
					<select
						className="form-select"
						id="filteringAgeRelation"
						name="filteringAgeRelation"
						value={formData.filteringAgeRelation || ""}
						onChange={setters.handleChange}
					>
						<option value="">상관없음</option>
						{Object.entries(AgeRelationType).map(([key, value]) => (
							<option key={key} value={key}>
								{value}
							</option>
						))}
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="filteringSmoker" className="form-label">
						{labelColumnsMap.filteringSmoker}
					</label>
					<select
						className="form-select"
						id="filteringSmoker"
						name="filteringSmoker"
						value={formData.filteringSmoker || ""}
						onChange={setters.handleChange}
					>
						<option value="">선택해주세요</option>
						<option value="N">상관없음</option>
						<option value="Y">비흡연</option>
					</select>
				</div>
				<div className="mb-3">
					<label htmlFor="filteringReligion" className="form-label">
						{labelColumnsMap.filteringReligion}
					</label>
					<select
						className="form-select"
						id="filteringReligion"
						name="filteringReligion"
						value={formData.filteringReligion || ""}
						onChange={setters.handleChange}
					>
						<option value="">상관없음</option>
						{Object.entries(Religion).map(([key, value]) => (
							<option key={key} value={key}>
								{value}
							</option>
						))}
					</select>
				</div>
				<div className={style.buttonContainer}>
					<button type="button" className={`btn btn-primary ${style.btn_item}`} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
						개인정보 이용 동의서
					</button>
					<button
						type="submit"
						className={`btn btn-primary ${style.btn_item}`}
						onClick={handleSubmit}
					>
						제출
					</button>
				</div>
			</form>
		</div>
	);
}
