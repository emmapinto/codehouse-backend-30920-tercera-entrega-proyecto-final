# Desafio Clase 36: 3ra Entrega Proyecto Final

### 1.Asegurese de instalar los módulos correspondientes con el comando "npm i"
### 2.Iniciar proyecto con "node -r dotenv/config cluster.js 8080 cluster"

### Caracteristicas del proyecto:

<ul>
    <li>Para acceder a cada seccion del sitio se debe loguear primero.</li>
    <li>Si no tiene usuario para loguearse, puede registrarse primero. Cada usario es almacenado en la DB de Cloud Atlas y se envia un email a la casilla de Test de Ethereal con el aviso de neuvo registro.</li>
    <li>Una vez logueado, verá en la Home el catálogo de productos. En este momento solo hay 6 productos precargados. Se pueden cargar nuevos productos a través de la seccion Account > Admin.</li>
    <li>Se pueden ver los datos del usuario logueado acecdiendo a Account > Perfil desde el menu principal.</li>
    <li>En la sección Cart se accede al carrito en donde se almacenan los productos seleccionados en la Home.</li>
    <li>Una vez completada la Orden en la seccion Carrito, se almacenará la orden en la DB de Cloud Atlas y se envía un email a la casilla de Test de Ethereal con el usuario y los productos solicitados.</li>
    <li>En la carpeta "notifications" hay 3 capturas que validan la recepción de los emails para nuevos usuarios y para ordenes emitidas a la casilla de test en Ethereal.</li>
    <li>Una vez completada la Orden en la sección Carrito, también se envía un SMS usando Twilio al usuario confirmando que el pedido fue realizado con éxito.</li>
</ul>
