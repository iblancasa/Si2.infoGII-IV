

var models = global.models;
var db = global.mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', function (callback) {

var nuevoUsuario = new models.usuarios({
        idUsuario:'abcdef',
        fotoPerfil:'http://127.0.0.1',
        fotoHeader:'http://127.0.0.1',
        token: 'zwyx',
        empresa:'IV',
        nombre: 'prueba',
        estado:'Offline'
});

 nuevoUsuario.save(function(err, nuevoUsuario) {
    if (err)
        return console.error(err);
    console.dir(nuevoUsuario);
      });

var nuevaEmpresa = new models.empresa({
    nombre: 'IV',
});
     nuevaEmpresa.save(function(err, nuevaEmpresa) {
    if (err)
        return console.error(err);
    console.dir(nuevaEmpresa);
      });

    });
