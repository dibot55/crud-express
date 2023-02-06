let express = require('express'); //llamamos al modulo de express

//hacemos una instancia de express
let app = express(); 

//POST usa JSON por lo que hay que decirle a express que use JSON
app.use(express.json());
app.use(express.urlencoded({extended: true})); //para usar urlencoder

//CREATE
//----------------------------------Peticion GET--------------------------------------------------
//GET es obten DAME o TOMA ESTO
//cuando le mandes un get a la raiz / (ejemplo: /facebook.com/) va a ejecutar una funcion que envia un "hola"
//IMPORTANTE se declara una funcion en los parametros para indicarle "oye vas a hacer esto"
app.get('/', function(request, response){
    response.send("Hola mundo"); //.send es envia
});

//READ
//------------------------------------Peticion POST-----------------------------------------------
//POST es te voy a mandar esto de aca,si mandas un formulario html, suscribes algo es un POST. 
//Estas mandando informacion
app.post('/', function(request, response){
    response.send(`Te llamas ${request.body.name}`); 
});

//UPDATE
//------------------------------------Peticion PUT------------------------------------------------
//actualiza un dato que le des con un query
app.put('/', function(request, response){
    response.send(`Has acutalizado el registro numero ${request.body.id}`); //el request.body.id ya viene establecido por express
});

//DELETE
//------------------------------------Peticion DELETE---------------------------------------------
app.delete('/users', function(request, response){//borra los datos en /users no en la raiz /
    response.send(`Has eliminado el registro ${request.query.users}`); 
    //el.query es por los datos que recibimos de la APi tester y el users lo definimos en la misma query
});

//NO hace falta usar Await por que express ya usa uno por defecto

//----------------------------------------------Servidor------------------------------------------
//escucha el puerto 8080
//node js permite definir desde donde estoy parado
let server = app.listen(8080, function(){ //el listen viene de express
    let host = server.address().address; //address() = funcion y .address = parametro
    let port = server.address().port;

    
    console.log("Aplicacion escuchando en http://%s:%s", host, port);//%s:%s es una forma de concatenar
});

