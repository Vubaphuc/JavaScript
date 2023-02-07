  
// Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
// Sử dụng javascript để thực hiện những công việc sau
// 
//   1.  Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách

        const viTri = document.getElementById("list");
        viTri.insertAdjacentHTML('beforeend','<li>Item 8</li>');
        viTri.insertAdjacentHTML('beforeend','<li>Item 9</li>');
        viTri.insertAdjacentHTML('beforeend','<li>Item 10</li>');
        
        
        
//   2.  Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)

        const item1 = document.querySelector("ul li:nth-child(1)");
        item1.style.color = "red";

//   3.  Sửa background cho thẻ <li> 3 thành màu xanh (background-color)

        const item3 = document.querySelector("ul li:nth-child(3)");
        item3.style.backgroundColor = "blue";

//   4.  Remove thẻ <li> 4

        const item4 = document.querySelector("ul li:nth-child(4)");
        viTri.removeChild(item4);

//   5.  Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
        
        item3.insertAdjacentHTML('afterend','<li>Xin chào các bạn</li>');