window.onload = function (){

     

document.getElementById("bot_comenzar").addEventListener("click", function (){
    document.getElementById("comp_formulario").style.display ="block";
    document.getElementById("Piedepagina").style.display ="block";
    document.getElementById("bot_comenzar").style.display ="none";
    });   
 
// Con esto muestro la foto selsccionada

const $Sel_foto = document.querySelector("#Sel_foto"),
$mostrar_foto = document.querySelector("#mostrar_foto");
$Sel_foto.addEventListener("change", function() {
const archivos = $Sel_foto.files;
if (!archivos || !archivos.length) {
    $mostrar_foto.src = "";
    return;
  }
const ImagenSeleccionada = archivos[0];
const rutafoto = URL.createObjectURL(ImagenSeleccionada);
$mostrar_foto.src = rutafoto;
});

/* calcular edad y poner restricciones*/

document.getElementById("FecNac").addEventListener("change", ()=> {
    let fechaNacimiento = new Date(document.getElementById("FecNac").value);
    let hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth();
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--
    };
    if (Date.parse(fechaNacimiento) <= Date.parse(hoy) && parseInt(edad)>=18){
        document.getElementById("cartelerror").style.display="none";
        document.getElementById("muestraedad").style.display="block";
        document.getElementById("muestraedad").style.color="green";
        document.getElementById("muestraedad").innerHTML = "edad: "+edad+" años";
        document.getElementById("Enviar").disabled = false;
        document.getElementById("Enviar").style.backgroundColor="#020120"
        document.getElementById("Enviar").style.color="white"
        }else if(Date.parse(fechaNacimiento) <= Date.parse(hoy) && parseInt(edad)<=18){
            document.getElementById("cartelerror").style.display="none";
            document.getElementById("muestraedad").style.display="block";
            document.getElementById("muestraedad").style.color="red";
            document.getElementById("muestraedad").innerHTML = "edad: "+edad+" años - no cumple los requisitos de edad";
            document.getElementById("Enviar").disabled = true;
            document.getElementById("Enviar").style.backgroundColor="darkgrey"
            document.getElementById("Enviar").style.color="black"
    }else{
        document.getElementById("muestraedad").style.display="none";
        document.getElementById("cartelerror").style.display="block";
        document.getElementById("cartelerror").style.color="red";
        document.getElementById("cartelerror").innerHTML = "la fecha ingresada debe ser menor a la actual";
        document.getElementById("Enviar").disabled = true;
        }
    });

    function calcularedad (){
        let calcfechaNacimiento = document.getElementById("FecNac").value
        let calchoy = new Date()
        let edad = calchoy.getFullYear() - calcfechaNacimiento.getFullYear();
        let diferenciaMeses = calchoy.getMonth() - calcfechaNacimiento.getMonth();
        if (diferenciaMeses < 0 || (diferenciaMeses === 0 && calchoy.getDate() < calcfechaNacimiento.getDate())) {
            edad--
        }
        return parseInt(edad)
    }

/*probe pero no salio aun no lo tengo muy claro

let obtengolosradio = document.querySelectorAll('input["type="radio"]')
document.querySelector("#formulario").addEventListener("change", function(){
    obtengolosradio.forEach(numradio =>{
        switch (numradio){
            case numradio.checked.length[0]:
                alert("apretaste Fulltime");
            break;
        }
    })
})*/

//volvemos  a lo viejo que funciona habilitando y deshabilitando
let hijosi = document.querySelector('#hijo_si');
let hijono = document.querySelector('#hijo_no');
document.querySelector('#formulario').addEventListener('change', function(){
    if (hijosi.checked){
            document.getElementById("label_hijos").style.display ="block";
            document.getElementById("input_hijos").style.display ="block";
            /*document.querySelector('#input_hijos').required = true;*/
        }else if(hijono.checked){
            document.getElementById("label_hijos").style.display ="none";
            document.getElementById("input_hijos").style.display ="none";
            /*document.querySelector('#input_hijos').required = false;*/
    }
})

let primsi = document.querySelector('#Prim_si');
let primno = document.querySelector('#Prim_no');
document.querySelector('#formulario').addEventListener('change', function(){
    if (primsi.checked){
            document.getElementById("Primario").style.display ="block";
            document.querySelector('#Prinom').required = true;
            document.querySelector('#PrimFecInicio').required = true;
            document.querySelector('#PrimFecFin').required = true;
            document.getElementById("Sec_si").disabled = false;
            document.getElementById("Sec_no").disabled = false;
            document.getElementById("prim_comp").style.display="none";
            document.getElementById("Enviar").disabled = false;
            document.getElementById("Enviar").style.backgroundColor="#020120"
            document.getElementById("Enviar").style.color="white"
        }else if(primno.checked){
            document.getElementById("Primario").style.display ="none";
            document.getElementById("Secundario").style.display ="none";
            document.querySelector('#Prinom').required = false;
            document.querySelector('#PrimFecInicio').required = false;
            document.querySelector('#PrimFecFin').required = false;
            document.getElementById("Sec_si").disabled = true;
            document.getElementById("Sec_no").disabled = true;
            document.getElementById("Sup_si").disabled = true;
            document.getElementById("Sup_no").disabled = true;
            document.getElementById("Sup_Cursando").disabled = true;
            document.getElementById("prim_comp").style.display="block";
            document.getElementById("prim_comp").style.color="red";
            document.getElementById("prim_comp").innerHTML = "No cumple con los requisitos del secundario completo";
            document.getElementById("Enviar").disabled = true;
            document.getElementById("Enviar").style.backgroundColor="darkgrey"
            document.getElementById("Enviar").style.color="black"
        }
})

let secsi = document.querySelector('#Sec_si');
let secno = document.querySelector('#Sec_no');
document.querySelector('#formulario').addEventListener('change', function(){
    if (secsi.checked){
            document.getElementById("Secundario").style.display ="block";
            document.querySelector('#Secnom').required = true;
            document.querySelector('#Titsec').required = true;
            document.querySelector('#SecFecInicio').required = true;
            document.querySelector('#SecFecFin').required = true;
            document.getElementById("Enviar").disabled = false;
            document.getElementById("Enviar").style.backgroundColor="#020120"
            document.getElementById("Enviar").style.color="white"
            document.getElementById("Sup_si").disabled = false;
            document.getElementById("Sup_no").disabled = false;
            document.getElementById("Sup_Cursando").disabled = false;
            document.getElementById("sec_comp").style.display="none";
        }else if(secno.checked){
            document.getElementById("Secundario").style.display ="none";
            document.getElementById("Superior").style.display ="none";
            document.querySelector('#Secnom').required = false;
            document.querySelector('#Titsec').required = false;
            document.querySelector('#SecFecInicio').required = false;
            document.querySelector('#SecFecFin').required = false;
            document.getElementById("Enviar").disabled = true;
            document.getElementById("Enviar").style.backgroundColor="darkgrey"
            document.getElementById("Enviar").style.color="black"
            document.getElementById("sec_comp").style.display="block";
            document.getElementById("sec_comp").style.color="red";
            document.getElementById("sec_comp").innerHTML = "No cumple con los requisitos del secundario completo";
            document.getElementById("Sup_si").disabled = true;
            document.getElementById("Sup_no").disabled = true;
            document.getElementById("Sup_Cursando").disabled = true;
        }
})

let supsi = document.querySelector('#Sup_si');
let supno = document.querySelector('#Sup_no');
let supcur = document.querySelector('#Sup_Cursando');
document.querySelector('#formulario').addEventListener('change', function(){
    if (supsi.checked){
            document.getElementById("Superior").style.display ="block";
            document.getElementById("Cursado").style.display ="none";
            document.querySelector('#Supnom').required = true;
            document.querySelector('#Titsup').required = true;
            document.querySelector('#SupFecInicio').required = true;
            document.querySelector('#SupFecFin').required = true;
            document.querySelector('#Cursado').required = false;
        }else if(supno.checked){
            document.getElementById("Superior").style.display ="none";
            document.querySelector('#Supnom').required = false;
            document.querySelector('#Titsup').required = false;
            document.querySelector('#SupFecInicio').required = false;
            document.querySelector('#SupFecFin').required = false;
        }else if(supcur.checked){
            document.getElementById("Superior").style.display ="block";
            document.getElementById("Cursado").style.display ="block";
            document.querySelector('#Supnom').required = true;
            document.querySelector('#Titsup').required = true;
            document.querySelector('#SupFecInicio').required = true;
            document.querySelector('#SupFecFin').required = true;
            document.querySelector('#Cursado').required = true;
        }
})

let trabsi = document.querySelector('#ExpLab_si');
let trabno = document.querySelector('#ExpLab_no');
document.querySelector('#formulario').addEventListener('change', function(){
    if (trabsi.checked){
            document.getElementById("trab1").style.display ="block";
            document.getElementById("trab2").style.display ="block";
            document.querySelector('#Trab1cargo').required = true;
            document.querySelector('#Trab1Empresa').required = true;
            document.querySelector('#Trab1DirEmpresa').required = true;
            document.querySelector('#Trab1Tel').required = true;
            document.querySelector('#Trab1NomCont').required = true;
            document.querySelector('#Trab1FecInicio').required = true;
            document.querySelector('#Trab1FecFin').required = true;
            document.querySelector('#Trab1DescTar').required = true;
            document.querySelector('#Trab1LogCla').required = true;
        }else if(trabno.checked){
            document.getElementById("trab1").style.display ="none";
            document.getElementById("trab2").style.display ="none";
            document.querySelector('#Trab1cargo').required = false;
            document.querySelector('#Trab1Empresa').required = false;
            document.querySelector('#Trab1DirEmpresa').required = false;
            document.querySelector('#Trab1Tel').required = false;
            document.querySelector('#Trab1NomCont').required = false;
            document.querySelector('#Trab1FecInicio').required = false;
            document.querySelector('#Trab1FecFin').required = false;
            document.querySelector('#Trab1DescTar').required = false;
            document.querySelector('#Trab1LogCla').required = false;
        }
})

}