import React, { useState } from "react";
import { ConditionListModel } from "../../../shared";

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
	setConditionData
}: SelectConditionProps) {
	const [ selectedValue, setSelectedValue ] = useState("없음");
	const [isActive, setActive] = useState(false);

	const Options = [{key: null, value: "없음" }, ...Object.entries(type).map(
        ([key, value]) => {
            return { key: key, value: value};
        }
    )];

	const handleOptionClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, key:any, value:any) => {
		e.preventDefault();
		setConditionData({
			...conditionData,
			[targetColumn]: key,
		});
		setSelectedValue(value);
		if(key == null){
			setActive(false);
		} else{
			setActive(true);
		}
	};

	return (
		<div className="dropdown">
			<button className={`btn ${isActive == false ? 'btn-outline-dark' : 'btn-dark'} btn-lg dropdown-toggle`}
					data-bs-toggle="dropdown"
					aria-expanded="false"
					data-bs-auto-close="outside">
				{selectedValue == "없음" ? title : selectedValue}
			</button>
			<ul className="dropdown-menu" style={{maxHeight:"150px",overflowY:"auto"}}>
				{Options.map((options) => (
					<li key={options.key}>
						<a className="dropdown-item"
							href="#"
							onClick={(e) => handleOptionClick(e, options.key, options.value)}
						>
							{options.value}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}