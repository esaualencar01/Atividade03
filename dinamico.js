
/*

var name = prompt('Digite seu nome completo: ');

function exibirNome(button){

alert('O nome completo é: '+name);
}
*/
//função de exibir o nome (questão 01)

function exibirNome(button){
var inserir = document.getElementById('inserir').value;
alert('O nome completo é: '+inserir);
}
//--------------------------------------------------------
// exibir quantidade de letras ao clicar no botão (questão 02)
function exibirQntLetras(button){
var qntLetras = document.getElementById('qntLetras');
var espacos = (qntLetras.value.split(" ").length -1);
var letras = qntLetras.value.length;
var total = parseFloat(letras-espacos);

alert('A quantidade de letras inseridas é: '+total);
}
//--------------------------------------------------------
// trocar imagens com if (questão 03)

var lampada = document.getElementById('lamp');
 lampada.onclick = function(){
	if (lampada.src.match("on")) {
		lampada.src="imagens/desligado.jpg";
	}else{
		lampada.src="imagens/on.jpg";
	}
}
//===============================================================================
//função de somar elementos caso sejam números (questão 04)
function somar(){
	var num01 = document.getElementById('num01').value;
	var num02 = document.getElementById('num02').value;
	var calc = document.getElementById('calc').value;

	

	if(num01 == '' || num01 == null){
		alert("Digite um valor no primeiro campo!");
		return false;

	}if(num02 =='' || num02 == null){
		alert('Digite um valor no segundo campo!');
		return false;
	}

	var resultado_soma = null;
	num01 = parseFloat(num01);
	num02 = parseFloat(num02);
	
	switch(calc){
		case "1":
		resultado_soma = num01 + num02;
		break;

		default:
		alert('A operação é invalida!');
		return false;

	}
	document.getElementById('resultado_soma').value =resultado_soma;

}

//=====================================================================

//função de inserir data de nascimento e retornar idade (questão 05)

document.getElementById("data").addEventListener('change', function(){
	var data = new Date(this.value);
	if(essaData(this.value) && data.getFullYear() > 1900)
		document.getElementById("idade").value = calcularIdade(this.value);
});

function calcularIdade(calcString){
	var calc = new Date(calcString);
	var dataAtual = new Date();
	var anoAtual = dataAtual.getFullYear();
	var aniversarioAtual = new Date(anoAtual, calc.getMonth(),calc.getDate());
	var ano = anoAtual - calc.getFullYear();
	if(aniversarioAtual > dataAtual){
		ano--;
	}
	return ano;
}
function calcular(data){
	var data = document.form.nascimento.value;
	alert(data);
	var partes = data.split("/");
	var junta = partes[2]+"-"+partes[1]+"-"+partes[0];
	document.form.idade.value = (calcularIdade(junta));
}

var essaData = function(input){
	var status = false;
	if(!input || input.length <= 0) {
		status = false;
	}else{
		var result = new Date(input);
		if(result == 'Data invalida'){
			status = false;
		} else{
			status = true;
		}
	}
	return status;
}

//======================================================

//Gerar número aleatório no alert e no input desabilitado (questão 06)


var num= Math.floor(Math.random('num')*10);
alert('Número gerado: '+num);
document.getElementById('num').value = num;

//==========================================================
//Inserir pontos e traços ao digitar cpf (questão 07)
//letra(a)

function offCPF(object01,mascara01){
	obj01 = object01;
	mask01 = mascara01;
	setTimeout('MaskEx()',10000);
}

function MaskEx(){
	obj01.value = mask01(obj01.value);
}
function InCPF(cpf00){
	cpf00 = cpf00.replace(/\D/g,"");
	cpf00 = cpf00.replace(/[.,]/g,"");
	return cpf00;
}


//==========================================
// Letra(b)
function fMasc(objeto,mascara){
	object = objeto;
	mask = mascara;
	setTimeout('fMascEx()',1);
}
function fMascEx(){
	object.value = mask(object.value);
}

function nCPF(cpf){
	cpf = cpf.replace(/\D/g,"");
	cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
	cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
	cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
	return cpf; 
}



//==========================================================
