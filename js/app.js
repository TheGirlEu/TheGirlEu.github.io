const seccionPagina = new fullpage('#fullpage', {
    // ──────────────────────────────────────────────────
	//   :::::: Opciones Basicas
	// ──────────────────────────────────────────────────
    autoScrolling: true, // Se activa el scroll.
    fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
    fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
    easing: 'easeInOutCubic', // Funcion de tiempo de la animacion.
    scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
    css3: true, // Si usara CSS3 o javascript.
    easingcss3: 'ease-out', // Curva de velocidad del efecto.
    loopBottom: false, // Regresa a la primera seccion siempre y cuando se ya haya llegado a la ultima sección y el ususario siga scrolleando.

    // ──────────────────────────────────────────────────
	//   :::::: Barra de navegación
	// ──────────────────────────────────────────────────
		 navigation: true, // Muesta la barra de navegación.
		 menu: '#menu', // Menu de navegación.
		 anchors: ['inicio', 'SobreMi', 'Habilidades', 'Gustos', 'Contacto'], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
		 navigationTooltips: ['Inicio', 'Sobre mí', 'Habilidades', 'Gustos', 'Contacto'], // Tooltips que mostrara por cada boton.
		 showActiveTooltip: false, // Mostrar tooltip activa.

    // ──────────────────────────────────────────────────
	//   :::::: Slides
	// ──────────────────────────────────────────────────
		 controlArrows: true, // Flechas del slide
		 slidesNavigation: false, // Indicadores del slide

   
    
})