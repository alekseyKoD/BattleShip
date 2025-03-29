var express = require('express');
var router = express.Router();
var path = require('path');

let helperScript=require(path.join(__dirname, '../modules/script.js'))
 


//console.log(randomFill);

// пример как можно сгенерировать поле случайным образом на сервере
// и создать html для клиента


/* GET home page. */
router.get('/', function(req, res, next) {

  // здесь мы вызвали функцию из внешнего модуля, который подключили выше (script.js)
  // функия генерирует случ массив 10х10 с 1 или 0 и передаем этот массив в движк представления для рендеринга html
  let randomFill=helperScript.Random(10,10);
  res.render('index', { randomFill });
});

module.exports = router;
