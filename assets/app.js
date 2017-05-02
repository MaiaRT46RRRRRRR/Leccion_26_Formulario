var enviar= document.getElementById("enviar");
var pasw1= document.getElementById("pasw1");
var pasw2= document.getElementById("pasw2");

enviar.addEventListener("click", function(){
	if (pasw1.value == pasw2.value){
		alert("Correcto");
	}else{
		alert("Las contraseñas deben de ser iguales");
		pasw2.focus();
	}
});

