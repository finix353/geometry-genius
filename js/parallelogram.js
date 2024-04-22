function calculateParaArea(){

    // get input of base
    const baseInput=document.getElementById('para-base');
    const baseText=baseInput.value;
    const base= parseFloat(baseText);
    console.log(base);

    // get input of height
    const heightInput=document.getElementById('para-height');
    const heightText=heightInput.value;
    const height= parseFloat(heightText);
    console.log(height);

    // calculate the area
    const area= base * height;
    console.log(area);

    // display result
    const displaySpan=document.getElementById('para-result');
    displaySpan.innerText= area;

}