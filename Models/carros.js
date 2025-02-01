import {Schema, model } from "mongoose";

const carroSchemas = new Schema({
     modelo: {
      type: String,
      required: true
     },
     preco: {
        type: Number,
        required: true,
     },
     promocao:{
        type: String,
        required: true
     }
})

const carrosModel = model('Carros', carroSchemas)

export {carrosModel}