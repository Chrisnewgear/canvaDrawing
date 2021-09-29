var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick(){
  var lineas = parseInt(texto.value);
  var yi, xf;
  var espacio = ancho / lineas;

  for(l = 0; l < lineas; l++){
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea("green", 0, yi, xf, 300);
    console.log(l);
  }

  for(i = 0; i < lineas; i++){
    yf = espacio * i;
    xi = espacio * (i + 1);
    dibujarLinea("black", xi, 0, 300, yf);
    console.log(i);
  }

}
