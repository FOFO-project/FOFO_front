import { ActiveStatus } from "../../shared";

export class Location {
	x: number | null = null;
	y: number | null = null;
}

// Address Models
export class Address {
	zipcode: string | null = null;
	sido: string | null = null;
	sigungu: string | null = null;
	eupmyundong: string | null = null;
	location: Location = new Location();
	status: ActiveStatus | null = null;
	createdTime: Date | null = null;
	modifiedTime: Date | null = null;
	constructor(data: Partial<Address> = {}) {
		Object.assign(this, data);
	}
}
