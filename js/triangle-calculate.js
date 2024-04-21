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
    
}