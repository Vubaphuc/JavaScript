// Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
    
const listColor = () => {
    let list = document.getElementsByTagName("li");
    for (i = 0; i < 3; i++) {
        list[i].style.color = "blue";
    }
}

listColor();
 

// hoặc cách 2

const listLi = document.querySelectorAll("li");

listLi.forEach (ele => {
    ele.style.color = "blue";
})

