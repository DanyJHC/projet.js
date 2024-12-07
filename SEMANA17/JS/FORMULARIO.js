//PROGRAMACION DE TRANSICION DE AMBOS FORMULARIOS
const singUpButton=document.getElementById("signUp"); // BOTON FOR REGISTRO
const singInButton=document.getElementById("signIn"); // BOTON FOR INGRESO
const container=document.getElementById("container");
const boost=document.getElementById("boost");
// EVENTO CLIC PARA MOSDTRAR FORM REGISTRO
singUpButton.addEventListener("click",()=>{
    container.classList.add("right-panel-active");
    boost.style.visibility="hidden"; // esconder boton
});
//EVENTO CLICK PARA OCULTAR FORM REGISTRO Y MOSTRAR FORM INGRESO
singInButton.addEventListener("click",()=>{
    container.classList.remove("right-panel-active");
    boost.style.visibility="visible"; //mostrar boton
});
//mostrar contraseña en input
function mostrarSeña()
{
    var tipo=document.getElementById("seña");
    if(tipo.type=="password")
    {
        tipo.type="text"; // ver contraseña
    }else{
        tipo.type="password"; // se oculta
    }
}