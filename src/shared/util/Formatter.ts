export const Formatter = {
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
	resizeAndCropImage(file: File, size: number): Promise<File> {
		return new Promise((resolve, reject) => {
			// Create a new Image object
			const img: any = new Image();

			// Event handler for when the image is loaded
			img.onload = function () {
				// Create a canvas element
				const canvas = document.createElement("canvas");
				const ctx = canvas.getContext("2d");

				if (!ctx) {
					reject(new Error("Canvas context is not supported."));
					return;
				}

				// Set the canvas size to the desired size
				canvas.width = size;
				canvas.height = size;

				// Calculate the scale factor for resizing
				const scaleFactor = size / Math.min(this.width, this.height);

				// Calculate the new dimensions after stretching
				const newWidth = this.width * scaleFactor;
				const newHeight = this.height * scaleFactor;

				// Draw the image onto the canvas with resizing and stretching
				ctx.drawImage(this, 0, 0, newWidth, newHeight);

				// Convert the canvas content to a blob
				canvas.toBlob((blob) => {
					if (blob) {
						// Create a new File object from the Blob
						const resizedFile = new File([blob], file.name, {
							type: file.type,
						});
						resolve(resizedFile);
					} else {
						reject(new Error("Failed to create Blob."));
					}
				}, file.type); // Use the original file type for the resulting blob
			};

			// Event handler for when there's an error loading the image
			img.onerror = function () {
				reject(new Error("Failed to load the image."));
			};

			// Set the source of the image to the provided file object
			img.src = URL.createObjectURL(file);
		});
	},
	resizeImage(file: File, size: number): Promise<File> {
		return new Promise((resolve, reject) => {
			// Create a new Image object
			const img: any = new Image();

			// Event handler for when the image is loaded
			img.onload = function () {
				// Create a canvas element
				const canvas = document.createElement("canvas");
				const ctx = canvas.getContext("2d");

				if (!ctx) {
					reject(new Error("Canvas context is not supported."));
					return;
				}

				// Set the canvas size to the desired size
				canvas.width = size;
				canvas.height = size;

				// Calculate the scale factor for resizing
				const scaleFactor = size / Math.max(this.width, this.height);

				// Calculate the new dimensions after stretching
				const newWidth = this.width * scaleFactor;
				const newHeight = this.height * scaleFactor;

				// Calculate the position for centering
				const x = (size - newWidth) / 2;
				const y = (size - newHeight) / 2;

				// Draw the image onto the canvas with resizing and centering
				ctx.drawImage(this, x, y, newWidth, newHeight);

				// Convert the canvas content to a blob
				canvas.toBlob((blob) => {
					if (blob) {
						// Create a new File object from the Blob
						const resizedFile = new File([blob], file.name, {
							type: file.type,
						});
						resolve(resizedFile);
					} else {
						reject(new Error("Failed to create Blob."));
					}
				}, file.type); // Use the original file type for the resulting blob
			};

			// Event handler for when there's an error loading the image
			img.onerror = function () {
				reject(new Error("Failed to load the image."));
			};

			// Set the source of the image to the provided file object
			img.src = URL.createObjectURL(file);
		});
	},
};
