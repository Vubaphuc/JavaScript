// Bài 1. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

const lengthMax =  (arr) => {
    let max = 0;
    for (let i = 0; i < arr.length; i ++) {
        if (max < arr[i].length) {
            max = arr[i].length;
        }
    }
    return max;
};


const getStringHasMaxLength = arr => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == lengthMax(arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']));
