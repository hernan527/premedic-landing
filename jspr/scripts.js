$(document).ready(function() {
    // _provincias();   
    // _credenciales();         



    $("#enviar").click(function(event) {
        var errors = [];
        event.preventDefault();
        $("#enviar").attr('disabled', true);
        console.log(' hola 1');
            var form = document.querySelector('form');

    var boton = form.querySelector('#enviar');
  var loader = form.querySelector('.loader-whats');
        // Correct object structure for form data
            // Deshabilitar el bot車n de env赤o y mostrar el loader
    boton.disabled = true;
    loader.style.display = 'block';
        var datawh = {
          'nombre': $.trim($('#Nombre').val()),
          'edad': $.trim($('#Edad').val()),
          'localidad': $.trim($('#Localidad').val()),
          'telefono': $.trim($('#Telefono').val()),
          'tipo': $.trim($('#tipoAfiliacion').val()),
          'sueldo': $.trim($('#Sueldo').val()),
      };

console.log('datawh ',datawh )
        if (datawh.nombre == "") {
            errors.push("Su <b>Nombre</b> es requerido");
        }
              if (datawh.edad == "") {
            errors.push("Su <b>Edad</b> es requerida");
        }
                      if (datawh.localidad == "") {
            errors.push("Su <b>localidad</b> es requerida");
        }

        if (datawh.telefono == "") {
            errors.push("Su <b>telefono</b> es requerido");
        }
                if (datawh.telefono.length < 10 && datawh.telefono != "") {
            errors.push("Su <b>telefono</b> debe alcanzar los 10 dígitos");
        }
        if (datawh.tipo == "") {
            errors.push("Su <b>forma de ingreso</b> es requerida");
        }

console.log(' hola 2');
        if (errors.length > 0) {
            document.getElementById("form-errores").innerHTML = `
        <div class="alert alert-danger">
            <ul>
                ${errors.map(err => `<li>${err}</li>`).join('')}
            </ul>
        </div>
    `;
            $("#enviar").attr('disabled', false);
                loader.style.display = 'none';
        } else {
                document.getElementById("form-errores").innerHTML = "";

            console.log(' hola 4');
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://webhook.tuchat.com.ar/webhook/005fbe4d-97ce-46a7-9b2a-8cae75fef6e6');

            xhr.onload = function() {
                if (xhr.status === 200) {
      
                document.getElementById("form-errores").innerHTML = "";

                    setTimeout(function() {
                            document.querySelector('#exampleModal .btn-close').click();
      $('#formavalian')[0].reset(); // Resetear el formulario
 $("#enviar").attr('disabled', false);
                                    loader.style.display = 'none';
                    }, 3000);
                                 
                } else {
                    try {
                        let errors = '';
     
             boton.disabled = false;
      loader.style.display = 'none';
      $('#formavalian')[0].reset(); // Resetear el formulario
                        $("#enviar").attr('disabled', false);
                    } catch (error) {
                        console.log("Error al procesar la respuesta del servidor.");
                        $("#enviar").attr('disabled', false);
                    }
                }
            };

            xhr.onerror = function() {
                alert('Error en la conexión');
                $("#enviar").attr('disabled', false);
            };
 
            xhr.send(JSON.stringify(datawh));


        }
    });

    // $("[name=provincia]").on("change", function() {
    //     var valor = $(this).val();
    //     $("[name=localidad]").html('<option selected="" disabled="">(Cargando info...)</option>');
    //     _localidades(valor);
    // });
});


 
function isValidEmail(email) {
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailRegex.test(email);
}

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var param = '';
    if (urlParams.get('p')) {
        param = ' - ' + (urlParams.get('p'));
    }

    $("#formavalian").find('input:not([type="hidden"]), textarea').each(function() {
        $(this).val('');
    });

    $(window).on('load', function() {
        $('header .copy, form').removeClass('hideme');
        $('.select').on('click', function() {
            $(this).find('ul').slideToggle(400);
        });
        $('.select').on('click', 'li', function() {
            var txt = $(this).html();
            $(this).parents('.select').find('input').val(txt);
        });
        $('.btAnclaCred').on('click', function(e) {
            e.preventDefault();
            $('body,html').stop(true, true).animate({
                scrollTop: 0
            }, 400);
            var dCrd = $(this).data('link');
            $('#credencial-input input').val(dCrd);
        });

     

        $("#formavalian").find('input:not([type="hidden"]), textarea').on('keydown', function() {
            $(this).removeClass('error');
            $("#formavalian").find('.valid-text').html('');
        });

        var sending = false;
     
    });


    (function($, undefined) {
        '$:nomunge';
        $.fn.serializeObject = function() {
            var obj = {};
            $.each(this.serializeArray(), function(i, o) {
                var n = o.name,
                    v = o.value;
                obj[n] = obj[n] === undefined ? v :
                    $.isArray(obj[n]) ? obj[n].concat(v) : [obj[n], v];
            });
            return obj;
        };
    })(jQuery);

    $(window).on('scroll', function() {
        var st = $(window).scrollTop();
        $('header > img').css({
            'margin-top': st * 0.3
        });
        $('.anima').each(function(i) {
            var bottom_of_object = $(this).offset().top  + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('hideme');
            }
        });

        $('.imageCont > img').each(function(i) {
            var bottom_of_object = $(this).offset().top;
            var bottom_of_window = st + $(window).height();
            if (bottom_of_window > bottom_of_object) {

            }
        });
    });

    function sortByProperty(objArray, prop, direction) {
        if (arguments.length < 2) {
            throw new Error("ARRAY, AND OBJECT PROPERTY MINIMUM ARGUMENTS, OPTIONAL DIRECTION");
        }
        if (!Array.isArray(objArray)) {
            throw new Error("FIRST ARGUMENT NOT AN ARRAY");
        }
        const clone = objArray.slice(0);
        const direct = arguments.length > 2 ? arguments[2] : 1;
        const propPath = (prop.constructor === Array) ? prop : prop.split(".");
        clone.sort(function(a, b) {
            for (let p in propPath) {
                if (a[propPath[p]] && b[propPath[p]]) {
                    a = a[propPath[p]];
                    b = b[propPath[p]];
                }
            }
            a = a.match(/^\d+$/) ? +a : a;
            b = b.match(/^\d+$/) ? +b : b;
            return ((a < b) ? -1 * direct : ((a > b) ? 1 * direct : 0));
        });
        return clone;
    }



  