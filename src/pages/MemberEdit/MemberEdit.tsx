import {
	Gender,
	AgeRelationType,
	Mbti,
	Religion,
	SmokingYn,
	ApiCaller,
	UpdateMemberRequestDto,
	errorCodeToMessage,
} from "../../shared/shared";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { getMissingValueColumns } from "./util/columns";
import { useFormData } from "./hooks/useForm";
import {
	FormAddress,
	FormFile,
	FormInput,
	FormNumber,
	FormSelect,
	FormTextarea,
} from "./MemberEditComponent";
import style from "./MemberEdit.module.scss";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import config from "../../app/config";

export function MemberEdit() {
	const { memberId } = useParams();
	const [activated, setActivated] = useState(false);
	const [profileCardUrl, setProfileCardUrl] = useState<string>("");
	const [profileUrls, setProfileUrls] = useState<string[]>([]);
	const navigate = useNavigate();
	// 개인정보 수집 이용 동의서
	const [formData, setters, getters] = useFormData(
		new UpdateMemberRequestDto()
	);
	const pageType = useLocation().state.location;

	useEffect(() => {
		if (memberId) {
			ApiCaller.get(`/members/${memberId}`)
				.then(async (res) => {
					const { profileImageId, userProfileImageIds } = res.data;
					if (profileImageId) {
						setProfileCardUrl(
							`${config.api_url}/images/${profileImageId}`
						);
					}
					if (userProfileImageIds) {
						setProfileUrls(
							userProfileImageIds
								.filter((e: string | null) => e)
								.map(
									(e: string) =>
										`${config.api_url}/images/${e}`
								)
						);
					}
					setters.setFormData(new UpdateMemberRequestDto(res.data));
					setActivated(true);
					return res;
				})
				.catch((e) => {
					alert("해당 유저ID의 정보가 없습니다" + e);
					navigate("/SignupManage");
				});
		} else {
			setActivated(true);
		}
	}, []);

	const handleEdit = (e: any) => {
		//수정 api 개발시 수정필요
		e.preventDefault();
		const missing = getMissingValueColumns(formData);
		if (missing.length > 0) {
			alert(`${missing.join(", ")}은 필수 입력 항목입니다.`);
			return;
		}

		setActivated(false);
		ApiCaller.formDataPatch(
			`/members/${memberId}`,
			UpdateMemberRequestDto.toFormData(formData)
		)
			.then(() => {
				alert("회원 수정 완료");
				navigate(`/${pageType}`);
			})
			.catch((e) => {
				alert(errorCodeToMessage(e.data.error.code));
				setActivated(true);
			});
		return;
	};

	const handleDelete = (e: any) => {
		e.preventDefault();
		const missing = getMissingValueColumns(formData);
		if (missing.length > 0) {
			alert(`${missing.join(", ")}은 필수 입력 항목입니다.`);
			return;
		}
		setActivated(false);
		ApiCaller.delete(`/members/${memberId}`, formData)
			.then(() => {
				alert("회원 삭제 완료");
				navigate(`/${pageType}`);
			})
			.catch((e) => {
				alert(errorCodeToMessage(e.data.error.code));
				setActivated(true);
			});
		return;
	};
	return (
		<div>
			{/* 유저 입력폼 */}
			<form className={classNames("container mt-5")}>
				<h5>내 정보</h5>
				<FormInput
					column="kakaoId"
					getValue={getters.getValue}
					onChange={setters.handleChange}
				/>
				<h6>프로필이미지</h6>

				{profileUrls.map((e) => {
					return (
						<span>
							<img
								key={e}
								src={e}
								alt="profileCardImage"
								style={{
									width: `20%`,
									padding: "10px",
								}}
							/>
						</span>
					);
				})}
				<h6>주소</h6>
				<FormAddress
					column="sido"
					getValue={getters.getAddressValue}
					onChange={setters.handleAddressChange}
				/>
				<FormAddress
					column="sigungu"
					getValue={getters.getAddressValue}
					onChange={setters.handleAddressChange}
				/>
				<FormAddress
					column="eupmyundong"
					getValue={getters.getAddressValue}
					onChange={setters.handleAddressChange}
				/>
				<h6>내 정보</h6>
				<FormInput
					column="name"
					getValue={getters.getValue}
					onChange={setters.handleChange}
				/>
				<FormSelect
					column="gender"
					seleted={formData.gender || ""}
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
					getValue={getters.getValue}
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
					seleted={formData.mbti || ""}
					options={[["", "선택해주세요"], ...Object.entries(Mbti)]}
					onChange={setters.handleChange}
				/>
				<FormSelect
					column="smokingYn"
					seleted={formData.smokingYn || ""}
					options={[
						["", "선택해주세요"],
						...Object.entries(SmokingYn),
					]}
					onChange={setters.handleChange}
				/>
				<FormSelect
					column="religion"
					seleted={formData.religion || ""}
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
				<FormTextarea
					column="note"
					getValue={getters.getValue}
					onChange={setters.handleChange}
				/>
				{profileCardUrl !== "" ? (
					<img
						src={profileCardUrl}
						alt="profileCardImage"
						style={{
							width: `${config.profile_image_size}px`,
							padding: "10px",
						}}
					/>
				) : null}
				<FormFile
					column="profileCardImage"
					setImageUrl={setProfileCardUrl}
					setFormData={setters.setFormData}
				/>
				<h5>절대 안되는 상대 정보</h5>
				<FormSelect
					column="filteringAgeRelation"
					seleted={formData.filteringAgeRelation || ""}
					options={[
						["", "상관없음"],
						...Object.entries(AgeRelationType),
					]}
					onChange={setters.handleChange}
				/>
				<FormSelect
					column="filteringSmoker"
					seleted={formData.filteringSmoker || ""}
					options={[
						["", "선택해주세요"],
						["N", "상관없음"],
						["Y", "비흡연"],
					]}
					onChange={setters.handleChange}
				/>
				<FormSelect
					column="filteringReligion"
					seleted={formData.filteringReligion || ""}
					options={[["", "상관없음"], ...Object.entries(Religion)]}
					onChange={setters.handleChange}
				/>
				<div className={style.buttonContainer}>
					<button
						type="submit"
						className={`btn btn-secondary ${style.btn_item}`}
						onClick={() => {
							navigate(`/${pageType}`);
						}}
					>
						닫기
					</button>
					<button
						type="submit"
						className={`btn btn-primary ${style.btn_item}`}
						onClick={handleEdit}
						disabled={!activated}
					>
						수정
					</button>
					<button
						type="submit"
						className={`btn btn-danger ${style.btn_item}`}
						onClick={handleDelete}
						disabled={!activated}
					>
						삭제
					</button>
				</div>
			</form>
		</div>
	);
}
