const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app=express();
const server = http.createServer(app);
const io = socketIO().listen(server);
app.use(express.static(__dirname+'/public'));

server.listen(3000, function (){
    console.log('sksjhsjs',3000)
})

//Comunicacion serial
const Serialport=require('serialport');
const Readline=Serialport.parsers.Readline;

const port = new Serialport('COM3',{
    baudRate:9600
});

const parser=port.pipe(new Readline({delimiter:'\r\n'}));


parser.on('data',function(data){
    
    let tem= data.toString();
    var res=tem.split(" ");
    console.log(res);
  io.emit('pot3',res[0])
  io.emit('temp',res[1]);
  io.emit('pot2',res[2]);

});
parser.on('error',function(error){
    console.log(error);
})