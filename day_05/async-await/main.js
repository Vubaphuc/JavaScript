let money = 31;

let buyIphone = () => {
    return new Promise(function (resolve,reject) {
        if (money > 30) {
            resolve("Mua Iphone thôi");
        } else {
            reject("kiếm thêm tiền thôi");
        }
    })
}

let buyAirpod = () => {
    return new Promise(function (resolve, reject) {
        if (money - 30 - 4 >= 0) {
            resolve("Mua thêm airpod")
        } else {
            reject("Không đủ tiền mua airpod")
              
        }
    })

} 


const buy = async () => {
    try {
        let res = await buyIphone();
        console.log(res);

        let res1 = await buyAirpod();
        console.log(res1);
    } catch (error) {
        console.log(error);
    }

    return "Về nhà thôi"
}

// cách lấy giá trị return về của hàm async
buy().then(value => console.log(value));