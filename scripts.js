function pergunta() {
	var resposta = prompt("Quer namorar comigo?");

	if (resposta === "sim") {
		document.getElementById("resposta").innerHTML = "Que bom, agora estamos namorando hehe";
	} else if (resposta === "não") {
		document.getElementById("resposta").innerHTML = "Tudo bem, mas vamos continuar tentando? Clique no botão novamente!";
		document.getElementById("botao").style.position = "absolute";
		document.getElementById("botao").style.left = Math.random() * 90 + "%";
		document.getElementById("botao").style.top = Math.random() * 90 + "%";
		document.getElementById("botao").style.transition = "all 0.5s";
		document.getElementById("botao").addEventListener("mouseenter", function() {
			document.getElementById("botao").style.left = Math.random() * 90 + "%";
			document.getElementById("botao").style.top = Math.random() * 90 + "%";
		});
	} else {
		document.getElementById("resposta").innerHTML = "Desculpe, nao entendi. Pode repetir????????????????";
	}
}
