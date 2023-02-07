// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu
const pEl = document.getElementById("text");
// Đặt màu văn bản thành #777
    pEl.style.color = "#777";
// Đặt kích thước phông chữ thành 2rem
    pEl.style.fontSize = "2rem";
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.
    pEl.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.";
