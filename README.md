Objetivos generales :
Contarás con Mongo como sistema de persistencia principal.
Tendrás definidos todos los endpoints para poder trabajar con productos y carritos.
Objetivos específicos :
Profesionalizar las consultas de productos con filtros, paginación y ordenamientos.
Profesionalizar la gestión de carrito para implementar los últimos conceptos vistos.
Formato :
Enlace al repositorio de Github, sin la carpeta de node_modules.
https://github.com/MacaBonavita/proyectoFINALbackendI.git
Tabla de contenidos
Introducción
Instalación
Estructura
Punto final
Conclusiones
Introducción
Este proyecto es la entrega final del curso "Programación Backend I: Desarrollo Avanzado de Backend" de la plataforma Coderhouse. El objetivo del proyecto es desarrollar una aplicación backend utilizando Node.js y varias librerías populares.

Instalación
Requisitos
Node.js (versión 14 o superior)
npm (versión 6 o superior)
Instalación de Node.js
Para instalar Node.js, sigue estos pasos:

Descargue el instalador desde la página oficial de Node.js.
Ejecuta el instalador y sigue las instrucciones en pantalla.
Verifica la instalación ejecutando los siguientes comandos en tu terminal:
node -v
npm -v
Instalación de Librerías
Una vez que Node.js esté instalado, puedes instalar las librerías necesarias para este proyecto. Ejecuta el siguiente comando en la raíz del proyecto:
npm install express express-handlebars mongoose mongoose-paginate-v2 express-validation
Estructura del proyecto
node_modules/ : Contiene las dependencias del proyecto.
src/ : Carpeta principal del código fuente.
rutas/ : Contiene los archivos de rutas.
views/ : Contiene las vistas de la aplicación.
models/ : Contiene los modelos de datos.
data/ : Contiene los archivos de datos.
public/ : Contiene los scripts que se ejecutan en las vistas.
La estructura del proyecto es la siguiente:
BackEnd01_EF/
├── node_modules/
├── src/
│   ├── data/
│   ├── ├── products.json
│   ├── models/
│   ├── ├── cart.model.js
│   ├── ├── product.model.js
│   ├── ├── user.model.js
│   ├── public/
│   ├── ├── js/
│   ├── ├── ├── carts.js
│   ├── ├── ├── index.js
│   ├── ├── ├── products.js
│   ├── ├── ├── tools.js
│   ├── routes/
│   ├── ├── carts.route.js
│   ├── ├── products.route.js
│   ├── ├── users.route.js
│   ├── ├── views.route.js
│   ├── views/
│   ├── ├── layouts/
│   ├── ├── ├── main.handlebars
├── ├── carts.handlebars
├── ├── index.handlebars
├── ├── products.handlebars
├── app.js
├── utils.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md

Puntos finales
A continuación se describen los puntos finales disponibles en la aplicación:

PRESTAR
Estos son los endpoint principales que proporcionan una interfaz al usuario

GET / : Vista inicial de la aplicación
OBTENER /productos : Vista general de la lista de productos disponibles
GET /carts/:cid : Vista general del carrito en específico con sus respectivos productos
ESTADO / JSON
Estos son los endpoints de gestión encargados de las actualizaciones de las entidades y su respuesta se estandariza con el siguiente formato:
{ result : "success/error", payload : [], errors : null }
Estado de petición correcta
200 - OK
Estado de petición incorrecta
400 - Bad Request, 500 - Internal Server Error
A continuación se describe cada uno de los endpoints del proyecto:

CARRITOS
GET /api/carts/:uid : Obtiene el carrito de un usuario en específico
POST /api/carts/ : Inserta el carrito indicando el usuario en el cuerpo de la petición
PUT /api/carts/:cid : Actualiza los productos del carrito especificando un arreglo en el cuerpo
PUT /api/carts/:cid/product/:pid : Actualiza unicamente la cantidad de un producto dentro del carrito
DELETE /api/carts/:cid : Elimina todos los productos del carrito solicitado
DELETE /api/carts/:cid/product/:pid : Elimina un solo producto del carrito solicitado
PRODUCTOS
GET /api/products/?limit : Obtiene todos los productos registrados
GET /api/products/:pid : Obtiene un solo producto especificando su ID
POST /api/products/ : Inserta un producto validando los campos dentro del cuerpo
PUT /api/products/:pid : Actualiza los valores de un producto especificado validando los campos dentro del cuerpo
DELETE /api/products/:pid : Elimina el producto especificando su ID
USUARIOS
GET /api/users/?email : Obtiene el usuario especificando su correo electrónico
POST /api/users/ : Inserta el usuario especificando los datos requeridos dentro del cuerpo
Conclusiones
Este proyecto demuestra el uso de Node.js y varias librerías para desarrollar una aplicación backend robusta. Si tienes alguna pregunta o necesitas más información, no dudes en contactarme. ``` Este archivo README.mdproporciona una guía clara y estructurada para la instalación, estructura y uso del proyecto.
