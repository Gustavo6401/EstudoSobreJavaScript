function soma(n1, n2) {
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade) 
{
    if(idade >= 18) 
    {
        return true;
    }
    else 
    {
        return false;
    }  
}

alert(soma(5, 10));
alert(setReplace("Vai Japão Porra", "Japão", "Brasil"));

var entrada = prompt("Qual a sua Idade");
alert(validaIdade(entrada));