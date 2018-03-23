var socket = io();

socket.on('unityEvent', function (data) {
  console.log(data);
  document.getElementById('event').innerHTML = String(data);
});

socket.on('unityPlayer', function(data){
  document.getElementById('position').innerHTML = String(data);
});
