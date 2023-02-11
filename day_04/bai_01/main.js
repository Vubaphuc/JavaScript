

// Thêm 1 nút “add” + 1 ô input để nhập text. Mỗi khi bấm nút thêm 1 thẻ <li> có nội dung là nội dung trong ô input vào cuối danh sách
const listEL = document.getElementById("list")

const inputEL = document.createElement("input");
inputEL.type = "text";
inputEL.placeholder = "Enter text ...";
listEL.insertAdjacentElement("beforebegin", inputEL);


const btnAdd = document.createElement("button");
btnAdd.innerText = "Add";
inputEL.insertAdjacentElement("afterend", btnAdd);

const addElement = () => {
    const value = inputEL.value;
    if (value.trim() === "") {
        alert("Nội dung không được để trống");
        return;
    }
    listEL.insertAdjacentHTML("beforeend",`<li>${value}</li>`);
    inputEL.value = "";
}
// add bằng nút add
// btnAdd.addEventListener("click",addElement);
// hoặc
btnAdd.onclick = addElement;
// add bằng phím Enter

inputEL.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addElement();
    }
})



// Thêm 1 nút “remove”. Chức năng để xóa thẻ <li> cuối cùng của danh sách

const btnRemove = document.createElement("button");
btnRemove.innerText = "Remove";
document.body.appendChild(btnRemove);

btnRemove.addEventListener("click", function () {
    let last = document.querySelector('#list li:last-child');
    console.log(last);
    if (last) {
        listEL.removeChild(last);
    }
    return;
});          

// Thêm 1 nút “Hide” trên đầu của danh sách <ul>.

const btnHide = document.createElement("button");
btnHide.innerText = "hide";
listEL.insertAdjacentElement("beforebegin",btnHide);



btnHide.addEventListener("click", function () {
    listEL.classList.toggle("hide");
    if (listEL.classList.contains("hide")) {
        btnHide.innerText = "show";
    } else {
        btnHide.innerText = "HIde";
    }
})

// const hideAdd = document.createElement("button");
// hideAdd.innerText = "Hide";
// listEL.insertAdjacentElement("afterbegin",hideAdd);
// Khi bấm vào “Hide” thì <ul> sẽ ẩn. Đồng thời label của nút “Hide” => “Show”
// Và ngược lại Khi bấm vào “Show” thì <ul> sẽ hiện. Đồng thời label của nút “Show” => “Hide”