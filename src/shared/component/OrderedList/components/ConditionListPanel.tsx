import styles from "../styles.module.scss";
import classNames from "classnames";
import { Condition, Ordering } from "../../../shared";

interface ConditionBoxProps {
	condition: Condition;
	onClick: (ordering: Ordering) => undefined;
}
function ConditionBox({ condition, onClick }: ConditionBoxProps) {
	return (
		<div
			className={classNames(styles.condition_box, styles.padding_border)}
		>
			<div className={styles.name}>{condition.name}</div>
			<div className={styles.updown}>
				<button
					onClick={() => {
						onClick({
							condition: condition,
							orderDir: 1,
						});
					}}
				>
					오름차순
				</button>
				<button
					onClick={() => {
						onClick({
							condition: condition,
							orderDir: -1,
						});
					}}
				>
					내림차순
				</button>
			</div>
		</div>
	);
}

interface ConditionListPanelProps {
	conditionList: Condition[];
	onClick: (ordering: Ordering) => undefined;
}
export function ConditionListPanel({
	conditionList,
	onClick,
}: ConditionListPanelProps) {
	return (
		<div
			className={classNames(
				styles.condition_list_panel,
				styles.padding_border
			)}
		>
			{conditionList.map((condition, i) => {
				return (
					<ConditionBox
						key={i}
						condition={condition}
						onClick={onClick}
					/>
				);
			})}
		</div>
	);
}
