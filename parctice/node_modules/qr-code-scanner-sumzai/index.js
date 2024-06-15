const qr = require('qr-image');
const jsqr = require('jsqr');

function scanQRCode(imageData) {
  const qrCode = jsqr(imageData.data, imageData.width, imageData.height);
  if (qrCode && qrCode.data) {
    return qrCode.data;
  } else {
    throw new Error('No QR code found in the image.');
  }
}

function generateQRCode(link) {
  return qr.image(link, { type: 'png' });
}

module.exports = { scanQRCode, generateQRCode };
