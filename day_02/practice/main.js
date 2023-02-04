// Khai báo array rỗng
let arr = [];

// Khai báo array
let number = [];

// Gán giá trị cho các phần tử của array thông qua chỉ số
number[0] = 1;
number[1] = "Bùi Hiên";
number[2] = true;

// Khai báo và khởi tạo giá trị cho array
let myArr = [1, 2, 3, 4, true, false, "Nguyễn Văn A"];


let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]) // 1
console.log(numbers[1]) // 2

console.log(numbers[4]) // 5
console.log(numbers[numbers.length - 1]) // 5

numbers[0] = 10;
numbers[1] = 20;

console.log(numbers) // [10, 20, 3, 4, 5]


// Primitives
// const number = 10;
// const bool = false;
// const str = 'Hello!';
// const missingObject = null;
// const nothing = undefined;

let arr1 = [1,2,3];
let arr2 = [1,2,3];

console.log(arr1 == arr2); // 2 == là so sánh giá trị
console.log(arr1 === arr2); // 3 dấu === là so sánh cả giá trị và kiểu dữ liệu



// Objects

// Object thuần túy
// const user = {
    // name: 'Bùi Hiên'
//   };
//   
//   Array
//   const array = [1, 5, 6];
//   
//   Function
//   function sum(a, b) {
    //   return a + b
//   }
//   


// Bài 1: Viết function tìm số lớn nhất trong mảng

function timSoLonNhat(Array){
    let max = Array[0];
    for (let i = 0; i < Array.length; i++) {
        if (max < Array[i]) {
            max = Array[i];
        }
    }
    return max;
}
let arr3 = [4,6,7,9,1,3];
console.log(timSoLonNhat(arr3));

// Bài 2: Viết function tìm số nhỏ nhất trong mảng

function timSoNhoNhat(Array){
    let min = Array[0];
    for (let i = 0; i < Array.length; i++) {
        if (min > Array[i]) {
            min = Array[i];
        }
    }
    return min;
}

console.log(timSoNhoNhat(arr3));
// Bài 3: Viết function cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]
function newArray(Array) {
    let newArr = [];
    for (let i = 0; i < Array.length; i++){
        newArr[i] = Array[i]%2;
    }
    return newArr;
}

let arr4 = [4,2,5,6,2,7];
console.log(newArray(arr4));


// Bài 4: Viết function truyền vào 1 chuỗi, hãy sao chép đó chuỗi lên 10 lần (Sử dụng array để làm)
// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘aaaaaaaaaa’

function saoChepChuoi(str){
    let newArr1 = [];
    for (let i = 0; i < 10; i++){
        newArr1[i] = str;
    }
    return newArr1;
}

console.log(saoChepChuoi("a"));

// Bài 5: Viết function truyền vào 1 chuỗi, hãy sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang (Sử dụng array để làm)
// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’

function saoChepChuoi1(str){
    let newArr2 = [];
    for (let i = 0; i < 10; i++){
        if (i == 10){
            newArr2[i] = str;
        } else {
            newArr2[i] = str + "-";
        }
    }
    return newArr2;
}

console.log(saoChepChuoi1("a"));


// Bài 1: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không? 
// checkElementExist([1,2,3,4,5], 5) => true
// checkElementExist([1,2,3,4,5], 6) => false

function kiemTra(Array,a) {
    for (let i = 0; i < Array.length; i++){
        if (Array[i] == a) {
            return true;
        }
    }
    return false;
}

let arr5 = [1,2,3,4,5];
console.log(kiemTra(arr5,5));
console.log(kiemTra(arr5,6));
// Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào
// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []

function getElementGreater(Array,a) {
    let newArr3 = [];
    let j = 0;
    for (let i = 0; i < Array.length; i++){
        if (a < Array[i]){
            newArr3[j++] = Array[i];
        }
    }
    return newArr3;
}

let arr6 = [1,2,3,4,5];

console.log(getElementGreater(arr6,3));


// Bài 3: Viết function để tạo mã màu HEX ngẫu nhiên.
// 
// randomHexCode() => #728a98
// randomHexCode() => #a72938
// Bài 4: Viết function để tạo mã màu RGB ngẫu nhiên.
// 
// randomRgbCode() => rgb(213,43,133)
// randomRgbCode() => rgb(12,32,122)

let numbers1 = [1, 4, 11, 6, 2, 4, 7, 0];
console.log(Math.max(...numbers)) // 11


// map()

function modulo2(Array) {
    return Array.map((e) => e%2);
}

console.log(modulo2(numbers1));

//

// thực hành ojeck

// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3

let {name, price, brand, count} = products;

console.log(products)

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count

const getTotalPrice = arr => {
    return arr.reduce((total,p) => {
        return total + (p.count * p.price)
    }, 0);
}
// nếu chỉ trả về 1 kết quả duy nhất thì có thể viết

const getTotalPrice1 = arr => {
    return arr.reduce((total,p) => total + (p.count * p.price), 0);
}

console.log(getTotalPrice(products));
console.log(getTotalPrice1(products));

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
const getProductByBrand = (arr, brand) => {
    return arr.filter(p => p.brand === brand);
}

console.log(getProductByBrand(products,"Apple"));
// 4. Tìm các sản phẩm có giá > 20000000

const getProductByPrice = arr => {
    return arr.filter((p) => p.price > 20000000)
}

console.log(getProductByPrice(products));

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng

// 8. Sắp xếp giỏ hàng theo price tăng dần

// 9. Sắp xếp giỏ hàng theo count giảm dần

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
