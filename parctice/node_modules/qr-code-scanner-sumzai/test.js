const { scanQRCode, generateQRCode } = require('./index');

const link = 'https://www.example.com';
const qrCode = generateQRCode(link);

console.log(`Generated QR Code for ${link}`);
console.log(qrCode);

const imageData = qrCode.bitmap;
try {
  const scannedLink = scanQRCode(imageData);
  console.log(`Scanned QR Code Link: ${scannedLink}`);
} catch (error) {
  console.error(error.message);
}
