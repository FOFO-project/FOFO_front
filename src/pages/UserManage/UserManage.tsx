import { FofoHeader } from "../../widgets/widgets";
import styles from "../pages.module.scss";

export function UserManage() {
	return (
		<div className={styles.Page}>
			<FofoHeader />
			<div className={styles.container}></div>
		</div>
	);
}
