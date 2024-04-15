export class AddressFormDTO {
	zipcode: string | null = null;
	sido: string | null = null;
	sigungu: string | null = null;
	eupmyundong: string | null = null;
	location: {
		x: number;
		y: number;
	} | null = null;

	constructor(data: Partial<AddressFormDTO> = {}) {
		Object.assign(this, data);
	}
}
