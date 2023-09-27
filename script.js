const inputText = document.getElementById('inputText');
const generateBtn = document.getElementById('generateBtn');
const qrcodeDiv = document.getElementById('qrcode');
const downloadLink = document.getElementById('downloadLink');

generateBtn.addEventListener('click', generateQRCode);

function generateQRCode() {
    const inputValue = inputText.value;
    if (inputValue.trim() === '') {
        return;
    }

    qrcodeDiv.innerHTML = '';

    const qrcode = new QRCode(qrcodeDiv, {
        text: inputValue,
        width: 256,
        height: 256,
    });

    downloadLink.href = qrcodeDiv.firstChild.toDataURL('image/png');
    downloadLink.style.display = 'block';
}