
// const promise = new Promise((resolve, reject) => {});
// console.log(promise);
// 
// const promiseSuccess = new Promise((resolve, reject) => {
    // resolve("thành công");
// });
// console.log(promiseSuccess);
// 
// const promiseFail = new Promise((resolve, reject) => {
    // reject("thất bại");
// });
// console.log(promiseFail);
// 

// hứa : Nếu có trên 30tr thì sẽ mua IPhone 13 pro max

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
  
  
  




buyIphone()
    .then((res) => {
        console.log(res);
        return buyAirpod();
    })
    .then ((res) => {
        console.log(res);
    })
    .catch (err => {
        console.log(err);
    })
    .finally(() => {
        console.log("Về nhà thôi")
    })