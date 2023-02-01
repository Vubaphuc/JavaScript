console.log("hello world");

// alert("xin chào");
// ít sử dụng
// document.write("hello");

// Khai báo biến và không gán giá trị cho biến
let age;
age = 35;

// Khai báo biến và gán giá trị cho biến
let email = "hien@techmaster.vn"


console.log("age : ", age);
console.log("email : ", email);

let binhPhuong; // cách đặt biến theo camelCase
let binh_phuong; // cách đặt biến theo nextCase


let number = 10;
console.log(typeof number); // "number"

let name = "Bùi Hiên";
console.log(typeof name); // "string"

// 2 , 10 , 

let text = "ABCDEFGHJKLMNO";
text.slice(0,4);
console.log(text.slice(0,4)); // cắt chuỗi từ vị trí x đến y

// Template strings – ES6
let name1 = "Bùi Hiên"
let year = 1997

console.log(`Xin chào các bạn, mình tên là ${name1}. Năm nay ${2022 - year} tuổi`);

// or

console.log("Xin chào các bạn, mình tên là " + name1 + ". Năm nay " + (2023 - year) + " tuổi");

// kiểu giữ liệu Boolean

let status = true;
let quit = false;


// function  
// c1 : regular function

function sum(a,b){
    return a + b;
}

// c2 : function expression

let sum1 = function(a = 5,b = 20){ // nếu truyền dữ liêu thiếu sẽ sử dụng dữ liệu gán sẵn để tính hàm trong function
    return a + b;
}

// c3 : arrow function - ES6

let sum2 = (a,b) => {
    return a + b;
}


let sayHello = () => {
    console.log("Xin chào các bạn");

}

let data = sum(2,3);
console.log(data);
console.log(sum(5,6));
console.log(sum1(10,20));


console.log(sum1(5)) // truyền thiếu

// câu lệnh if/ else
let hour = 12;
if (hour < 12){
    console.log("hello");
} else {
    console.log("hi");
}

// câu lệnh switch - case

let money = 10000

switch (money) {
    case 12000: {
        console.log("Cà phê sữa");
        break;
    }
    case 10000: {
        console.log("Cà phê đá");
        break;
    }
    case 8000: {
        console.log("String dâu");
        break;
    }
    case 2000: {
        console.log("Trà đá");
        break;
    }
    default: {
        console.log("Không có đồ uống phù hợp");
        break;
    }
}
for (let a = 1; a <= 10 ; a + 1){
    console.log(`Ngày ${a} thức dậy lúc 5:00`);
}
