export class PageInfo {
	page: number = 0;
	size: number = 2;
	totalElements: number = 0;
	totalPages: number = 0;
	constructor(data: Partial<PageInfo> = {}) {
		Object.assign(this, data);
	}
}
