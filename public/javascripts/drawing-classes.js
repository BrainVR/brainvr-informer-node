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
    draw: function(buffer, x, y){
        if(this.sizeMultipliers.length != 2) return;
        buffer.stroke(1);
        //console.log
    },
    setRealMapSize: function(x, y){
        this.realMapSize = [x, y];
        this.sizeMultipliers[0] = this.mapSize[0]/this.realMapSize[0];
        this.sizeMultipliers[1] = this.mapSize[1]/this.realMapSize[1];
    }
} 