var HELPERS = {
    vector3toArr: function(str){
        return str.substring(1, str.length - 1).split(",");
    }
}
var ROTATION = {
    bufferSize: [100,100],
    diameter: 100,
    center: [50,50],
    draw: function(buffer, x, y){
        buffer.background(255);
        buffer.stroke(1);
        //console.log(x, cos(x), sin(x));
        let playerRotation = x - 90;
        buffer.ellipse(this.center[0], this.center[1], this.diameter, this.diameter);
        buffer.line(this.center[0], this.center[1], cos(playerRotation)*this.diameter/2 + this.center[0], sin(playerRotation)*this.diameter/2 + this.center[1]);
    },
    setBufferSize: function(x, y){
        this.bufferSize = [x, y];
        this.center = [x/2, y/2];
    }
}

var POSITION = {
    bufferSize: [100,100],
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
    setup: function(buffer){
        this.clean(buffer);
    },
    setBufferSize: function(x, y){
        this.bufferSize = [x, y];
        if(this.realMapSize.length == 2);
        //basically rewrites multipliers
        this.setRealMapSize(this.realMapSize[0], this.realMapSize[1]);
    },
    clean: function(buffer){
        const strokeSize = 4;
        buffer.background(255);
        buffer.stroke(1);
        buffer.rectMode(CORNERS);
        buffer.strokeWeight(strokeSize);
        buffer.rect(0, this.bufferSize[1], this.bufferSize[0], 0);
        buffer.strokeWeight(1);
    },
    setRealMapSize: function(x, y){
        this.realMapSize = [x, y];
        this.sizeMultipliers[0] = this.bufferSize[0]/this.realMapSize[0];
        this.sizeMultipliers[1] = this.bufferSize[1]/this.realMapSize[1];
    },
    sameLastPosition: function(arr){
        //https://stackoverflow.com/questions/3115982/how-to-check-if-two-arrays-are-equal-with-javascript
        return JSON.stringify(this.lastPosition)==JSON.stringify(arr);
    }
} 