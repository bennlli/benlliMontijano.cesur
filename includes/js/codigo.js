/* Funcion para abrir una ventana emergente, en este caso de la calculadora */
function ventanaSecundaria (url){
window.open(url, "Calculadora", "width=240, height=340, scrollbars=NO")
}

/* Funcion para abrir una ventana emergente, en este caso pdf */
function ventanaPDF (url){
    window.open(url, "pdf", "width=auto, height=auto")
    }
    
/* Ventana para los ejercicios */ 
function verificarEntrada(){
  if (window.confirm('¿Salir de la web y entrar en los ejercicios JavaScript?'))
  {
    window.location='https://bennlli.github.io/benlliMontijano.cesur/ejercicios.html';
  }
  else
  {
    window.alert('Perfecto, respetamos su decisión.');
  }
}

/* Ventana para ver la hora */
function hora(){
    window.location='http://bennlli.github.io/benlliMontijano.cesur/ejercicios/hora.html';
  }

/* Ventana para ver los detalles de la pantalla */
function dimensionesPantalla(){
    window.location='http://bennlli.github.io/benlliMontijano.cesur/ejercicios/valoresVentana.html';
  }

/* Ventana para ver los detalles dela navegador */
function detallesNavegador(){
  window.location='http://bennlli.github.io/benlliMontijano.cesur/ejercicios/navegadorValores.html';
}

/* Uso funciones */
function funcionHora(){
  window.location='http://bennlli.github.io/benlliMontijano.cesur/ejercicios/horaFuncion.html';
}

/* Uso array */
function array(){
  window.location='http://bennlli.github.io/benlliMontijano.cesur/ejercicios/array.html';
}

/* Contador click */
function contador(){
  window.location='http://bennlli.github.io/benlliMontijano.cesur/ejercicios/contador.html';
}

/* Cambio color */
function cambioColor(){
  window.location='http://bennlli.github.io/benlliMontijano.cesur/ejercicios/onMouse.html';
}

/* El tiempo */
function tiempo(){
  window.location='bennlli.github.io/benlliMontijano.cesur/ejercicios/tiempo.html';
}

/* Evento tecla */
function evento(){
  window.location='bennlli.github.io/benlliMontijano.cesur/ejercicios/evento_tecla.html';
}

/* Primo */
function primo(){
  window.location='bennlli.github.io/benlliMontijano.cesur/ejercicios/primo.html';
}

/* Formulario */
function formulario(){
  window.location='bennlli.github.io/benlliMontijano.cesur/ejercicios/formulario.html';
}

/* Video */
function video(){
  window.location='http://bennlli.github.io/benlliMontijano.cesur/ejercicios/video.html';
}

/* Validación DNI */
function dni(){
  window.location='http://bennlli.github.io/benlliMontijano.cesur/ejercicios/val_dni.html';
}

/* Cambio de color del fondo */
function fondo(){
  window.location='http://bennlli.github.io/benlliMontijano.cesur/ejercicios/fondo_color.html';
}

/* Cambio de color de letra */
function letra(){
  window.location='http://bennlli.github.io/benlliMontijano.cesur/ejercicios/color_letras.html';
}

