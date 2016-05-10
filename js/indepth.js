
var ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
var ventana_ancho = $(window).width();
var disable=true;
var active_ace=false;
var input_text=false;
var input_text2=false;
var input_goles=false;
var input_radio=false;
var tenis_name="";
var respuestas_array = new Array();
var final_time = 0;
var aciertos = 0;


var maxTime = 30;
var time = maxTime;
var time_out=0;

$('#dial').knob({
  readOnly : true,
  thickness : 0.2,
  max : maxTime,
  width: 45,
  height: 45,
  inputColor: "#fff",
  fgColor: "#fff",
  bgColor: "rgb(48, 103, 165)",
  angleArc: "360",
  rotation: "anticlockwise",
  displayPrevious: true,
  fontWeight: 16,
  
});

var intervalo;

$("#indepth_contador_circle input").css("margin-top",0);

$("#indepth_boton_empezar").on("click",function(){
	$("#indepth_boton_empezar").click(false);
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	 
	 var data = {
				  	
					  "preguntas": [
					    {
					      "pregunta": "Año del último campeonato de Chivas",
					      "respuestas": [
					        {
					          "respuesta": "2007",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "2005",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "2006",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "2009",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "Último torneo en el que Chivas y América se enfrentaron en Liguilla",
					      "respuestas": [
					        {
					          "respuesta": "Apertura 2006",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Clausura 2005",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Clausura 2007",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Apertura 2010",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Cuántas veces se ha enfrentado América y Chivas en Liguilla?",
					      "respuestas": [
					        {
					          "respuesta": "4",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "2",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "5",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "3",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Qué equipo busca el bicampeonato?",
					      "respuestas": [
					        {
					          "respuesta": "Monterrey",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Chivas",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "América",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Tigres",
					          "tipo": "true"
					        }
					      ]
					    },
					    {
					      "pregunta": "Año del último campeonato de Rayados",
					      "respuestas": [
					        {
					          "respuesta": "2011",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "2009",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "2010",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "2015",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Contra quién ganó Chivas su último campeonato?",
					      "respuestas": [
					        {
					          "respuesta": "América",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Toluca",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Cruz Azul",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Atlas",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Cuántas veces se ha enfrentado Rayados y Tigres en Liguilla?",
					      "respuestas": [
					        {
					          "respuesta": "2",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "4",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "5",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "3",
					          "tipo": "true"
					        }
					      ]
					    },
					    {
					      "pregunta": "Anotador del gol del último título de Chivas.",
					      "respuestas": [
					        {
					          "respuesta": "Salcido",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Chicharito",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "'Bofo' Bautista",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "'Gusano' Nápoles",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "Máximo goleador del presente torneo.",
					      "respuestas": [
					        {
					          "respuesta": "Funes Mori",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Gignac",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Oribe Peralta",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "'Gullit' Peña",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Contra que equipo obtuvo América su último campeonato?",
					      "respuestas": [
					        {
					          "respuesta": "Tigres",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Cruz Azul",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Toluca",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Monterrey",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Quién era el entrenador de Chivas la última vez que enfrentó al América en Liguilla?",
					      "respuestas": [
					        {
					          "respuesta": "Romano",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Ruggeri",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Chepo de la Torre",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Lapuente",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "Máximo goleador en la historia de Chivas",
					      "respuestas": [
					        {
					          "respuesta": "Chava Reyes",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Omar Bravo",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Chicharito",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Cabrito Arellano",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Cuántos títulos tiene cada equipo regio en sus vitrinas?",
					      "respuestas": [
					        {
					          "respuesta": "4",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "5",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "3",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "7",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "Equipo con más títulos del futbol mexicano",
					      "respuestas": [
					        {
					          "respuesta": "Chivas",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Toluca",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "América",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Pumas",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Cuántas veces ha eliminado Tigres a Rayados en Liguilla?",
					      "respuestas": [
					        {
					          "respuesta": "3",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "2",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "1",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "0",
					          "tipo": "true"
					        }
					      ]
					    },
					    {
					      "pregunta": "Máximo goleador del Clásico Nacional",
					      "respuestas": [
					        {
					          "respuesta": "Omar Bravo",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Chava Reyes",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Zague",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Oribe Peralta",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "Año en que Ambriz dirigió a Chivas",
					      "respuestas": [
					        {
					          "respuesta": "2010",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "2011",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "2013",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "2012",
					          "tipo": "true"
					        }
					      ]
					    },
					    {
					      "pregunta": "¿Qué técnico fue compañero de García Aspe en River Plate?",
					      "respuestas": [
					        {
					          "respuesta": "Nacho Ambriz",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Mohamed",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Almeyda",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Tuca Ferretti",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "ÚItimo entrenador argentino de Chivas antes de Almeyda",
					      "respuestas": [
					        {
					          "respuesta": "Ruggeri",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "La Volpe",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Bustos",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "Ardiles",
					          "tipo": "false"
					        }
					      ]
					    },
					    {
					      "pregunta": "Equipo con menos derrotas en la fase regular",
					      "respuestas": [
					        {
					          "respuesta": "Chivas",
					          "tipo": "true"
					        },
					        {
					          "respuesta": "América",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Tigres",
					          "tipo": "false"
					        },
					        {
					          "respuesta": "Monterrey",
					          "tipo": "false"
					        }
					      ]
					    }
					  ]
					};
		  preguntas=data.preguntas;
		 
		 $("#indepth_pregunta_cont").html("");
		 
		 $.each(preguntas, function( i, item ) {
			 
			var div=' <div class="indepth_pregunta_item"><div class="indepth_pregunta">'+(i+1)+'- '+item.pregunta+'</div><div class="indepth_pregunta_main"><div class="indepth_pregunta_img"><img src="'+urlIndepth+'images/preguntas/'+(i+1)+'.jpg" /></div><div class="indepth_respuestas_cont" num="'+i+'">';
				
			var div_items="";
			$.each(item.respuestas, function( j, items ) {
				div_items+='<div class="indepth_respuesta_item active" num="'+j+'">'+items.respuesta+'</div>';
			});						
										
			var div_fin='</div></div></div>';
			 
			 $("#indepth_pregunta_cont").append(div+div_items+div_fin);			 
		 });
		 
		 $("#indepth_page1").css({
			"top":ventana_alto-100,
			"visibility":"visible",
			"height": "auto"
		});
		
		$("#nav-bar-stats,#top-bar-wrapper,#body-wrapper").hide();
		
		$("#indepth_page1").show();
		
		$("#indepth_page1").animate({
			top: 0
		},2000, function(){
			$("#indepth_tiempo_cont").css("position","fixed");
			intervalo=setInterval(function() {
			  if(time<=0){
			  	clearInterval(intervalo);
			  	finish_test();
			 }	
			  time--;
			  $('#dial')
			        .val(time)
			        .trigger('change');
			}, 1000);
		})
		
		$(document).on("click",".indepth_respuesta_item",function(){
				
			var respuesta_cont = $(this).parent();
			var pregunta_num = respuesta_cont.attr("num");
			var respuesta_num = $(this).attr("num");
			var pregunta_obj = preguntas[pregunta_num];
			var respuesta_obj = pregunta_obj.respuestas[respuesta_num];
			
			tipo= (respuesta_obj.tipo === "true");
			
			if(tipo){
				$(this).addClass("bien");
				respuestas_array[pregunta_num]=true;
			}else{
				$(this).addClass("mal");
				respuestas_array[pregunta_num]=false;
			}
			
			respuesta_cont.find('.indepth_respuesta_item').removeClass("active").addClass("disable");
			respuesta_cont.find('.indepth_respuesta_item').click(false);
						
						
						
			if(preguntas.length == respuestas_array.length){
				final_time = time;
				respuestas_num=0;
				
					$.each(respuestas_array, function( i, item ) {
					  	if(item!=undefined)
					  		respuestas_num++;
				  	});
				  	
				 console.log("respuestas " + respuestas_num);
				 console.log(respuestas_num);
				
				if(respuestas_num == preguntas.length){
					clearInterval(intervalo);
					window.setTimeout(finish_test, 700);
				}
				
			}
			
		});
		
		
});


$('#dial')
        .val(99)
        .trigger('change');


function finish_test(){
	
	 ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();;
	var ventana_ancho = $(window).width();
	
	
	
	$("#indepth_resultados").css({
		"visibility": "visible",
		"position":"fixed",
		"top": 0,
		"left": -ventana_ancho
	});
  	
  	$("#indepth_resultados").animate({
	  	"left": 0
  	},2000, function(){
	  	$("html, body, #indepth_page1").css("overflow","hidden");
  	});

  	$.each(respuestas_array, function( i, item ) {
	  	if(item){
		  	aciertos++;
	  	}
  	});
  	
  	aficionado="";
  	msg="";

  	if(aciertos<=5){
	  	aficionado="";
	  	msg="Prepárate… 'Tuca' te va a dar la regañada de tu vida.";
  	}
  	
  	if(aciertos>=6 &&aciertos<=10){
	  	aficionado="";
	  	msg="pura suerte. Casi los mismos juegos en los que Chivas se enrachó…";
  	}

  	if(aciertos>=11 && aciertos<=15){
	  	aficionado="";
	  	msg="¡Ambríz ya te quiere como su reemplazo! Te alcanza para ser del América";
  	}

  	if(aciertos>=16){
	  	aficionado="";
	  	msg="¡Vas por todo! ¡Al estilo de Monterrey, fuiste líder!";
  	}
  	
  	$("#indepth_aciertos").html(aciertos);
  	$("#indepth_aciertos_text").html(msg);
  	$("#tipo_aficionado").html( aficionado );
  	
}



$('.indepth_num').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}

});

$('.idepth_marcador, .idepth_marcador2').keydown(function(event) {
	// Allow special chars + arrows 
	if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9  || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey === true)  || (event.keyCode >= 35 && event.keyCode <= 39)){
	        return;
	}else {
	    // If it's not a number stop the keypress
	    if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
	        event.preventDefault(); 
	    }   
	}
});


$('.indepth_num').keyup(function(event) {
	
	if(parseInt($(".indepth_num").val())>0){
		input_goles=true;
	}else{
		input_goles=false;
	}
	indepth_comprobar();

});


$('.idepth_marcador').keyup(function(event) {
	if($(this).val()!="" ){
		input_text=true;
	}else{
		input_text=false;
	}
	
	indepth_comprobar();
});

$('.idepth_marcador2').keyup(function(event) {
	if($(this).val()!="" ){
		input_text2=true;
	}else{
		input_text2=false;
	}
	
	indepth_comprobar();
});


var indepth_comprobar = function(){
	console.log(input_text + " - " + input_text2 + " - " + input_goles);
	
	if(input_text && input_text2 && input_goles){
		$(".indepth_boton").removeClass("disable");
		disable=false;
	}else{
		$(".indepth_boton").addClass("disable");
		disable=true;
	}
	
	console.log(disable);
}


var indepth_sizeAdjust = function(firstTime){
	$(".indepth_page").each(function(){
		if($(this).attr("resize") == "true"){
			var h = parseInt($(this).width(),10) / $(this).attr("width") * $(this).attr("height");
			$(this).css("height", h + "px");
		}else if(firstTime && $(this).attr("resize") == "false"){
			$(".indepth_background", $(this)).css("min-width", $(this).attr("width") + "px");
			$(this).css("height", $(this).attr("height") + "px");
		}
	})
}

var indepth_preloadImgs = function(){
	$("img[over]").each(function(){
		$(this).attr("out", $(this).attr("src"));
		$(this).on("mouseenter", function(){
			$(this).attr("src", $(this).attr("over"));
		}).on("mouseleave", function(){
			$(this).attr("src", $(this).attr("out"));
		}).css("cursor", "pointer");

		var tmp = $("<img/>");
		tmp.attr("src", $(this).attr("over"));
		tmp.css({"position":"absolute", "top":"-9999px", "left":"-9999px"})
		tmp.appendTo("body");
	});
}

   
 function loadDisqus(source, identifier, url) {
if (window.DISQUS) {
   jQuery('#disqus_thread').insertAfter(source);
   /** if Disqus exists, call it's reset method with new parameters **/

    DISQUS.reset({
  reload: true,
  config: function () { 
   this.page.identifier = identifier.toString();    //important to convert it to string
   this.page.url = url;
  }
 });
} else {
//insert a wrapper in HTML after the relevant "show comments" link
	source.append('<div id="disqus_thread"></div>');
   //jQuery('<div id="disqus_thread"></div>').insertAfter(source);
   disqus_identifier = identifier; //set the identifier argument
   disqus_url = url; //set the permalink argument
   disqus_per_page=3;
   //append the Disqus embed script to HTML
   var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
   dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
   jQuery('head').append(dsq);
}
};


$(document).ready(function(){
	indepth_sizeAdjust(true);
	indepth_preloadImgs();
	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();
	
	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	$("#indepth_resultados").css({
		"width":ventana_ancho+"px",
		"height":ventana_alto+"px"
	});

$("#indepth_twittear").click(function(){

	if(!disable){

		
<<<<<<< HEAD
		var text = encodeURIComponent("Mi predicción es: Chivas "+$("input[name=goleador]").val()+"-"+$("input[name=goleador2]").val())+ " América primer gol al minuto "+$("input[name=goles_anotados]").val()+" @juanfutbol";
		var url = encodeURIComponent("http://juanfutbol.com/indepth/");
		window.open("https://twitter.com/share?text="+text+"&hashtags=pizzafut&url="+url,"indepth/juanpizza-chivas-america","width=500, height=300");
=======
		var text = encodeURIComponent("Mi predicción es: Pumas "+$("input[name=goleador]").val()+"-"+$("input[name=goleador2]").val())+ " América primer gol al minuto "+$("input[name=goles_anotados]").val()+" @juanfutbol";
		var url = encodeURIComponent("http://juanfutbol.com/indepth/indepth/juanpizza-pumas-america");
		window.open("https://twitter.com/share?text="+text+"&hashtags=pizzafut&url="+url,"width=500, height=300");
>>>>>>> origin/gh-pages

	}else{
		
		
		
	}
	
	});
	
	$(document).on("click", "#indepth_button_ver" ,function(){
		$.fn.fullpage.moveSectionDown();
	});
});

$(window).on("resize", function(){

	ventana_alto = window.innerHeight ? window.innerHeight : $(window).height();
	ventana_ancho = $(window).width();

	$("#indepth_cover").css({
		"width": (ventana_ancho)+"px",
		"height": (ventana_alto-100)+"px"	
	})
		
	    $("#indepth_resultados").css({
			"width":ventana_ancho+"px",
			"height":ventana_alto+"px"
		});
});


