/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Ashley Miles",
                Photo: "ashley.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "quiere encontrar un piso para entrar a vivir durante su estancia de Erasmus en España",
                touch1: "ordenador",
                feel1: "3",
                con1: "no sabe por dónde empezar a buscar ",
                ima1: "cartoon-why.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Una vez descargada la aplicación Badi, Ashley se dispone a encontrar una habitación.",
                touch2: "movil(Badi)",
                feel2: "4",
                con2: "hay muchas opciones y Ashley debe pararse a pensar en qué busca concretamente en una habitación",
                ima2: "cartoon-thinking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Selecciona un piso muy acogedor en el centro. Con un buen precio y con muchas comodidades. Ashley necesita confiar en el anunciante.",
                touch3: "móvil (Badi)",
                feel3: "4",
                con3: "Debe asegurarse de que el anuncio es fiable. Para ello, selecciona la opción enviar consulta al anunciante.",
                ima3: "cartoon-phoning.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Encontrar otros pisos de características similares mientras espera la respuesta del anunciante anterior",
                touch4: "móvil (Badi)",
                feel4: "2",
                con4: "Se percata de que la habitación está duplicada en la aplicación. Además, nadie responde a su anterior consulta.",
                ima4: "cartoon-crying.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reportar las habitaciones duplicadas.",
                touch5: "móvil (Badi)",
                feel5: "2",
                con5: "Encuentra facilmente la opción de reportar, pero Ashley ha perdido un poco la confianza en la comunidad de usuarios de Badi",
                ima5: "cartoon-phoneAssistan.jpg",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Hacer la reserva de una habitación",
                touch6: "móvil(Badi)",
                feel6: "4",
                con6: "Encuentra otra habitación rápidamente, donde el propietario es muy amable y responde al momento. Una vez realizada la reserva debe esperar 72h hasta que se confirma su reserva. El pago, junto con la fianza, estará retenido durante ese tiempo.",
                ima6: "cartoon-shaking.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Guille. Nieto",
                Photo: "guillermo.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Guillermo quiere ganar un dinero extra poniendo en alquiler una habitación de su casa para poder pagar la residencia de sus padres",
                touch1: "ordenador",
                feel1: "3",
                con1: "No puede permitirse pagar la cuota el solo, por lo que busca compañeros de piso",
                ima1: "cartoon-reading.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Publicar la habitación en badi, ya que ha usado el servicio con anterioridad",
                touch2: "ordenador",
                feel2: "3",
                con2: "Es la primera vez que va a publicar una habitacion, siempre ha usado badi para buscarlas",
                ima2: "cartoon-PChard.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Rellenar el formulario para publicar la habitación",
                touch3: "ordenador (badi)",
                feel3: "2",
                con3: "Tiene que rellenar demasidos datos y en ningun lugar pone para que se van a usar",
                ima3: "cartoon-PCangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Gestionar las solicitudes de compañeros de piso que le estan llegando",
                touch4: "ordenador (badi)",
                feel4: "2",
                con4: "No todo el mundo tiene una foto clara o ha rellenado su informacion completamente para que Guillermo conozca su personalidad",
                ima4: "cartoon-looking.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Aceptar a dos compañeros cuyos perfiles esten completos y puedan ser compatibles con el.",
                touch5: "ordenador (badi)",
                feel5: "4",
                con5: "No se fia mucho de los usuarios pero el servicio le ofrece algunas garantias",
                ima5: "cartoon-PChappy.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Conocer a sus compañeros",
                touch6: "Vivienda",
                feel6: "2",
                con6: "Uno de ellos no es como el se habia descrito en la web pero el contrato ya está hecho",
                ima6: "cartoon-deciding2.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



