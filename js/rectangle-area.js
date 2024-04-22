function rectangleArea(){
    // get the length of the rectangle
    const lengthInput= document.getElementById('rectangle-length');
    const lengthText= lengthInput.value;
    const length= parseFloat(lengthText);
    console.log(length);


    // get the width of the rectangle
    const widthInput= document.getElementById('rectangle-width');
    const widthText= widthInput.value;
    const width= parseFloat(widthText);
    console.log(width);

    // get the calculated area
    const area= length * width;
    console.log("area of the rectangle is:", area);

    // display the area
    const displayArea= document.getElementById('rectangle-area');
    displayArea.innerText=area;
}