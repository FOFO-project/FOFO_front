import {
	AgeRelationType,
	ApiCaller,
	AppendMemberRequestDto,
	errorCodeToMessage,
	Gender,
	Mbti,
	Religion,
	SmokingYn,
} from "../../shared/shared";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import style from "./MemberForm.module.scss";
import { InfoAgreement } from "./components/InfoAgreement";
import { FormInput } from "./components/FormInput";
import { FormSelect } from "./components/FormSelect";
import { FormNumber } from "./components/FormNumber";
import { useFormData } from "./hooks/useForm";
import { FormTextarea } from "./components/FormTextarea";
import { FormFile } from "./components/FormFile";
import { getMissingValueColumns } from "./util/columns";

export function MemberForm() {
	const navigate = useNavigate();
	const [activated, setActivated] = useState(true);
	const [formData, setters, getters] = useFormData();
	const [informationAgreeStatus, setInformationAgreeStatus] = useState("N");

	const handleSubmit = (e: any) => {
		e.preventDefault();

		const missing = getMissingValueColumns(formData);
		if (missing.length > 0) {
			alert(`${missing.join(", ")}은 필수 입력 항목입니다.`);
			return;
		}

		if (informationAgreeStatus === "N") {
			alert("개인정보 수집 이용 동의서에 동의해주세요.");
			return;
		}

		setActivated(false);
		ApiCaller.formDataPost(
			"/member",
			AppendMemberRequestDto.toFormData(formData)
		)
			.then(() => {
				alert(
					"제출 완료 후 카카오톡 채널 '123 world'로 꼭 '완료'라고 메세지 부탁 드리겠습니다!"
				);
				navigate("/MemberForm");
				window.location.reload();
			})
			.catch((e) => {
				alert(errorCodeToMessage(e.data.error.code));
				setActivated(true);
			});
		return;
	};

	return (
		<div className={style.wrap}>
			{/* 개인정보 수집 이용 동의서 */}
			<InfoAgreement
				setInformationAgreeStatus={setInformationAgreeStatus}
			/>
			{/* 유저 입력폼 */}
			<form className={classNames("container mt-5")}>
				<h5>내 정보</h5>
				<FormFile
					column="userProfileImages"
					setFormData={setters.setFormData}
				/>
				<FormInput
					column="kakaoId"
					getValue={getters.getValue}
					onChange={setters.handleChange}
				/>
				<h6>주소</h6>
				<FormInput
					column="sido"
					getValue={getters.getValue}
					onChange={setters.handleChange}
				/>
				<FormInput
					column="sigungu"
					getValue={getters.getValue}
					onChange={setters.handleChange}
				/>
				<FormInput
					column="eupmyundong"
					getValue={getters.getValue}
					onChange={setters.handleChange}
				/>
				<h6>내 정보</h6>
				<FormInput
					column="name"
					getValue={getters.getValue}
					onChange={setters.handleChange}
				/>
				<FormSelect
					column="gender"
					options={[["", "선택해주세요"], ...Object.entries(Gender)]}
					onChange={setters.handleChange}
				/>
				<FormInput
					column="birthday"
					type="date"
					getValue={getters.getDateValue}
					onChange={setters.handleDateChange}
				/>
				<FormNumber
					column="height"
					onChange={setters.handleHeightChange}
				/>
				<FormInput
					column="phoneNumber"
					getValue={getters.getValue}
					onChange={setters.handlePhoneNumberChange}
				/>
				<FormInput
					column="company"
					getValue={getters.getValue}
					onChange={setters.handleChange}
				/>
				<FormInput
					column="job"
					getValue={getters.getValue}
					onChange={setters.handleChange}
				/>
				<FormInput
					column="university"
					getValue={getters.getValue}
					onChange={setters.handleChange}
				/>
				<FormSelect
					column="mbti"
					options={[["", "선택해주세요"], ...Object.entries(Mbti)]}
					onChange={setters.handleChange}
				/>
				<FormSelect
					column="smokingYn"
					options={[
						["", "선택해주세요"],
						...Object.entries(SmokingYn),
					]}
					onChange={setters.handleChange}
				/>
				<FormSelect
					column="religion"
					options={[
						["", "선택해주세요"],
						...Object.entries(Religion),
					]}
					onChange={setters.handleChange}
				/>
				<FormTextarea
					column="charmingPoint"
					getValue={getters.getValue}
					onChange={setters.handleChange}
				/>
				<h5>절대 안되는 상대 정보</h5>
				<FormSelect
					column="filteringAgeRelation"
					options={[
						["", "상관없음"],
						...Object.entries(AgeRelationType),
					]}
					onChange={setters.handleChange}
				/>
				<FormSelect
					column="filteringSmoker"
					options={[
						["", "선택해주세요"],
						["N", "상관없음"],
						["Y", "비흡연"],
					]}
					onChange={setters.handleChange}
				/>
				<FormSelect
					column="filteringReligion"
					options={[["", "상관없음"], ...Object.entries(Religion)]}
					onChange={setters.handleChange}
				/>
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
						className={`btn btn-success ${style.btn_item}`}
						onClick={handleSubmit}
						disabled={!activated}
					>
						제출
					</button>
				</div>
			</form>
		</div>
	);
}
