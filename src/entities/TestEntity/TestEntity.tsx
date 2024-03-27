import { ReactElement } from "react";
import styles from "./styles.module.scss";

interface TestEntityProps {
	text: string;
}
export function TestEntity({ text }: TestEntityProps): ReactElement {
	return <div className={styles.container}>{text}</div>;
}
