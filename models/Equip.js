const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Equip = new Schema({
    codigo:{
        type: Number,
        required:true,
        unique: true
       },
    nome:{
        type: String,
        required: true
    },
    qnt_estoque:{
        type: Number,
        required: true
    },
    status:{
       type: String,
       required:true
    },
    data_cad:{
        type: Date,
        default: Date.now()
    },
    data_update:{
        type: Date,
        default: Date.now()
    },
    D_E_L_E_T:{
       type: String,
       default: ""
    }
});
 const Equips = mongoose.model("equip", Equip)

 module.exports = Equips