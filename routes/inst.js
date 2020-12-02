const Consrt = require("../routes/constructor_inst");

class institucion {
    constructor(id_ins,nombre_ins){

        return new Consrt(id_ins,nombre_ins);
    }
}

module.exports = institucion;