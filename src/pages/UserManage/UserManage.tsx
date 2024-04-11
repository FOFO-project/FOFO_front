import { HeaderTest } from "../pages";
import styles from "../pages.module.scss";

export function UserManage() {
	return (
		<div className={styles.Page}>
			<HeaderTest />
			<div className={styles.container}></div>
		</div>
	);
}
