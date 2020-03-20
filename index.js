var io = require('socket.io')(process.env.PORT || 52300);

console.log('server hs started')

io.on('connection', function(socket){
      
      console.log('connection made')


    socket.on('disconnect', function() {
              
              console.log('Player disconnected')
              
              })
    
    socket.emit('news', { hello: 'world' });
    

      });





