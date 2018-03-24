var socket = io();
socket.on(participantCode, function (data) {
  console.log(data);
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
  
}