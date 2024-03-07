let parrafo = $('#miParrafo');

parrafo.css('font-size', '50px');

parrafo.click(function () {
    $(this).slideup('slow').slideDown('slow');  //efecto deslizar
})




let titulo = $('.titulo');

titulo.click(function () {
    $(this).fadeOut('slow'); //efecto desvanecido
})



titulo.css('color', 'red');

let contenido = $('.caja');
contenido.css(
    {
        'background-color': 'yellow',
        'padding': '2rem',
        'text-transform': 'uppercase',
        'color': 'black'
    }
)
contenido.dblclick( function () {
    $(this).slideUp('slow').slideDown('slow');
})

contenido.click( function() {
    $(this).css('background-color', 'green')
    $(this).animate({deg: 360}, {
        duration: 3000,
        step: function(now) {
            $(this).css({
                Transform: 'rotate(' + now + 'deg)'
            })
        }
    })
})