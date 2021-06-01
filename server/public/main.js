const sockets= io();

sockets.on('temp',function(data){
    console.log(data);
    let temp=document.getElementById('temperature');
    temp.innerHTML=`${data}`
})
sockets.on('pot2',function(data){
    console.log(data);
    let temp=document.getElementById('pote2');
    temp.innerHTML=`${data}`
})
sockets.on('pot3',function(data){
    console.log(data);
    let temp=document.getElementById('pote3');
    temp.innerHTML=`${data}`
})