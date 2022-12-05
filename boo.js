var alerta = document.getElementById("mostrar");
var des = document.getElementById("descarga");
var url = document.getElementById("ir");
//var ventana = prompt("escribe tu nombre");
//texto.innerHTML=nombre;
swal({
	title:"INFORMACION",
	text:"Esta app esta en dessaroollo ",
	buttons:false,

})

des.onclick = function(){
	location.href="https://play.google.com/store/apps/details?id=dev.smsoft.tmlitevpn"

}

alerta.onclick = function(){
	swal({
		
		title:"CONTINUAR",
		icon:"success",
		buttons: {
			confirm:"Confirm",
		}
	}).then((valor)=>{

		if (valor){
			location.href=url.value;
		}
	})
	
}







