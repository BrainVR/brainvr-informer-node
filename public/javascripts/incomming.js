var socket = io();
socket.on(participantCode, function (data) {
  displayData(data);
  //;
});

displayData = function(data){
  if(data.type == 'event'){
    document.getElementById('event').innerHTML = String(data.name);
  }
  if(data.type == 'player'){
    displayPlayerData(data);
  }
  if(data.type == 'map'){
    handleMapData(data);
  }
}

displayPlayerData = function(data){
  playerUpdate(data);
}

handleMapData = function(data){
  //needs a switc, but at this point we are only sending size
  var mapSize = data.size;
  mapSize = mapSize.substring(1, mapSize.length - 1).split(",");
  console.log(mapSize);
  //passing first and last element - middle is height
  POSITION.setRealMapSize(parseInt(mapSize[0]), parseInt(mapSize[2]));
}