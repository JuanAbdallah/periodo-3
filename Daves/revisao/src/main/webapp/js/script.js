var btn =
document.querySelector(".row label:nth-child(5) button");

var campos =
document.querySelectorAll(".row input");

const fnt - () =>{
  if(campos[0]. value != '' && campos[1]. value != '' ){
    btn.style.visibility = 'hidden';
  }else{
    btn.style.visibility = 'show';
  }
}
campos.forEach(i -> i.change = fnt);
btn.style.visibility = 'hidden';




