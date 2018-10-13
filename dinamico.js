
/*

var name = prompt('Digite seu nome completo: ');

function exibirNome(button){

alert('O nome completo é: '+name);
}
*/


function exibirNome(button){
var inserir = document.getElementById('inserir').value;
alert('O nome completo é: '+inserir);
}
//--------------------------------------------------------

function exibirQntLetras(button){
var qntLetras = document.getElementById('qntLetras');
var espacos = (qntLetras.value.split(" ").length -1);
var letras = qntLetras.value.length;
var total = parseFloat(letras-espacos);

alert('A quantidade de letras inseridas é: '+total);
}
//--------------------------------------------------------
/*function trocarImagem(i){
	if(i==2){
	document.getElementById("imagem2").src="imagens/desligado.jpg";
	document.getElementById("imagem2").src="imagens/on_not.jpg";
		
	}else if(i==1){

	document.getElementById("imagem2").src="imagens/on.jpg";
	document.getElementById("imagem2").src="imagens/desligado_not.jpg";
	}
	

}
*/
var atual = voltar;
function trocar(obj){
	document.getElementById('obj').src="imagens/desligado.jpg";

}









if (atual = voltar) {
	document.getElementById('obj').src="imagens/on.jpg";
}else {
document.getElementById('obj').src="imagens/desligado.jpg";

}



function selecionar(objeto){
	
document.getElementById('objeto').src="imagens/desligado.jpg";
	if(document.getElementById('objeto') == "imagens/desligado.jpg" ){
		document.getElementById('objeto') = "imagens/on.jpg";

	}else{
		document.getElementById('objeto')="imagens/on.jpg";
	}
}
var total = 'objeto';
