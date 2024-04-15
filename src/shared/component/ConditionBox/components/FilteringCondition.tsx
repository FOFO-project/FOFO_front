import React, { useState } from "react";
import style from "../ConditionBox.module.scss";

import {
	AgeRelationType,
	SmokingYn,
	ConditionListModel,
	Filtering,
	Religion,
} from "../../../shared";

interface FilteringConditionProps {
	title: string;
	conditionData: ConditionListModel;
	setConditionData: Function;
}
export function FilteringCondition({
	title,
	conditionData,
	setConditionData,
}: FilteringConditionProps) {
	const [isActive, setActive] = useState(false);

	const [selectedAgeValue, setSelectedAgeValue] = useState("없음");
	const [selectedSmokingValue, setSelectedSmokingValue] = useState("없음");
	const [selectedRelValue, setSelectedRelValue] = useState("없음");

	const ageRelationOptions = [
		["상관없음", null],
		...Object.entries(AgeRelationType),
	].map(([key, value]) => {
		return { key: key, value: value };
	});
	const smokingOptions = [
		["상관없음", null],
		...Object.entries(SmokingYn),
	].map(([key, value]) => {
		return { key: key, value: value };
	});

	const religionOptions = [
		["상관없음", null],
		...Object.entries(Religion),
	].map(([key, value]) => {
		return { key: key, value: value };
	});

	function handleOptionClick(
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		key: any,
		value: any,
		targetFilter: keyof Filtering
	) {
		e.preventDefault();
		const filteringCondition = conditionData.filtering_condition;
		setConditionData({
			...conditionData,
			filtering_condition: Object.assign(filteringCondition, {
				[targetFilter]: key,
			}),
		});
		if (targetFilter == "AgeRelation") {
			setSelectedAgeValue(value);
		} else if (targetFilter == "SmokingYn") {
			setSelectedSmokingValue(value);
		} else if (targetFilter == "Religion") {
			setSelectedRelValue(value);
		}
		setActive(true);
	}

	function handleClearClick(
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) {
		e.preventDefault();
		setConditionData({
			...conditionData,
			filtering_condtion: new Filtering(),
		});
		setSelectedAgeValue("없음");
		setSelectedSmokingValue("없음");
		setSelectedRelValue("없음");
		setActive(false);
	}

	return (
		<div className="dropdown">
			<button
				className={`btn ${
					isActive == false ? "btn-light" : "btn-dark"
				} btn-lg dropdown-toggle ${style.btnbox}`}
				data-bs-toggle="dropdown"
				aria-expanded="false"
				data-bs-auto-close="outside"
			>
				{title}
			</button>
			<ul className="dropdown-menu">
				<li className="dropdown-item">
					<div className="col dropdown">
						<button
							className="btn btn-dark btn-sm dropdown-toggle"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							{selectedAgeValue == "없음"
								? title
								: selectedAgeValue}
						</button>
						<ul
							className="dropdown-menu"
							style={{ maxHeight: "150px", overflowY: "auto" }}
						>
							{ageRelationOptions.map((options) => (
								<li key={options.key}>
									<a
										className="dropdown-item"
										href="#"
										onClick={(e) =>
											handleOptionClick(
												e,
												options.key,
												options.value,
												"AgeRelation"
											)
										}
									>
										{options.value}
									</a>
								</li>
							))}
						</ul>
					</div>
				</li>
				<li className="dropdown-item">
					<div className="col dropdown">
						<button
							className="btn btn-dark btn-sm dropdown-toggle"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							{selectedSmokingValue == "없음"
								? title
								: selectedSmokingValue}
						</button>
						<ul
							className="dropdown-menu"
							style={{ maxHeight: "150px", overflowY: "auto" }}
						>
							{smokingOptions.map((options) => (
								<li key={options.key}>
									<a
										className="dropdown-item"
										href="#"
										onClick={(e) =>
											handleOptionClick(
												e,
												options.key,
												options.value,
												"SmokingYn"
											)
										}
									>
										{options.value}
									</a>
								</li>
							))}
						</ul>
					</div>
				</li>
				<li className="dropdown-item">
					<div className="col dropdown">
						<button
							className="btn btn-dark btn-sm dropdown-toggle"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							{selectedRelValue == "없음"
								? title
								: selectedRelValue}
						</button>
						<ul
							className="dropdown-menu"
							style={{ maxHeight: "150px", overflowY: "auto" }}
						>
							{religionOptions.map((options) => (
								<li key={options.key}>
									<a
										className="dropdown-item"
										href="#"
										onClick={(e) =>
											handleOptionClick(
												e,
												options.key,
												options.value,
												"Religion"
											)
										}
									>
										{options.value}
									</a>
								</li>
							))}
						</ul>
					</div>
				</li>
				<li>
					<a
						className="dropdown-item"
						href="#"
						onClick={(e) => handleClearClick(e)}
					>
						clear
					</a>
				</li>
			</ul>
		</div>
	);
}
