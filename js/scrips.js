//funcion adicional que aplica estilo a la opcion seleccionada en el menu
function seleccionar(link){
    var opciones = document.querySelector('#links a');
    opciones[0].className="";
    opciones[1].className="";
    opciones[2].className="";
    opciones[3].className="";
    opciones[4].className="";
    link.className="seleccionado";
//hacemos desaparecer el menu una vez se selecciona algo en modo rresponsive
    var x= document.getElementById("nav");
    x.className ="";
}

// FUNCION QUE MUESTRA EL RMENU RESPONSIVE
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className===""){
        x.className = "responsive";
    } else {
        x.className = "";
    }
} 

// detecto el scrolling para aplicar la animacion de la barra de habilidades 
window.onscroll = function(){
    efectoHabilidades()
};

// funcion que aplica la animacion de la barra de habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getboundingclientrect().top;
    if (distancia_skills>=300) {
        document.getElementById("html").classList.add("barra-progreso1"); 
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}