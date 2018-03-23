var socket = io();

socket.on('unityEvent', function (data) {
  console.log(data);
  document.getElementById('position').innerHTML = String(data);
});
