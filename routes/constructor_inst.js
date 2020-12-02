class institucion{
     
    constructor(
        id_ins=0,
        nombre_ins=" "
    ){
        this.id_ins=id_ins;
        this.nombre_ins=nombre_ins;
    }

    getid_ins(){
        console.log(this.id_ins);
    }

    getnombre_ins(){
        console.log(this.nombre_ins);
    }
}

module.exports = institucion;