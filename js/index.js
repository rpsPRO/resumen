// Inicialización de componentes:
/**
     * Código para hacer que se cierre sólo el menú al pulsar sobre él
     */
    $('.navbar-nav li a').on('click', function(){
        if(!$( this ).hasClass('dropdown-toggle')){
            $('.navbar-collapse').collapse('hide');
        }
    });

    /**
     * Iniciamos el controlador que gestiona los eventos de 
     * los menús y activa/desactiva las vistas
     */
    
$.controller.init("caja_introducccion");
