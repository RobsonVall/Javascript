/**
 * && - AND     || - OR
 * V - F = F    V - F = V
 * F - V = F    F - V = V
 * V - V = V    V - V = V
 * F - F = F    F - F = F
 * 
 */

var  pontos = 72;
var energia = 60;
//Vitória => >=30 && <=40 || >= 70 && <=80  energia >= 40

if ((((pontos >= 30) && (pontos <=40)) && (energia >= 40)) || (((pontos>=70) && (pontos<=80))&&(energia >= 40))) {
    document.write("Ganhou!!!")
}else{
    document.write("Perdeu!!!")
}
