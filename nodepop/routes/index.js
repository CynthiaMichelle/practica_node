var express = require('express');
var router = express.Router();
const Anuncio = require("../models/Anuncio")

/* GET home page. */
router.get('/', async function(req, res, next) {
try {
  let anuncios = await Anuncio.find()
  anuncios.forEach((anuncio) => {
    if (anuncio.venta === false) {
        anuncio.venta_string = "Compra"
    } else {
        anuncio.venta_string = "Venta"
    }
})
  res.locals.anuncios = anuncios
  console.log(anuncios)
  
  res.render('index');
} catch (error) {
  next(error)
}
  
});

module.exports = router;
