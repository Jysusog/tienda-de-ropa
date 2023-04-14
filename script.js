//Declarando variables
let contenedorPadre = document.querySelector(".contenedor-login-registrer");
let formularioLogin = document.querySelector(".formulario-login");
let formularioRegistrer = document.querySelector(".formulario-registrer");
let cajaLogin = document.querySelector(".caja-trasera-login");
let cajaRegistrer = document.querySelector(".caja-trasera-registro");
let cajaFondo = document.querySelector(".caja-trasera");

function anchoPagina(){
    if(window.innerHeight>850){
        cajaFondo.style  
    }
}

function registrarMove(){
    if(window.innerWidth>950){
        formularioRegistrer.style.display="flex";
        contenedorPadre.style.left="390px";
        formularioLogin.style.display="none";
        cajaRegistrer.style.opacity="0";
        cajaLogin.style.opacity="1";
    }else if(window.innerWidth<950 && window.innerWidth>550){
    formularioRegistrer.style.display="flex";
    cajaFondo.style.flexDirection="column";
    formularioLogin.style.display="none";
    cajaRegistrer.style.display="flex";
    cajaLogin.style.display="flex";
    cajaLogin.style.opacity="1";
    cajaRegistrer.style.opacity="0";
    }else{
        
        formularioRegistrer.style.display="flex";
        cajaFondo.style.flexDirection="column-reverse";
        formularioLogin.style.display="none";
        cajaRegistrer.style.display="flex";
        cajaLogin.style.display="flex";
        cajaLogin.style.opacity="1";
        cajaRegistrer.style.opacity="0";

    }
};
function loginMove(){
    if(window.innerWidth>950){
        formularioRegistrer.style.display="none";
        contenedorPadre.style.left="10px";
        formularioLogin.style.display="flex";
        cajaRegistrer.style.opacity="1";
        cajaLogin.style.opacity="0";
    }else if(window.innerWidth<950 && window.innerWidth>550){
        formularioRegistrer.style.display="none";
        cajaFondo.style.flexDirection="column-reverse";
        formularioLogin.style.display="flex";
        cajaRegistrer.style.display="flex";
        cajaLogin.style.display="flex";
        cajaLogin.style.opacity="0";
        cajaRegistrer.style.opacity="1";
    }else{
        formularioRegistrer.style.display="none";
        cajaFondo.style.flexDirection="column";
        formularioLogin.style.display="flex";
        cajaRegistrer.style.display="flex";
        cajaLogin.style.display="flex";
        cajaLogin.style.opacity="0";
        cajaRegistrer.style.opacity="1";
    }
    
};
const btnRegistrar = document.querySelector("#btn-registrarse");
const btnLogin = document.querySelector("#btn-iniciar-sesion");

btnRegistrar.addEventListener("click",registrarMove);
btnLogin.addEventListener("click",loginMove);