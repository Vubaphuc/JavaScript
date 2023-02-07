
let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]


// Render số box = số lượng màu ra ngoài màn hình bằng javascript (5 box)

// Box được tạo bởi thẻ div, có class=“box”, background tương ứng với từng mã màu

// Cập nhật số lượng total box trong thẻ <span> có class “points”

// Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1

// Khi click vào nút “more box” thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors), đồng thời số lượng total box cũng tăng lên 5

const boxes = document.querySelector(".boxes");
const count = document.querySelector(".points");
const moreBoxes = document.querySelector("#btn");
// tạo biến để tính số box
let addBoxes = 0;
let deleteBoxes = 0;

const createBoxes = () => {
    for (let i = 0; i < colors.length; i++) {
        // tăng box lên + 1
        addBoxes++;
        // tạo box
        let box = document.createElement("div");
        // gán class
        box.classList.add("box");
        // gắn backgrond
        box.style.backgroundColor = colors[i];
        // xóa box khi click vào
        box.addEventListener("click", function () {
            box.remove();
            // số box được click vào tăng lên + 1
            deleteBoxes++;
            // số box số box để hiển thị
            count.innerText = addBoxes - deleteBoxes;
        });
        // hiển thị số box mới tạo vào cuối
        boxes.insertAdjacentElement("beforeend", box);
        count.innerText = addBoxes - deleteBoxes;
    }
}
// tạo 5 box đầu tiền = số mã màu
createBoxes();
// envent khi click vào btn tạo thêm box = số mã màu
moreBoxes.addEventListener("click",createBoxes);
