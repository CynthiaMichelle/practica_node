const express = require('express')
const router = express.Router()
const Anuncio = require('../../models/Anuncio')

//CRUD: create, read, update, delete
// GET /api/anuncios
// devuelve una lista de anuncios
// devuelve una lista de anuncios filtrada por nombres

router.get('/', async(req, res, next) => {
    try {

        // filtros
        const filterByNombre = req.query.nombre
        const filterByVenta = req.query.venta
        const filterByPrecio = req.query.precio 
        const filterByTags= req.query.tags

        // paginazion
        const skip = req.query.skip

        // estamos construyendo un filtro and, si quisieramos u filtro OR, miraremos la docu de mongoDB ($age)
        const filtro = {}

        if (filterByNombre) {
            filtro.nombre = filterByNombre
        }

        if (filterByVenta) {
            filtro.venta = filterByVenta
        }

        if (filterByPrecio) {
            filtro.precio = filterByPrecio
        }

        if (filterByTags) {
            filtro.tags = filterByTags
        }

        const anuncios = await Anuncio.lista(filtro, skip)

        //obtenemos agentes de la base de datos

        res.json({ results: anuncios })
    } catch (error) {
        next(error)
    }
})

// POST /api/anuncios para crear un recurso
// Crea un anuncio
router.post('/', async(req, res, next) => {
    try { // try -> prueba a hacer todo esto, pero si hay algun error pasa por Catch, y catch manda el error a app.js

        const anuncioData = req.body

        //creamos una instancia de agente
        const anuncio = new Anuncio(anuncioData)


        // la persistimos en la BaseDatos, persistir es guardar
        const anuncioPersistido = await anuncio.save()

        res.json({ result: anuncioPersistido })

    } catch (error) {
        next(error)
    }
})

module.exports = router