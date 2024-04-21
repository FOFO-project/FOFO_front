export class MatchRequestDto {
    id: number | null = null;
    manId: number | null = null;
    manAgreement: Boolean | null = null;
    womanId: number | null = null;
    womanAgreement: Boolean | null = null;
	matchingStatus: string | null = null;
    
	constructor(data: any = {}) {
		for (const key in data as MatchRequestDto) {
			if (this.hasOwnProperty(key)) {
				this[key as keyof this] = data[key];
			}
		}
	}
}