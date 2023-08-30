const coeffx2 = document.querySelector("#coeffx2")
const coeffx = document.querySelector("#coeffx")
const constTerm = document.querySelector("#const-term")
const oneroot  = document.querySelector("#root-1")
const otherroot  = document.querySelector("#root-2")
const calcBtn = document.querySelector("#calc-btn")
const resultField = document.querySelector("#result-field")

calcBtn.addEventListener("click" , ()=>{
    const a = coeffx2.value
    const b = coeffx.value
    const c = constTerm.value
    const Discrim = (b*b) - 4*a*c
    const root1 = ((-b + Math.sqrt(Discrim))/(2*a)).toFixed(3)
    const root2 = ((-b - Math.sqrt(Discrim))/(2*a)).toFixed(3)

    if(!a || !b || !c) {
        alert("Please Enter All Values")

    }else if (Discrim < 0 ){
        // alert("Roots of this Quadratic Equation is Imaginary")
        resultField.innerHTML = `<h2 class = "imag-root">Roots of this Equation is Imaginary</h2>`
    } else if (Discrim >= 0){
        resultField.innerHTML = `<h2>The Roots of this equation is: <span>${root1}</span> and <span>${root2}</span></h2>`
        oneroot.textContent = root1
        otherroot.textContent = root2
    }
})