const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const submit = document.querySelector(".submit");
const error = document.querySelector(".error");
const ans = document.querySelector(".ans");

function errorHandler (msg){
    error.textContent = msg
    setTimeout(() => {
        error.textContent = ""
    },5000)
}

submit.addEventListener("click", () => {
    if (height.value === "" || weight.value === "") {
        errorHandler("empty box")
    } else if (!Number(height.value) || !Number(weight.value)) {
        errorHandler("this is a string")
    } else {
        let h = Number(height.value)
        let w = Number(weight.value)

        let hInCm2 = (h / 100)*(h/100)
        let bmiValue = w / hInCm2
        ans.textContent = bmiValue.toFixed(3)
        console.log(bmiValue)
    }
})

document.querySelector(".reset").addEventListener("click", ()=>{
    height.value = ""
    weight.value = ""
    ans.textContent = ""
})