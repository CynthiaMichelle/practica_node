'use strict'

const Anuncio = require('../models/Anuncio')
const connection = require('../lib/connectMongoose')

// ponemos el .catch para poder controlar el posible error que salga de la promesa y lo pinte por la consola
main().catch(err => console.log('Hubo un error', err))

// al poner async deveulve una promesa, que es una ufncion asincrona 
async function main() {

    // inicializacion coleccion agentes
    await initAnuncios()

    // Cerramos conexion con base de datos
    connection.close()
}

async function initAnuncios() {
    //borrar todos los documentos de la coleccion de agentes
    const deleted = await Anuncio.deleteMany()
    console.log(`Eliminados, ${deleted.deletedCount} anuncios.`)

    //crear agentes iniciales
    const inserted = await Anuncio.insertMany(anuncios)

    console.log(`Creados ${inserted} anuncios`)
}

const anuncios = [
    {
        "nombre": "Bicicleta",
        "venta": true,
        "precio": 230.15,
        "foto": "bici.jpg",
        "tags": [ "lifestyle", "motor"]
    },
    {
        "nombre": "iPhone 3GS",
        "venta": false,
        "precio": 50.00,
        "foto": "iphone.png",
        "tags": [ "lifestyle", "mobile"]
    },
    {
        "nombre": "Kettlebell 12kg",
        "venta": false,
        "precio": 40.00,
        "foto": "",
        "tags": [ "lifestyle", "work"]
    },
    {
        "nombre": "Lampara",
        "venta": false,
        "precio": 35.00,
        "foto": "",
        "tags": [ "lifestyle", "work"]
    },
    {
        "nombre": "Silla Escritorio",
        "venta": true,
        "precio": 110.00,
        "foto": "",
        "tags": [ "work", "lifestyle"]
    },
    {
        "nombre": "Samsung tablet s7",
        "venta": false,
        "precio": 185.00,
        "foto": "",
        "tags": [ "lifestyle", "mobile"]
    }            
]