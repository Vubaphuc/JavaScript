

const inputEl = document.querySelector("input");
const resultEl = document.querySelector("span");
// gõ Enter
inputEl.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
        let term = inputEl.value;
        if (term.trim() == "") {
            alert("Nội dung không được để trống");
            return;
        }
        resultEl.innerText = term;
        inputEl.value = "";
    }
})