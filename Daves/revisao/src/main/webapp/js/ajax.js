var campos = document.querySelectorAll(".ajax input");

var btns = document.querySelectorAll(".ajax button");

console.log(campos);
console.log(btns);

const callAjax =(e)=>{
    fetch(`http://localhost:8080/segundoAjax?cpValor1=${campos[0].value}&cpValor2=${campos[1].value}&btn=${e.target.value}`,
    {
        method:"GET",
      
    }).then(async resp =>{
        //console.log(resp);
        var r = await resp.text();
        //console.log(r);
        var out = document.querySelector(".ajax h2");
        out.innerHTML = `O resultado é ${r}`;
        out.style.display = 'block';
        campos.forEach(c => c.value = '0');
    })
}

btns.forEach(b => b.onclick = callAjax);