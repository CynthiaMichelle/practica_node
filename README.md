# README

## App NodePop

### Pasos a seguir para ejecutar la app

#### Clonar repositorio

#### Instalación de paquetes y configuración

Inicializar npm 
```sh
 npm init
```

Instalar cross env 
```sh
 npm i cross-env
```

Corregir vulnerabilidades
```sh
npm audit fix --force
```

Instalar nodemon
```sh
npm i nodemon
```

Correr dev
```sh
npm run dev
```

Abrir navegador y pegar URL 
```sh
http://127.0.0.1:3001/
```

#### Instalamos MongoDB y mongoose

Instala MongoDB community edition
-> https://www.mongodb.com/try/download/community

Abriendo el terminal en la aplicación nodepop ejecutar el siguiente comando
```sh
npm install mongoose
```

#### Inicializar base de datos

Para inicializar la aplicación hay que ejecutar el siguiente comando
```sh
npm run initDB
```

#### Ejecución de la app

```sh
npm run dev
```

#### Metodos API

 Tenemos 3 metodos
 
 Delete : Para eliminar anuncios
 Post : Para crea anuncios
 Get : Con posibles filtrados (nombre, venta, precio, tags). Además en nombre y tags es insesible a minusculas y mayuscula

 Por ejemplo esta búsqueda nos devuelve el anuncio de la bicicleta:

 http://127.0.0.1:3001/api/anuncios?nombre=bic