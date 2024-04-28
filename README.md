README

Este proyecto tiene como objetivo principal proporcionar una experiencia práctica en el manejo de Node.js y Express.js, así como en la interacción con bases de datos MySQL. A través de una serie de ejercicios y la implementación del patrón de diseño Modelo-Vista-Controlador (MVC), los participantes podrán adquirir habilidades en el desarrollo de aplicaciones web.

Objetivos Principales del Proyecto:

    Manejar Node.js: El proyecto se centra en la utilización de Node.js como entorno de ejecución para JavaScript, lo que permite construir aplicaciones del lado del servidor de manera eficiente.

    Entender cómo interactuar con Express.js: Express.js es un marco de aplicación web de Node.js que simplifica el proceso de creación de API y aplicaciones web. Este proyecto proporciona la oportunidad de familiarizarse con su uso y funcionamiento.

    Aprender a manejar Express.js: A través de la creación de rutas, middlewares y el manejo de solicitudes y respuestas, los participantes aprenderán a utilizar Express.js para desarrollar aplicaciones web robustas.

    Manejar NPM: NPM (Node Package Manager) es el sistema de gestión de paquetes para Node.js. En este proyecto, se utilizará NPM para instalar y gestionar dependencias de manera eficiente.

    Aprender a utilizar MySQL con Express: Se explorará la integración de una base de datos MySQL con una aplicación Express.js, permitiendo realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en la base de datos desde la aplicación web.

Endpoints:
Ejercicio 1

    Crear tablas de base de datos: Se crearán las tablas Products y Categories utilizando Express.js y MySQL, incluyendo una tabla intermedia en caso de relación muchos a muchos.

Ejercicio 2

    Crear endpoints para añadir productos y categorías: Se implementarán endpoints para agregar nuevos productos y categorías, permitiendo la creación de datos desde herramientas como Postman.

Ejercicio 3

    Crear endpoints para actualizar productos y categorías: Se desarrollarán endpoints para actualizar la información de productos y categorías existentes en la base de datos.

Ejercicio 4

    Crear endpoints para mostrar y eliminar datos: Se implementarán endpoints para mostrar todos los productos y categorías, así como para seleccionar productos por ID, buscar productos por nombre y eliminar productos por ID.

MVC:

Para mejorar la estructura y modularidad del proyecto, se implementará el patrón de diseño Modelo-Vista-Controlador (MVC).
Configuración:

    Se creará una carpeta config que contendrá un archivo database.js con los datos de conexión a la base de datos. Además, se proporcionará un archivo database.example.js como plantilla sin incluir credenciales sensibles.

Estructura de Carpetas:
Productos

    Se creará un archivo products.js dentro de la carpeta routes que contendrá todas las rutas relacionadas con productos.
    Se desarrollará un controlador ProductController.js que contendrá todas las acciones relacionadas con los productos.

Categorías

    Se creará un archivo categories.js dentro de la carpeta routes que contendrá todas las rutas relacionadas con categorías.
    Se desarrollará un controlador CategoryController.js que contendrá todas las acciones relacionadas con las categorías.

Notas: se ha añadido el archivo database.example.js (dejando database.js en .gitignore) para que cualquier usuario que desee descargar el proyecto, pueda acceder con sus propias credenciales y no tenga acceso a nuestra password personal.

¡Feliz codificación! 🚀