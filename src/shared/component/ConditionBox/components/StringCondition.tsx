import { useEffect, useRef, useState, KeyboardEvent } from "react";
import { ConditionListModel } from "../../../shared";
import style from "../ConditionBox.module.scss";

interface StringConditionProps {
	title: string;
	targetColumn: keyof ConditionListModel;
	conditionData: ConditionListModel;
	setConditionData: Function;
}
export function StringCondition({
	title,
	targetColumn,
	conditionData,
	setConditionData,
}: StringConditionProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isActive, setActive] = useState(false);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.value =
				conditionData[targetColumn]?.toString() || "";
		}
	});

    const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const inputValue = e.currentTarget.value;
            setConditionData({
                ...conditionData,
                [targetColumn]: inputValue === '' ? null : inputValue,
            });
            setActive(true);
        }
    };

	return (
		<div className="dropdown">
			<button className={`btn ${isActive?'btn-dark':'btn-light'} btn-lg dropdown-toggle ${style.btnbox}`}
					data-bs-toggle="dropdown" 
					aria-expanded="false"
					data-bs-auto-close="true"
					style={{width:180, height:60}}>
				{title}
			</button>
			<div className="dropdown-menu">
				<form className="p-2">
					<div className="mb-3">
						<input type="text" 
							className="form-control" 
							ref={inputRef}
							autoFocus={true}
							onInput={(e) => {
								const inputValue = (e.target as HTMLInputElement)
								.value;
								setConditionData({
									...conditionData,
									[targetColumn]:
										inputValue === "" ? null : inputValue,
								});
								setActive(true);
							}}
							onKeyDown={handleInputKeyDown}
						/>
					</div>
					<a className="btn btn-dark"
						href="#"
						onClick={(e) => {
							e.preventDefault();
							setConditionData({
								...conditionData,
								[targetColumn]: null,
							});
							setActive(false);
						}}
						>clear
					</a>
				</form>
			</div>
		</div>
	);
}
