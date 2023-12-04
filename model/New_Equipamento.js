const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Equip = new Schema({

    nome:{
        type: String,
        required: true
    },
    qnt_equip:{
        type: Number,
        required: true
    },
    status:{
       type: String,
       default: "A"
    },
    data_cad:{
        type: Date,
        default: Date.now
    },
    data_update:{
        type: Date,
        default: Date.now
    },
    D_E_L_E_T:{
       type: String,
       default: ""
    }
});
 const Equipamento = mongoose.model("Equipamentos", Equip)

 module.exports = Equipamento