import { Location } from "../../shared";

export class AddressFormDTO {
	zipcode: string | null = null;
	sido: string | null = null;
	sigungu: string | null = null;
	eupmyundong: string | null = null;
	location: Location = new Location();

	constructor(data: Partial<AddressFormDTO> = {}) {
		Object.assign(this, data);
	}
}
