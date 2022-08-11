const calcular = document.getElementById('calcular');
function imc(){
    const altura = document.getElementById('altura').value; /*consultar valores*/
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(altura !=='' && peso !==''){
     const valorIMC = (peso / (altura * altura)).toFixed(1);

let classificacao ='';
if (valorIMC <18.5){ /*permite ao programa avaliar uma expressão como sendo verdadeira ou falsa e, de acordo com o resultado dessa verificação, executar uma ou outra rotina.*/
    classificacao = 'abaixo do peso';
} else if (valorIMC <25){
    classificacao = 'peso ideal';
} else if (valorIMC <30){
    classificacao = 'sobrepeso';
} else if (valorIMC <40){  /*A condicional if é uma estrutura condicional que executa a afirmação*/
    classificacao = 'Obesidade';
} else{
    classificacao = 'Obesidade Grave, Cuidado!!'; /*avisos*/
}  

resultado.textContent = `Seu IMC é ${valorIMC} e sua classificação é: ${classificacao}.`; /*valor e classificacao*/

    }
    else{
        resultado.textContent = `Preencha todos os campos!!`; /*resultados*/
    }
}
calcular.addEventListener('click', imc)/*calucalr*/