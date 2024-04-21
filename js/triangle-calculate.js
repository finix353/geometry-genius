function triangleCalculation(){

    // triangle base value get
    const triangleBase= document.getElementById('triangle-base');
    const triangleBaseText= triangleBase.value;
    const base= parseFloat(triangleBaseText);
    console.log(base);

    // triangle height value get
    const triangleHeight=document.getElementById('triangle-height');
    const triangleHeightText=triangleHeight.value;
    const height= parseFloat(triangleHeightText);
    console.log(height);


    // area calculation
    const area= 0.5 * base * height ;
    console.log('the area of the triangle is:', area);

    //display the result
    const triangleAreaSpan= document.getElementById('triangle-area');
    triangleAreaSpan.innerText=area;
    
}