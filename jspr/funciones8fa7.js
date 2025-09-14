
function finalizar(aaa) {
            var form = document.querySelector('form');

    var boton = form.querySelector('#enviar');
  var loader = form.querySelector('.loader-whats');
        // Correct object structure for form data
            // Deshabilitar el bot車n de env赤o y mostrar el loader
    boton.disabled = true;
    loader.style.display = 'block';
console.log('hola 1');
        // Correct object structure for form data
        var datawh = {
          'nombre': $.trim($('#Nombre').val()),
          'edad': $.trim($('#Edad').val()),
          'localidad': $.trim($('#Localidad').val()),
          'telefono': $.trim($('#Telefono').val()),
          'tipo': $.trim($('#tipoAfiliacion').val()),
          'sueldo': $.trim($('#Sueldo').val()),
      };
      
const xhr = new XMLHttpRequest();

xhr.open('POST', 'https://n8n.tuchat.com.ar/webhook-test/005fbe4d-97ce-46a7-9b2a-8cae75fef6e6');
console.log('hola 2');

xhr.onload = function () {
  if (xhr.status === 200) {
    // boton.value = 'ENVIO EXITOSO!';
    loader.style.display = 'none';
    $('#formavalian')[0].reset(); // Resetear el formulario
console.log('hola 3');
    // // Redirigir a la p芍gina de agradecimiento despu谷s de 3 segundos
    setTimeout(function() {
      $("#exampleModal").attr('data-bs-dismiss', true);
    }, 3000);
  } else {
    // Rehabilitar el bot車n y ocultar el loader en caso de error
    console.log('Error en la solicitud: ' + xhr.statusText);
    alert('Error en en el envío');
    loader.style.display = 'none';
    boton.disabled = false;
console.log('hola 4');
    $('#formavalian')[0].reset(); // Resetear el formulario
  }

};
// xhr.onerror = function () {
//   alert('Error en la conexión');
// };

xhr.send(JSON.stringify(datawh));
}
 


function preloadHTMLImages(){      
   //var imgNodes = document.getElementsByTagName('img');
   var imgNodes = ['img/img-slider-01.jpg', 'img/about_mask-lines.png', 'img/bg-por-01.jpg', 'img/bg-por-02.jpg', 'img/bg-por-03.jpg', 'img/bg-por-03-d.jpg', 'img/logo-datego.png'];
   var imgs = []; 
   var counter = 0; 
   var limit = imgNodes.length;
       
   var incrFn = function(){ 
      counter++;
      
      if(counter >= limit){
		 $('#loader div').animate({'width':0, 'right':'-40%'}, 500, function(){
		 	$('#loader').fadeOut(300, function(){
				$('#home .mask .bg-slide').addClass('this');
				/*$('#home h2').addClass('view');*/	 		
		 	})
		 })
      }
   };
   
   for(var i = 0; i < limit; i++){
      imgs[i] = new Image();
      //imgs[i].src = imgNodes[i].getAttribute('src');      
      imgs[i].src = imgNodes[i];
      imgs[i].onload = incrFn;
      imgs[i].onerror = incrFn;
	  
   }
}


//form
$('input:not([type="hidden"]), textarea').on('keydown', function(){$(this).removeClass('error');});
//sending

 // serializes a form into an object.
(function($,undefined){
  '$:nomunge'; // Used by YUI compressor.

  $.fn.serializeObject = function(){
  var obj = {};

  $.each( this.serializeArray(), function(i,o){
    var n = o.name,
    v = o.value;

    obj[n] = obj[n] === undefined ? v
      : $.isArray( obj[n] ) ? obj[n].concat( v )
      : [ obj[n], v ];
  });

  return obj;
  };

})(jQuery);


