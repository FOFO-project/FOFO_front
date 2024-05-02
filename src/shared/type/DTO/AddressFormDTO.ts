
export class AddressFormDTO {
	zipcode: string | null = "";
	sido: string | null = null;
	sigungu: string | null = null;
	eupmyundong: string | null = null;

	constructor(data: any = {}) {
		for (const key in data as AddressFormDTO) {
			if (this.hasOwnProperty(key)) {
				this[key as keyof this] = data[key];
			}
		}
	}
}
