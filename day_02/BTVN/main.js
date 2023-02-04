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

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
function add(name,price,brand,count) {
    let item = {
        name : name,
        price : price,
        brand : brand,
        count : count
    };
    products.push(item);
}

add("IPhone 12",160000,"Apple",4);

console.log(products);
// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng

function deteteProductByBrand(Array,brand) {
    let keys = Object.keys(Array);
    for (let i = 0; i < keys.length; i++){
        if (Array[keys[i]].brand === brand) {
            delete Array[keys[i]];
        }
    }
}

deteteProductByBrand(products,"Samsung");

console.log(products);


// 8. Sắp xếp giỏ hàng theo price tăng dần

function sortProduct(Array) {
    let keys = Object.keys(Array);
    let temp;
    for (let i = 0; i < keys.length - 1; i++){
        for (let j = i + 1; j < keys.length; j++) {
            if (Array[keys[i]].price > Array[keys[j]].price) {
                temp = Array[keys[j]];
                Array[keys[j]] = Array[keys[i]];
                Array[keys[i]] = temp;
            }      
        }
    }
}

sortProduct(products);

console.log(products);

// 9. Sắp xếp giỏ hàng theo count giảm dần

function sortProduct2(Array) {
    let keys = Object.keys(Array);
    let temp;
    for (let i = 0; i < keys.length - 1; i++){
        for (let j = i + 1; j < keys.length; j++) {
            if (Array[keys[i]].price < Array[keys[j]].price) {
                temp = Array[keys[j]];
                Array[keys[j]] = Array[keys[i]];
                Array[keys[i]] = temp;
            }      
        }
    }
}

sortProduct2(products);

console.log(products);


// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
let ramdom = Math.floor(Math.random() * products.length);
let ramdom1 = Math.floor(Math.random() * products.length);
console.log(products[ramdom]);
console.log(products[ramdom1]);

// hoặc 
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
console.log( products[randomNumber(0, products.length -1)] );
console.log( products[randomNumber(0, products.length -1)] );