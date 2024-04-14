import { ReactElement } from "react";
import styles from "./Toggle.module.scss";

export interface ToggleProps {
	isActive: boolean;
	setActive: Function;
	children: ReactElement | ReactElement[];
}
export const Toggle = ({ isActive, setActive, children }: ToggleProps) => {
	return (
		<div>
			{isActive ? (
				<div
					className={styles.background}
					onClick={() => setActive(false)}
				/>
			) : null}
			<div className={styles.child_container}>
				{isActive ? children : null}
			</div>
		</div>
	);
};
