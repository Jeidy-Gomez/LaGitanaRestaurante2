
function enviarmensaje() {
    
  let nombre= document.getElementById("nombre").value;
   let correo= document.getElementById("correo").value;
    let mensaje= document.getElementById("mensaje").value;

   //validamos el formulario

   if( !nombre || !correo || !mensaje ){
   // alert("Error...Faltan datos!!!")
   Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Error....Faltan Datos"
  
});

   }
   else{
    alert("Su mensaje fue enviado satisfactoriamente");
   }

}


