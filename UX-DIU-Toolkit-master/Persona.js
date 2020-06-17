/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Ashley Miles",
				Photo: "ashley.jpg",
				Quote: "Kind heart, fierce mind and brave spirit",
				Age: 21,
				Occupation: "Estudiante Internacional",
				Family: "En una relación. Familia tradicional, una hermana menor.",
				Location: "EEUU",
				Character: "Sosegada y risueña. Su mayor debilidad es compararse con los demás y priorizarse demasiado a ella misma y no a los que la rodean",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 4 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Destacar entre sus compañeros de clase", "Conocer lugares nuevos", "Generar contenido para sus RRSS", "Crear un negocio online"],
				Frustrations: ["No satisfacer las expectativas de sus padres", "No saber gestionar su dinero a la hora de hacer compras", "No ser capaz de llevar una relacion a distancia", "No encajar entre los españoles"],
				Bio: "Ashley nació en el estado de Utah, en  EEUU. Se ha criado en un ambiente muy cálido y su familia procesa una gran fe en la iglesia. Sus padres son dueños de una famosa inmobiliaria de su ciudad, por lo que nunca ha tenido problemas económicos. " +
				"Ashley quiere continuar con el negocio familiar. Para ello está formandose en la universidad en el grado de Marketing. A Ashley le encantan las RRSS y las compras online, y cree que el marketing digital puede suponer un antes y un después en el negocio familiar. "+
				"Es una apasionada de los animales de compañía, sin embargo, tristemente nunca ha podido tener uno debido a la terrible alergia que sufre su hermana Meredith. "+ 
				"Le gusta ocupar su tiempo libre con actividades de ocio tales como ir de compras, visitar el cine, comer o cenar fuera, dado su bajo nivel culinario, y acudir a todo tipo de aconteciminetos sociales. "+
				"Ashley mantiene desde hace 2 años una relación con Liam, con el que tiene pensado casarse una vez ambos terminen sus estudios. Este año Ashley será estudiante internacional en la UGR.",
				Tech: [
					{ Name: "TIC/Internet", Value: 1 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 4 },
					{ Name: "Software", Value: 1 }
					
				], 
				Contextos: "La familia de Ashley ha decidido poner a prueba su autonomía. Es por ello que va a disponer de un presupuesto muy limitado durante su estancia en España. Sin embargo, quiere cumplir a toda costa su meta de viajar por todos los rincones del país y compartirlo en sus RRSS. "+
				"Ashley tiene miedo de que su relación se vea afectada por la distancia una vez se vaya de su ciudad. Su novio y ella confian mucho el uno en el otro, pero están muy unidos y nunca han estado tanto tiempo separados.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 4 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 1 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 3 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Guillermo Nieto",
				Photo: "guillermo.jpg",
				Quote: "Si todo falla: radioafición",
				Age: 34,
				Occupation: "Buscando un empleo",
				Family: "Su padre y su madre, viven en su ciudad natal.",
				Location: "Madrid",
				Character: "Tímido, pero le encanta pasar tiempo con sus amigos más cercanos.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Escalar puestos en la empresa", "Ampliar su red de radioaficionados", "Intentar ser más extrovertido"],
				Frustrations: ["No ser capaz de exteriorizar sus sentimientos", "Miedo a dejar solos a sus padres", "No encontrar amigos con los que compartir sus aficiones", ],
				Bio: "Guillermo nació en Granada en una familia humilde. Es hijo único y sus padres siempre se han dedicado a la agricultura. Su deseo de mejorar la situación económica familiar y su pasión por la radiofonía le hicieron cursar y finalizar un grado de Telecomunicaciones en la universidad de su ciudad. "+
				"Tras trabajar un par de años como becario en algunas empresas de Granada, Guillermo encontró un empleo en Madrid, por lo que se mudó a la capital. Guillermo tiene un carácter muy tranquilo, y le gusta llevar una vida solitaria. Es muy tímido por lo que siempre le ha costado hacer amistades. Sin embargo, la radioafición le ha abierto una puerta a conocer gente de manera que no sienta su intimidad ultrajada. "+
				"Otra de sus aficiones destacables es la música, la cual le ha ayudado tambien a forjar amistades en su nueva ciudad. Guillermo tiene junto a dos amigos un grupo de jazz en el que toca el trombón. No está pasando un buen momento, ya que acaba de dejarlo con su pareja, con la cual llevaba 2 años de relación y acababa de instalarse en su casa. La convivencia, ha acabado con la relación.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 2 },
					{ Name: "RRSS", Value: 1 },
					{ Name: "Software", Value: 4 }
					
				], 
                Contextos:   "Al estar alejado de sus padres, y ser estos muy mayores, han decidido ingresar en una residencia de ancianos. Guillermo no está muy de acuerdo, pero entiende que alli estarán mejor. Sin embargo, la pensión de sus padres no cubre totalmente los servicios de la residencia, por lo que Guillermo debe destinar parte de sus ingresos a la cuota mensual requerida en el centro." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 3 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])