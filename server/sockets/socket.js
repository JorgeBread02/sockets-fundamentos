
const {io}= require('../server')

io.on('connection',(client)=>{
    console.log('Usuario conectado');
    client.emit('enviarMensaje',{
        usuario:'Admin',
        mensaje:'Bienvenido Amigaso'
    })
    
    
    
    client.on('disconnect',()=>{
    console.log('Usuario desconectado')
    });
    //Escuchae el cliente
    client.on('enviarMensaje',(data, callback)=>{
    console.log(data);
    client.broadcast.emit('enviarMensaje',data);
   /* if(mensaje.usuario){
        callback({
            resp:'TODO SALIO BIEN AMIGASO'
        });
    }else{
        callback({
            resp:'TODO SALIO MALL!!!!!!!!!!'
        });
        
    }*/
    
    })
    
    });
    