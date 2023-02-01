// Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.
// Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”

const repeatString = str => {
    let string = "";
    for (let i = 1; i <= 10; i++){
        string = string + str;
    }
    return string;
}
console.log(repeatString("a"));


// Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString(“a”) => Kết quả trả về là “a-a-a-a-a-a-a-a-a-a”

const repeatString1 = str => {
    let string = "";
    for (let i = 1; i <= 10; i++){
        if (i == 10){
            string = string + str;
        } else {
            string = string + str + "-";
        }
    }
    return string;
}
console.log(repeatString1("a"));


// Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
// Ví dụ: repeatString(‘a’, 5) => Kết quả trả về là ‘a-a-a-a-a’

const repeatString2 = (str,a) => {
    let string = "";
    for (let i = 1; i <= a; i++){
        if (i == a){
            string = string + str;
        } else {
            string = string + str + "-";
        }
    }
    return string;
}
console.log(repeatString2("a",5));


// Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100

const sum = () => {
    let sum = 0;
    for (let i = 0; i <= 100; i++){
        if (i%5 == 0){
            sum += i;
        }
    }
    return sum;
}

console.log(sum());







// Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

// Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

// Note : Kết quả xuôi và ngược là như nhau

// Ví dụ :

// sum(3,8) = 22
// sum(8,3) = 22

const sum1 = (a,b) => {
    let sum = 0;
    for (let i = a + 1; i < b; i++){
        sum += i;
    }
    return sum;
}

console.log(sum1(3,8));
console.log(sum1(8,3));


// Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

// Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

// Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.