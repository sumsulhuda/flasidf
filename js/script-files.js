document.getElementById("calculate-btn").addEventListener("click", function(){
    const triangleLength = document.getElementById("triangle-lenght");
    triangleLength.innerText = inputElementId("left");
    const triangleLHeight = document.getElementById("triangle-height");
    triangleLHeight.innerText = inputElementId("height")
    
    // triangle Element totle 
    const triangleElenetHeight = inputElementNumbers("triangle-lenght")
    const triangleElenetLength = inputElementNumbers("triangle-height")
    const triangleElementTotle = triangleElenetHeight*triangleElenetLength*0.5;
    // Area Calculation triangle totle add
    const triangle = document.getElementById("triangle-id")
    triangle.innerText = triangleElementTotle;
})

document.getElementById("btn-rectangle").addEventListener("click", function(){
    const rectangleLength = document.getElementById("rectangle-length");
    rectangleLength.innerText = inputElementId("rectangle-left");
    const rectangleLHeight = document.getElementById("rectangle-height-element");
    rectangleLHeight.innerText = inputElementId("rectangle-height")
    
    //  rectangle Element totle 
    const rectangleElenetHeight = inputElementNumbers("rectangle-length")
    const rectangleElenetLength = inputElementNumbers("rectangle-height-element")
    const rectangleElementTotle = rectangleElenetHeight*rectangleElenetLength
    // Area Calculation rectangle totle add
    const rectangle = document.getElementById("rectangle-id")
    rectangle.innerText = rectangleElementTotle;
    const displayBlock = document.getElementById("triangle-block")
    displayBlock.style.display = "flex ";
})
document.getElementById("btn-parallelogram").addEventListener("click", function(){
    const parallelogramLength = 10;
    const parallelogramHeight = 12;
    const parallelogramlengthId = document.getElementById("parallelogram-length")
    parallelogramlengthId.innerText = parallelogramLength
    const parallelogramHeightId = document.getElementById("parallelogram-height")
    parallelogramHeightId.innerText = parallelogramHeight
    //parallelogram totle 
    const parallelogramElementHeight = inputElementNumbers("parallelogram-height")
    const parallelogramElementLength = inputElementNumbers("parallelogram-length")
    const parallelogramTotle = parallelogramElementHeight*parallelogramElementLength;
    //Area Calculation parallelogram totle add
    const parallelogramFilt = document.getElementById("parallelogram-id")
    parallelogramFilt.innerText = parallelogramTotle
    const parallelogBlock = document.getElementById("parallelogram-block")
    parallelogBlock.style.display = "flex ";
})
document.getElementById("btn-rhombus").addEventListener("click", function(){
    const rhombusNumber = 12;
    const rhombusElementId = document.getElementById("rhombus-id")
    rhombusElementId.innerText = rhombusNumber;
    const rhombusId = 10;
    const rhombusElemen = document.getElementById("rhombus-element")
    rhombusElemen.innerText = rhombusId
    // rhombus totle 
    const rhombusTotle = rhombusNumber * rhombusId * 0.5
    // Area Calculation rhombus totle add 
    const rhombus = document.getElementById("rhombus")
    rhombus.innerText = rhombusTotle
    const rhombusBlock = document.getElementById("rhombus-block")
    rhombusBlock.style.display = "flex ";
})
document.getElementById("btn-pentagon").addEventListener("click", function(){
    const pentagonLength = 6;
    const pentagonHeight = 10;
    const pentagonlengthId = document.getElementById("pentagon-length")
    pentagonlengthId.innerText = pentagonLength
    const pentagonHeightId = document.getElementById("pentagon-height")
    pentagonHeightId.innerText = pentagonHeight
    // pentagon totle sap
    const pentagonElementHeight = inputElementNumbers("pentagon-height")
    const pentagonElementLength = inputElementNumbers("pentagon-length")
    const pentagonTotle = pentagonElementHeight*pentagonElementLength;
    // Area Calculation pentagon totle add
    const pentagonFilt = document.getElementById("pentagon-filt")
    pentagonFilt.innerText = pentagonTotle
    const pentagonBlock = document.getElementById("pentagon-block")
    pentagonBlock.style.display = "flex ";
})
document.getElementById("btn-ellipse").addEventListener("click", function(){
    const ellipsesLength = "10";
    const ellipsesHeigth = "4";
    const ellipseHeightId = document.getElementById("ellipse")
    ellipseHeightId.innerText = "3.1416"+","+ellipsesLength+","+ellipsesHeigth
    const ellipseStringLength = parseFloat(ellipsesLength)
    const ellipseStringHeight = parseFloat(ellipsesHeigth)
    // ellipse totle stap
    const totleEllipseId = (ellipseStringLength * ellipseStringHeight * 3.1416).toFixed(2);
    // Area Calculation ellipse totel add 
    const ellipseFilt = document.getElementById("ellipse-filt")
    ellipseFilt.innerText = totleEllipseId
    const ellipseBlock = document.getElementById("ellipse-block")
    ellipseBlock.style.display = "flex ";
})

document.getElementById("blog-id").addEventListener("click",function(){
    window.location.href = 'block.html'
})


