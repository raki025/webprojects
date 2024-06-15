# QR Code Scanner and Generator

This npm package allows you to easily scan QR codes and generate QR codes from links using Node.js. It uses the `qr-image` and `jsqr` libraries for QR code generation and scanning.

## Installation

You can install this package via npm:

```bash
npm install qr-code-scanner-sumzai
```

## Usage

Here's how you can use this package in your Node.js application:

```javascript
const { scanQRCode, generateQRCode } = require('qr-code-scanner-sumzai');

// Generate a QR Code from a link
const link = 'https://www.example.com';
const qrCode = generateQRCode(link);

console.log(`Generated QR Code for ${link}`);
console.log(qrCode);

// Scan a QR Code image and extract the link
const imageData = qrCode.bitmap;
try {
  const scannedLink = scanQRCode(imageData);
  console.log(`Scanned QR Code Link: ${scannedLink}`);
} catch (error) {
  console.error(error.message);
}
```

## API

### `generateQRCode(link: string): Buffer`

Generate a QR code image from a given link and return it as a `Buffer`.

- `link` (string): The link or text you want to encode in the QR code.

### `scanQRCode(imageData: ImageData): string`

Scan a QR code from the provided `ImageData` and return the decoded link as a string.

- `imageData` (ImageData): The QR code image data obtained from `generateQRCode`.

## License

This package is released under the MIT License. You can find more details in the [LICENSE](LICENSE) file.

## Contributing

If you have suggestions or encounter issues, feel free to open an issue or submit a pull request on our [GitHub repository](https://github.com/Mohammad-Shoeb-Faizan/qr-code-scanner-sumzai).

## Author

This package was created by [Mohammad Shoeb Faizan](https://github.com/Mohammad-Shoeb-Faizan).

## Acknowledgments

- Special thanks to the creators of the `qr-image` and `jsqr` libraries, which made this package possible.