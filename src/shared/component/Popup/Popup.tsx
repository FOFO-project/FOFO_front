import { ReactElement, useState } from "react";
import styles from "./Popup.module.scss";

export interface PopupProps {
	isActive: boolean;
	toggleActive: Function;
	children: ReactElement | ReactElement[];
}
export const Popup = ({ isActive, toggleActive, children }: PopupProps) => {
	return (
		<div>
			{isActive ? (
				<div
					className={styles.background}
					onClick={() => toggleActive()}
				/>
			) : null}
			<div className={styles.child_container}>
				{isActive ? children : null}
			</div>
		</div>
	);
};
