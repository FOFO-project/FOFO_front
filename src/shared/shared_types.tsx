export interface Condition {
	name: string;
	type: "string" | "select";
	valueList?: any[];
}
