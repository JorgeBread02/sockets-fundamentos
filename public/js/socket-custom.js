
var socket=io();
socket.on('connect', function(){
console.log('conectado al servidor')


});
//escuchar
socket.on('disconnect',function(){
    console.log('Se perdio conexion con el server amigaso')
})

//Enviar info
socket.emit('enviarMensaje',{
    usuario:'Jorge',
    mensaje:'Hola Mundo'
},function(resp){

    console.log('Respuesta server: ', resp);
});
//Escuchar info
socket.on('enviarMensaje',function(mensaje){
console.log('Servido: ',mensaje)
})

