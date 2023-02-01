// Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
// Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120
// bài làm
function factorial(a) {
    let mul = a;
    for (let i = 1; i < a; i++){
        mul *= i;
    }
    return mul;
}
let ketQua = factorial(5);
console.log(ketQua);


// Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseString(‘hello’) => olleh

function reverseString(str) {
    let newString = "";
    for (var i = str.length - 1; i >=0; i--) {
        newString += str[i];
    }
    return newString;
}
let ketQua2 = reverseString("hello");
console.log(ketQua2);

// Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
// Ví dụ: translate(‘VN’) => “Xin chào”
// translate(‘EN’) => “Hello”
// Gợi ý : Sử dụng switch - case . Học viên tự nghĩ ra 1 vài mã quốc gia và câu chào tương ứng với quốc gia đó

function translate(str) {
    switch (str) {
        case "VN": {
            console.log("Xin chào");
            break;
        }
        case "EN": {
            console.log("Hello");
            break;
        }
        case "SK": {
            console.log("여보세요");
            break;
        }
        default: {
            console.log("Không có nước nào phù hợp");
            break;
        }
    }
}

console.log(translate("SK"));

// Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
// Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…”

function repeatString(str) {
    return str.slice(0,10) + "...";
}

console.log(repeatString("xinchaocacbandenvoiTechmaster"));