

const btn = document.getElementById("btn");
const inputEl = document.querySelectorAll("input");


function check () {
    for (let i = 0; i < inputEl.length; i++) {
        if (inputEl[i].name === "1" || inputEl[i].name === "2" || inputEl[i].name === "3") {
            let number = Math.floor(Math.random() * i);
            inputEl[number].checked = true;
        }
    }
}

btn.addEventListener("click" , function() {
    check();
})