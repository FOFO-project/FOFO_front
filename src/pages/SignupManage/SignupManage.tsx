import { HeaderTest } from "../pages";
import styles from "../pages.module.scss";
import { SignupManagePanel } from "../../widgets/widgets";
export function SignupManage() {
	return (
		<div className={styles.Page}>
			<div className={styles.Header}>
				<HeaderTest />
			</div>
			<div className={styles.Panel}>
				<SignupManagePanel />
			</div>
		</div>
	);
}
