function mensaje(){
alert("Benito Santos es una empresa de moda mexicana.");
}

function mostrar(){

let productos = document.getElementById("productos");

if(productos.style.display == "none"){
productos.style.display = "block";
}else{
productos.style.display = "none";
}

}
