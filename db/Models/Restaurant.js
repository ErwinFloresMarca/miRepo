const mongoose = require('./../conection');

const RestaurantSchema = new mongoose.Schema({
    mombre: String, 
    nit: String, 
    propietario: String, 
    calle: String, 
    telefono: String, 
    log: Number, 
    lat: Number, 
    logo: String, 
    fechaderegistro: { type: Date, default: Date.now}, 
    foto_lugar: String
});

const RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);
module.exports = RestaurantModel;