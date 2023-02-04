const heading = document.getElementById("heading");
console.log(heading);

const headingSelector = document.querySelector("#heading");

const para2 = document.querySelector(".para-2");
console.log(para2);


const paras = document.querySelectorAll("p");
console.log(paras);


const item3 = document.querySelector("ul li:nth-child(3)");
console.log(item3);

// thay đổi thuộc tính
heading.style.color = "red";
heading.style.backgroundColor = "black";


paras.forEach(ele => {
    ele.style.color = "blue";
})
// chuyển NodeLisst sang Aray mới dùng các thẻ liên quan tới Array
Array.from(paras).map(ele =>{
    ele.style.fontSize = "20px";
})

// lấy nội dung của ID = heading
console.log(heading.innerHTML);


const ul = document.querySelector("ul");
console.log(ul.innerHTML);
console.log(ul.innerText);
console.log(ul.textContent);

// coi phần thêm vào là thẻ
heading.innerHTML = "<span>Xin chào</span>";

// coi các thẻ là nội dung
heading.innerText = "<span>Xin chào</span>";

// thêm phần tử

const btn = document.createElement("button");
btn.innerText = "Click Me";
console.log(btn);


// thêm vị trí cuối cùng của thẻ cha
document.body.appendChild(btn);

// thêm vào vị trí đầu của thẻ cha
document.body.prepend(btn);

// thêm vào vị trí trước phần tử nào đấy
document.body.insertBefore(btn,para2);

// thêm vào vị trí dựa vào thẻ trên hoặc dưới thẻ
para2.insertAdjacentElement("beforebegin",btn);
// thêm vào nếu chưa tạo thẻ
para2.insertAdjacentHTML("beforebegin","<button>Click Me</button>")

// xóa
// document.body.removeChild(heading);


// ClassLisst
heading.classList.add("text-red","text-big","text-center");
heading.classList.remove("text-red","text-center");

console.log(heading.classList.contains("text-big"));
console.log(heading.classList.contains("abc"));

setInterval(() => {
    heading.classList.toggle("text-big");
}, 1000) // 1000ms = 1s


// đếm ngược thời gian

const timeEl = document.getElementById("time");
const spanEl = document.querySelector("#time span");
let time = 10;

const interval = setInterval(() => {
    time--;
    // spanEl.innerText = `${time}s`;
    spanEl.innerText = time;

    if (time == 0) {
        clearInterval(interval);
        timeEl.innerText = "kết thúc";
    }
},1000)

