var btn = document.querySelector(".row label:nth-child(5) button");

var campos = document.querySelectorAll(".row input");

const fnt = ()=>{
    if (campos[0].value != '' && campos[1].value != '')
        btn.style.visibility = 'visible';
    else btn.style.visibility = 'hidden';
}

campos.forEach(i => i.change = fnt);

//btn.style.display = 'none';
btn.style.visibility = 'hidden';
console.log(btn);
console.log(campos);

