document.getElementById("triangle-convert-element").addEventListener("click", function(){
    const convertNumber  = inputElementNumbers("triangle-id-element")
    const convert = convertNumber /100;

    const convertFilt = document.getElementById("triangle-id-element")
    convertFilt.innerText = convert+"m"

    const convertCm = document.getElementById("sub-filt")
    convertCm.style.display = "none"

})
document.getElementById("riangle-convert-element").addEventListener("click", function(){
    const convertNumber  = inputElementNumbers("reangle-id-element")
    const convert = convertNumber /100;

    const convertFilt = document.getElementById("rectangle-id-element")
    convertFilt.innerText = convert+"m"

    const convertCm = document.getElementById("rectangle-fild")
    convertCm.style.display = "none"

})
document.getElementById("parallelgram-convert-elemetn").addEventListener("click", function(){
    const convertNumber  = inputElementNumbers("parallelogram-id-element")
    const convert = convertNumber /100;

    const convertFilt = document.getElementById("parallelogram-id-element")
    convertFilt.innerText = convert+"m"

    const convertCm = document.getElementById("parallelogram-sup")
    convertCm.style.display = "none"

})
document.getElementById("rhombus-convert-element").addEventListener("click", function(){
    const convertNumber  = inputElementNumbers("rhombus-element")
    const convert = convertNumber /100;

    const convertFilt = document.getElementById("rhombus-element")
    convertFilt.innerText = convert+"m"

    const convertCm = document.getElementById("rhombus-sup")
    convertCm.style.display = "none"

})
document.getElementById("pentagon-convert").addEventListener("click", function(){
    const convertNumber  = inputElementNumbers("pentagon-filt")
    const convert = convertNumber /100;

    const convertFilt = document.getElementById("pentagon-filt")
    convertFilt.innerText = convert+"m"

    const convertCm = document.getElementById("pentagon-sup")
    convertCm.style.display = "none"

})
document.getElementById("ellipse-convert").addEventListener("click", function(){
    const convertNumber  = inputElementNumbers("ellipse-filt")
    const convert = (convertNumber /100).toFixed(2);

    const convertFilt = document.getElementById("ellipse-filt")
    convertFilt.innerText = convert+"m"

    const convertCm = document.getElementById("ellipse-sup")
    convertCm.style.display = "none"

})