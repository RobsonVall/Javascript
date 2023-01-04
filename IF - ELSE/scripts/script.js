/**
 * if(Teste Lógico) {
 *      //true
 *      Comandos
 * }Else {
 *      //false
 *      Comandos
 * }
 * 
 * OPERADOR     NOME                EXEMPLO
*   >           Maior               10 > 5      true
 *  <           Menor               5 < 10      true
 *  >=          Maior ou igual      10 >= 10    true
 *  <=          Menor ou igual      10 <= 10    true
 *  !=          Diferente           1 != 2      true
 *  ==          Igualdade           1 == 1      true
 */

var valor1, valor2
var texto1, texto2

valor1 = 10
valor2 = 15

texto1 = `Sim! ${valor1} é igual à ${valor2}`
texto2 = `Ops! ${valor1} não é igual à ${valor2}`

if (valor1 == valor2) {
    document.write(texto1)
    window.alert(texto1)
} else {
    document.write(texto2)
    window.alert(texto2)
}

/*
 if (10 < 5) {
    document.write("Sim! 10 é maior quue 5")
}else {
    document.write("Ops! 10 não é menor quue 5")
}*/