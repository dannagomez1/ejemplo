function dibujarlinea(color,xinicial.yinicial,xfinal,yfinal)
{
    lienzo.beginpath();
    lienzo.astrokeStyle = "color";
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.astroke();
    lienzo.closepath();
}


var d = document.getElementById("dibujo2");
var lienzo  = d.getContext("2d");



