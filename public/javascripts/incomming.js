import('/socket.io/socket.io.js')
var socket = io();

socket.on('unityEvent', function (data) {
  console.log('event received');
  console.log(data);
  document.getElementById('position').innerHTML = data.key;
});
