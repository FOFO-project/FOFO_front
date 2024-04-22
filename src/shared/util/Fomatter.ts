export const Fomatter = {
	PhoneNumber(phoneNumber: string): string | null {
		if (!phoneNumber) return phoneNumber;

		// Remove all non-numeric characters
		let cleaned = phoneNumber.replace(/\D/g, "");

		// Apply formatting based on length
		if (cleaned.length <= 4) {
			return cleaned.replace(/(\d{3})(\d{1})?/, "$1-$2");
		} else if (cleaned.length <= 5) {
			return cleaned.replace(/(\d{3})(\d{2})?/, "$1-$2");
		} else if (cleaned.length <= 8) {
			return cleaned.replace(/(\d{3})(\d{4})?/, "$1-$2");
		} else {
			if (cleaned.slice(0, 3) !== "010") {
				cleaned = "010" + cleaned.slice(3);
			}
			return cleaned
				.replace(/(\d{3})(\d{4})(\d{4})?/, "$1-$2-$3")
				.slice(0, 13);
		}
	},
	HeightFormat(height: string): number {
		// Remove all non-numeric characters
		let cleaned = height.replace(/\D/g, "");

		// Convert negative values to positive
		if (cleaned.startsWith("-")) {
			cleaned = cleaned.slice(1);
		}

		// Return only the first 3 digits
		return parseInt(cleaned.slice(0, 3));
	},
};
