export class MatchRequestDto {
    id: number | null = null;
    manId: number | null = null;
    manAgreement: string | null = null;
    womanId: number | null = null;
    womanAgreement: string | null = null;
	matchStatus: string | null = null;
    
	constructor(data: any = {}) {
		for (const key in data as MatchRequestDto) {
			if (this.hasOwnProperty(key)) {
				this[key as keyof this] = data[key];
			}
		}
	}
}