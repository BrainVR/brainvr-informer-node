var socket = io();
socket.on(participantCode, function (data) {
  displayData(data);
  //;
});

displayData = function(data){
  if(data.type == 'event'){
    document.getElementById('event').innerHTML = String(data.event);
  }
  if(data.type == 'player'){
    displayPlayerData(data);
  }
}

displayPlayerData = function(data){
  playerUpdate(data);
}