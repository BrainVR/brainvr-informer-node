var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next){
  console.log(req.body);
  io.emit('unityEvent', req.body);
  res.send({});
  res.end('received');
});

module.exports = router;