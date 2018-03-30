var HELPERS = {
    vector3toArr: function(str){
        return str.substring(1, str.length - 1).split(",");
    }
}
var ROTATION = {
    diameter: 100,
    center: 100,

    draw: function(buffer, x, y){
        buffer.background(255);
        buffer.stroke(1);
        //console.log(x, cos(x), sin(x));
        let playerRotation = x - 90;
        buffer.ellipse(100, 100, this.diameter, this.diameter);
        buffer.line(this.center, this.center, cos(playerRotation)*this.diameter/2 + this.center, sin(playerRotation)*this.diameter/2 + this.center);
    }
}

var POSITION = {
    mapSize: [100,100],
    realMapSize: [],
    sizeMultipliers: [],
    lastPosition: [],
    draw: function(buffer, x, y){
        if(this.sizeMultipliers.length != 2) return;
        if(this.sameLastPosition([x,y])) return;
        buffer.stroke(1);
        this.lastPosition = [x, y];
        buffer.point(x*this.sizeMultipliers[0], y*this.sizeMultipliers[1]);
        console.log(x + ";" + y)
    },
    setRealMapSize: function(x, y){
        this.realMapSize = [x, y];
        this.sizeMultipliers[0] = this.mapSize[0]/this.realMapSize[0];
        this.sizeMultipliers[1] = this.mapSize[1]/this.realMapSize[1];
    },
    sameLastPosition: function(arr){
        //https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
        return JSON.stringify(this.lastPosition)==JSON.stringify(arr);
    }
} 