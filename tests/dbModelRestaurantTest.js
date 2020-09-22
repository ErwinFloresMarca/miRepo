
const RESTAURANT = require('./../db/Models/Restaurant');

// crear nuevo restaurante
var rest = new RESTAURANT({
    nombre: 'mi restaurante',
    nit: '123',
    propietario: 'yo',
    calle: 'calle',
    telefono: '124214',
    log: 124.1234,
    lat: 123.6533,
    logo: 'milogo.jpg',
    foto_lugar: 'mifotolugar.jpg'
});

rest.save(function (err) {
    if (!err) 
    console.log('Success!')
    mostrar();
});

function mostrar(){
    RESTAURANT.find({}).exec((err,docs)=>{
        if(!err){
            console.log(docs);
        }
    });
}