import { useEffect, useRef, useState } from "react";
import { ConditionListModel } from "../../../shared";

interface SelectConditionProps {
	title: string;
	type: { [s: string]: any };
	targetColumn: keyof ConditionListModel;
	conditionData: ConditionListModel;
	setConditionData: Function;
}

export function SelectConditionCopy({
	title,
	type,
	targetColumn,
	conditionData,
	setConditionData
}: SelectConditionProps) {
	const [ selectedValue, setSelectedValue ] = useState("없음");

	const Options = [{key: null, value: "없음" }, ...Object.entries(type).map(
        ([key, value]) => {
            return { key: key, value: value};
        }
    )];

	const handleOptionClick = (key:any, value:any) => {
		setConditionData({
			...conditionData,
			[targetColumn]: key,
		});
		setSelectedValue(value);
	};

	return (
		<div className="col dropdown">
			<button className="btn btn-outline-dark btn-sm dropdown-toggle" 
					data-bs-toggle="dropdown" 
					aria-expanded="false">
				{selectedValue == "없음" ? title : selectedValue}
			</button>
			<ul className="dropdown-menu">
				{Options.map((options) => (
					<li key={options.key}>
						<a className="dropdown-item"
							href="#"
							onClick={() => handleOptionClick(options.key, options.value)}
						>
							{options.value}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}