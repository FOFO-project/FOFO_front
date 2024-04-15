import { ActiveStatus, GeoPoint } from "../../shared";

// Address Models
export class Address {
	id: number | null = null;
	zipcode: string | null = null;
	sido: string | null = null;
	sigungu: string | null = null;
	eupmyundong: string | null = null;
	location: GeoPoint = new GeoPoint();
	status: ActiveStatus | null = null;
	createdTime: string | null = null;
	modifiedTime: string | null = null;

	constructor(data: Partial<Address> = {}) {
		Object.assign(this, data);
	}
}
