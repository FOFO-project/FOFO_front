import { ActiveStatus } from "../../shared";

// Address Models
export class Address {
	zipcode: string | null = null;
	sido: string | null = null;
	sigungu: string | null = null;
	eupmyundong: string | null = null;
	location: {
		x: number;
		y: number;
	} | null = null;
	status: ActiveStatus | null = null;
	createdTime: Date | null = null;
	modifiedTime: Date | null = null;
}
