import React, { useState } from "react";
import { ConditionListModel } from "../../../shared";
import style from "../ConditionBox.module.scss";
import classNames from "classnames";

interface SelectConditionProps {
	title: string;
	type: { [s: string]: any };
	targetColumn: keyof ConditionListModel;
	conditionData: ConditionListModel;
	setConditionData: Function;
}

export function SelectCondition({
	title,
	type,
	targetColumn,
	conditionData,
	setConditionData,
}: SelectConditionProps) {
	const [selectedValue, setSelectedValue] = useState("없음");
	const [isActive, setActive] = useState(false);

	const Options = [
		{ key: null, value: "없음" },
		...Object.entries(type).map(([key, value]) => {
			return { key: key, value: value };
		}),
	];

	const handleOptionClick = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		key: any,
		value: any
	) => {
		e.preventDefault();
		setConditionData({
			...conditionData,
			[targetColumn]: key,
		});
		setSelectedValue(value);
		if (key == null) {
			setActive(false);
		} else {
			setActive(true);
		}
	};

	return (
		<div className={classNames(`dropdown`, style.dropdown)}>
			<button
				className={`btn ${
					isActive == false ? "btn-light" : "btn-dark"
				} btn-lg dropdown-toggle ${style.btnbox}`}
				data-bs-toggle="dropdown"
				aria-expanded="false"
				data-bs-auto-close="outside"
			>
				{selectedValue == "없음" ? title : selectedValue}
			</button>
			<ul
				className={classNames(
					style.dropdownMenu,
					style.select,
					"dropdown-menu"
				)}
			>
				{Options.map((options) => (
					<li key={options.key}>
						<a
							className={classNames("dropdown-item", style.a)}
							href="#"
							onClick={(e) =>
								handleOptionClick(e, options.key, options.value)
							}
						>
							{options.value}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}
