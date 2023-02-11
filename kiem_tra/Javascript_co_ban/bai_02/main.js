

users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
];


// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true

const getAge = users.filter((user) => {
    return user.age > 25 && user.isStatus === true;
});

console.log({getAge});

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần

users.sort(function(a, b) {
    return a.age - b.age;
})

console.log({users});