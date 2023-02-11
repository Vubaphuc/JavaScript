// Bài 3. Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

let arr = ["one", "two", "three", "one", "one", "three"];

function getCountElement(arr, x){
    let count = 0;
    for(let i = 0;i < arr.length; i++){
        if (arr[i] === x) {
            count ++;
        }
        
    }
    console.log(`${x} :  ${count}`);
}

let arrWithNoDuplicates = arr.reduce(function (acc, ele) {
  if (acc.indexOf(ele) === -1) {
    acc.push(ele)
  }
  return acc;
}, [])


for (let i = 0; i < arrWithNoDuplicates.length; i++) {
    getCountElement(arr, arrWithNoDuplicates[i]);
};
    
