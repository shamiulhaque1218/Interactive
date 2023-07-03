//github: https://github.com/programming-hero-web-course2/b7a5-geometry-genius-assignment-shamiulhaque1218

function triangleCalculate (triangle){
    const triangleElement = document.getElementById(triangle);
    const triangleValue = triangleElement.value;
    const triangleValueReady = triangleValue;
    return triangleValueReady;
}
let count = 0



// triangle mouse hover random color

document.getElementById('tri-id').addEventListener('mouseenter',function(){

    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const changecolor = `rgb(${r},${g}, ${b} )`;


    document.getElementById('tri-id').style.backgroundColor= changecolor;
    });


// triangle addEventListener
document.getElementById('tri-btn').addEventListener('click', function(){
     count+= 1;
    const triangleB = triangleCalculate ('tri-b');
    const triangleH = triangleCalculate ('tri-h');

    if(isNaN(triangleB) ){
        alert("be careful give a valid number!!")
        return;
    }
    else if(isNaN(triangleH) ){
        alert("be careful give a valid number!!")
        return;
    }
    else if(triangleH < 0 ){
        alert("be careful give a valid number!!")
        return;
    }
    else if(triangleB < 0 ){
        alert("be careful give a valid number!!")
        return;
    }
    else if(triangleB === "" ){
        alert("be careful give a valid number!!")
        return;
    }
    else if(triangleH === "" ){
        alert("be careful give a valid number!!")
        return;
    }


    const triangleoutput = (0.5*triangleB*triangleH);
    const triangleResult = triangleoutput.toFixed(2);

    const triangleResultnew = 'Triangle'+' '+triangleResult;

    //const triangleElementResult = document.getElementById('tri-result');
   // triangleElementResult.innerText = triangleResultnew;

   const tr = document.createElement("tr");
   tr.innerHTML = `
<td class="pl-1" >${count+"."}</td>
<td class="text-left">${triangleResultnew}</td>
<td class="text-left">cm<sup>2</sup> </td> 
<td class="pl-6"> <button style="background-color: rgb(30 64 175); border-radius: 0.25rem; width: 6rem;color: rgb(255 255 255);" >covert to m<sup>2</sup></button> </td> 
   `;

    const parent = document.querySelector('#all-result');
    parent.appendChild(tr);

})

// Rectangle mouse hover random color

document.getElementById('rec-id').addEventListener('mouseenter',function(){

    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const changecolor = `rgb(${r},${g}, ${b} )`;


    document.getElementById('rec-id').style.backgroundColor= changecolor;
    });


// Rectangle addEventListener
document.getElementById('rec-btn').addEventListener('click', function(){
     count+= 1;
    const rectanglew = triangleCalculate ('rec-w');
    const rectanglel = triangleCalculate ('rec-l');


    if(isNaN(rectanglew) ){
        alert("be careful give a valid number!!")
        return;
    }
    else if(isNaN(rectanglel) ){
        alert("be careful give a valid number!!")
        return;
    }
    else if(rectanglew < 0 ){
        alert("be careful give a valid number!!")
        return;
    }
    else if(rectanglel < 0 ){
        alert("be careful give a valid number!!")
        return;
    }
    else if(rectanglel === "" ){
        alert("be careful give a valid number!!")
        return;
    }
    else if(rectanglew === "" ){
        alert("be careful give a valid number!!")
        return;
    }


    const rectangleoutput = (rectanglew*rectanglel);
    const rectangleResult = rectangleoutput.toFixed(2);

    const rectangleResultnew = 'Rectangle'+' '+rectangleResult;

   const tr = document.createElement("tr");
   tr.innerHTML = `
<td class="pl-1" >${count+"."}</td>
<td class="text-left">${rectangleResultnew}</td>
<td class="text-left">cm<sup>2</sup> </td> 
<td class="pl-6"> <button style="background-color: rgb(30 64 175); border-radius: 0.25rem; width: 6rem;color: rgb(255 255 255);" >covert to m<sup>2</sup></button> </td> 
   `;

    const parent = document.querySelector('#all-result');
    parent.appendChild(tr);

})

// Parallelogram mouse hover random color

document.getElementById('par-id').addEventListener('mouseenter',function(){

    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const changecolor = `rgb(${r},${g}, ${b} )`;


    document.getElementById('par-id').style.backgroundColor= changecolor;
    });


// Parallelogram addEventListener
document.getElementById('par-btn').addEventListener('click', function(){
     count+= 1;
    const parallelogramB = triangleCalculate ('par-b');
    const parallelogramH = triangleCalculate ('par-h');

    const parallelogramoutput = (parallelogramB*parallelogramH);
    const parallelogramResult = parallelogramoutput.toFixed(2);
    const parallelogramResultnew = 'Paralleogram'+' '+parallelogramResult;

   const tr = document.createElement("tr");
   tr.innerHTML = `
<td class="pl-1" >${count+"."}</td>
<td class="text-left">${parallelogramResultnew}</td>
<td class="text-left">cm<sup>2</sup> </td> 
<td class="pl-6"> <button style="background-color: rgb(30 64 175); border-radius: 0.25rem; width: 6rem;color: rgb(255 255 255);" >covert to m<sup>2</sup></button> </td> 
   `;

    const parent = document.querySelector('#all-result');
    parent.appendChild(tr);

})


// Rhombus mouse hover random color

document.getElementById('rho-id').addEventListener('mouseenter',function(){

    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const changecolor = `rgb(${r},${g}, ${b} )`;


    document.getElementById('rho-id').style.backgroundColor= changecolor;
    });


// Rhombus addEventListener
document.getElementById('rho-btn').addEventListener('click', function(){
     count+= 1;
    const rhombusd1 = triangleCalculate ('rho-d1');
    const rhombusd2 = triangleCalculate ('rho-d2');

    const rhombusoutput = (0.5*rhombusd1*rhombusd2);
    const rhombusResult = rhombusoutput.toFixed(2);
    const rhombusResultnew = 'Rhombus'+' '+rhombusResult;

   const tr = document.createElement("tr");
   tr.innerHTML = `
<td class="pl-1" >${count+"."}</td>
<td class="text-left">${rhombusResultnew}</td>
<td class="text-left">cm<sup>2</sup> </td> 
<td class="pl-6"> <button style="background-color: rgb(30 64 175); border-radius: 0.25rem; width: 6rem;color: rgb(255 255 255);" >covert to m<sup>2</sup></button> </td> 
   `;

    const parent = document.querySelector('#all-result');
    parent.appendChild(tr);

})



// Pentagon mouse hover random color

document.getElementById('pen-id').addEventListener('mouseenter',function(){

    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const changecolor = `rgb(${r},${g}, ${b} )`;


    document.getElementById('pen-id').style.backgroundColor= changecolor;
    });

// Pentagon addEventListener
document.getElementById('pen-btn').addEventListener('click', function(){
    count+= 1;
   const pentagonp = triangleCalculate ('pen-p');
   const pentagonb = triangleCalculate ('pen-b');

   const pentagonoutput = (0.5*pentagonp*pentagonb);
   const pentagonResult = pentagonoutput.toFixed(2);
   const pentagonResultnew = 'Pentagon'+' '+pentagonResult;

  const tr = document.createElement("tr");
  tr.innerHTML = `
<td class="pl-1" >${count+"."}</td>
<td class="text-left">${pentagonResultnew}</td>
<td class="text-left">cm<sup>2</sup> </td> 
<td class="pl-6"> <button style="background-color: rgb(30 64 175); border-radius: 0.25rem; width: 6rem;color: rgb(255 255 255);" >covert to m<sup>2</sup></button> </td> 
  `;

   const parent = document.querySelector('#all-result');
   parent.appendChild(tr);

})


// Ellipse mouse hover random color

document.getElementById('ell-id').addEventListener('mouseenter',function(){

    const r = Math.floor(Math.random()*255);
    const g = Math.floor(Math.random()*255);
    const b = Math.floor(Math.random()*255);
    const changecolor = `rgb(${r},${g}, ${b} )`;


    document.getElementById('ell-id').style.backgroundColor= changecolor;
    });

// Ellipse addEventListener
document.getElementById('ell-btn').addEventListener('click', function(){
    count+= 1;
   const ellipsea = triangleCalculate ('ell-a');
   const ellipseb = triangleCalculate ('ell-b');

   const ellipseoutput = (3.1416*ellipsea*ellipseb);
   const ellipseResult = ellipseoutput.toFixed(2);
   const ellipseResultnew = 'Ellipse'+' '+ellipseResult;

  const tr = document.createElement("tr");
  tr.innerHTML = `
<td class="pl-1" >${count+"."}</td>
<td class="text-left">${ellipseResultnew}</td>
<td class="text-left">cm<sup>2</sup> </td> 
<td class="pl-6"> <button style="background-color: rgb(30 64 175); border-radius: 0.25rem; width: 6rem;color: rgb(255 255 255);" >covert to m<sup>2</sup></button> </td> 
  `;

   const parent = document.querySelector('#all-result');
   parent.appendChild(tr);

})