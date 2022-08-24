/*Configuração de hambuguer X // Preço Orçamento */

var hamburguer = document.querySelector(".hamburguer");
/*FUNÇÃO CRIADA PARA  CALCULO DO ORÇAMENTO */
hamburguer.addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
})
document.querySelector("#qtde").addEventListener("change", atualizarpreco)
document.querySelector("#js").addEventListener("change", atualizarpreco)
document.querySelector("#layout-sim").addEventListener("change", atualizarpreco)
document.querySelector("#layout-nao").addEventListener("change", atualizarpreco)
document.querySelector("#prazo").addEventListener("change", function() {
    const prazo = document.querySelector ("#prazo").value
    document.querySelector ("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarpreco ()
})

function atualizarpreco () {
    const qtde = document.querySelector("#qtde").value
    const temjs = document.querySelector("#js").checked
    const incluiLayout = document.querySelector ("#layout-sim").checked
    const prazo = document.querySelector ("#prazo").value
    

    let preco = qtde *50;
    if (temjs) preco *= 1.1
    if (incluiLayout) preco += 500
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia

    document.querySelector ("#preco").innerHTML = ` R$ ${preco.toFixed(2)}`

}

function cadastro() {
	alert("Em manutenção...");
}

function cadastro2() {
	alert("Informações Enviadas!");
}

function cadastro3() {
	alert("Informações Enviadas para email!");
}

