// Clear all input fields
function clearInputs() {
    document.getElementById('sizeA').value = '';
    document.getElementById('costA').value = '';
    document.getElementById('sizeB').value = '';
    document.getElementById('costB').value = '';
    document.getElementById('result').innerHTML = ''; // Clear result display
}

// Calculate and compare the cost-effectiveness
function comparePrices() {
    const sizeA = parseFloat(document.getElementById('sizeA').value);
    const costA = parseFloat(document.getElementById('costA').value);
    const sizeB = parseFloat(document.getElementById('sizeB').value);
    const costB = parseFloat(document.getElementById('costB').value);

    const resultElement = document.getElementById('result');
    resultElement.classList.remove('error'); // ลบคลาส error ถ้ามี

    if (isNaN(sizeA) || isNaN(costA) || isNaN(sizeB) || isNaN(costB) || sizeA <= 0 || sizeB <= 0) {
        resultElement.innerHTML = 'โปรดใส่ตัวเลขที่มากกว่า 0 ใน size และ cost.';
        resultElement.classList.add('error'); // เพิ่มคลาส error สำหรับข้อความผิดพลาด
        return;
    }

    const pricePerUnitA = costA / sizeA;
    const pricePerUnitB = costB / sizeB;
    let resultText = '';

    if (pricePerUnitA < pricePerUnitB) {
        const percentage = ((pricePerUnitB - pricePerUnitA) / pricePerUnitB) * 100;
        resultText = `A ถูกกว่า by ${percentage.toFixed(2)}% เมื่อเทียบกับ B.`;
    } else if (pricePerUnitA > pricePerUnitB) {
        const percentage = ((pricePerUnitA - pricePerUnitB) / pricePerUnitA) * 100;
        resultText = `B ถูกกว่า ${percentage.toFixed(2)}% เมื่อเทียบกับ A.`;
    } else {
        resultText = 'ทั้งคู่คุ้มค่าเท่ากัน.';
    }

    resultElement.innerHTML = resultText;
}