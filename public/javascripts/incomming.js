var socket = io();
console.log(participantCode);
socket.on(participantCode, function (data) {
  console.log(data);
  document.getElementById('event').innerHTML = String(data);
});
