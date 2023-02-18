function inputElementId(element){
    const inputElement = document.getElementById(element)
    const inputElementString = inputElement.value
    const inputElementNumber = parseFloat(inputElementString)
    if(inputElementString === "" || inputElementString === "0" || isNaN(inputElementString)){
        alert("plese enter your number")
    }
    else{
        return inputElementNumber
    }        
    inputElement.value = "";
}
function inputElementNumbers(element){
    const inputElement = document.getElementById(element)
    const inputElementString = inputElement.innerText
    const inputElementFile = parseFloat(inputElementString)
    return inputElementFile
}
//Triangle section function
function triangleElementTotle (){
    const triangleHeight = inputElementId("height")
    const triangleLeft = inputElementId("left")
    const triangleTotle = triangleHeight * triangleLeft
    const triangle = triangleTotle * 0.5 
    return (triangle)
}
// Rectangle section function
function rectangleElementTotle (){
    const rectangleHeight = inputElementId("rectangle-height")
    const rectangleLeft = inputElementId("rectangle-left")
    const rectangle = rectangleHeight * rectangleLeft
    return (rectangle)
}
const piCord = "\u03C0";

const piSymbol = document.getElementById("pi")
piSymbol.innerText= piCord;