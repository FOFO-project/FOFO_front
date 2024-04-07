import { HeaderTest } from "../pages";
import styles from "../pages.module.scss";
import { UserManagePanel } from "../../widgets/widgets";

export function UserManage() {
	return (
		<div className={styles.Page}>
			<HeaderTest />
			<div className={styles.container}>
				<UserManagePanel />
			</div>
		</div>
	);
}
