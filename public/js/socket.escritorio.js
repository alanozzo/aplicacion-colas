//Comando para establecer la conexión
var socket = io();

var searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

var label = $('small');
var escritorio = searchParams.get('escritorio');
console.log(escritorio);
$('h1').text('Escritorio ' + escritorio);

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio: escritorio }, function(response) {
        // console.log(response);
        if (response === 'No hay tickets') {
            label.text(response);
            return response;
        }
        label.text('ticket: ' + response.numero);
    });
});