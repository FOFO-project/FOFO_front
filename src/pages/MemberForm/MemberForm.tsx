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
	except,
	labelColumnsMap,
	getMissingValueColumns,
} from "./model/labelColumnsMap";
import { useFormData } from "./hooks/useForm";
import style from "./MemberForm.module.scss";
import { InfoAgreement } from "./components/InfoAgreement";

export function MemberForm() {
	const navigate = useNavigate();
	const [formData, setters] = useFormData(new AppendMemberRequestDto());
	const [informationAgreeStatus, setInformationAgreeStatus] = useState("N");
	const [uploadFiles, setuploadFiles] = useState<File[]>([]);

	// 개인정보 수집 이용 동의서

	const handleSubmit = (e: any) => {
		e.preventDefault();
		console.log(uploadFiles);
		const missing = getMissingValueColumns(formData);
		if (missing.length > 0) {
			alert(`${missing.join(", ")}은 필수 입력 항목입니다.`);
			return;
		}

		if (informationAgreeStatus == "N") {
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
				alert("Fail");
			});
		return;
	};

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (e.target.files) {
			const files = Array.from(e.target.files).filter((file) =>
				file.type.startsWith("image/")
			);
			if (files.length + setuploadFiles.length > 3) {
				alert("이미지 파일은 최대 3개까지 선택 가능합니다.");
			}
			setuploadFiles(files.slice(0, 3));
		}
	};

	const mandatoryMark = (cols: string) => {
		return except.includes(cols) ? null : (
			<span className={style.mandatory_mark}>*</span>
		);
	};

	return (
		<div>
			<InfoAgreement
				setInformationAgreeStatus={setInformationAgreeStatus}
			/>
			{/* 유저 입력폼 */}
			<form className={classNames("container mt-5")}>
				<h5>내 정보</h5>
				<div className="mb-3">
					<label className="form-label">사진</label>
					<input
						type="file"
						className="form-control"
						accept="image/*"
						multiple
						onChange={handleImageChange}
					/>
				</div>
				<div className="mb-3">
					{mandatoryMark("kakaoId")}
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
				<div className="mb-3">
					{mandatoryMark("sido")}
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
					{mandatoryMark("sigungu")}
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
					{mandatoryMark("eupmyundong")}
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
					{mandatoryMark("name")}
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
					{mandatoryMark("gender")}
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
					{mandatoryMark("birthday")}
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
					{mandatoryMark("height")}
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
					{mandatoryMark("phoneNumber")}
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
					{mandatoryMark("company")}
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
					{mandatoryMark("job")}
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
					{mandatoryMark("university")}
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
					{mandatoryMark("mbti")}
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
					{mandatoryMark("smokingYn")}
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
					{mandatoryMark("religion")}
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
					{mandatoryMark("charmingPoint")}
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
					{mandatoryMark("filteringAgeRelation")}
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
					{mandatoryMark("filteringSmoker")}
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
					{mandatoryMark("filteringReligion")}
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
					<button
						type="button"
						className={`btn btn-primary ${style.btn_item}`}
						data-bs-toggle="modal"
						data-bs-target="#staticBackdrop"
					>
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
