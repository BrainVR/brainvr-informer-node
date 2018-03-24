var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'BrainVR Informer' });
});

router.get('/participant/:id', function(req, res, next){
  res.render('participant', {participantCode: req.params.id});
});

router.post('/', function(req, res, next){
  console.log(req.body);
  var type = Object.keys(req.body)[0];

  if (type == 'event'){
    io.emit('unityEvent', req.body[[type]]);
  }
  if(type == 'player'){
    io.emit('unityPlayer', req.body[[type]]);
  }
  res.send({});
});

module.exports = router;