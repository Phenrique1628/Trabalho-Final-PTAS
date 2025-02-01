import { carrosModel } from "../Models/carros.js";

const lermodelos = async (req, res) =>{
    try {
      const carros = await carrosModel.find()
      res.json({
        erro: false,
        carros
      })
    } catch (error) {
        res.json({
            erro: true,
            mensagem: error
        })
    }
};

const lerUmModelo = async (req, res) =>{
    try {
        const {id} = req.params
        const carros = await carrosModel.findById(id);
        if(!carros){
            return res.json({
                erro: true,
                mensagem: 'Carro não encontrado'
            })
        }
        res.json({
            erro: false,
            carros
        })


    } catch (error) {
        return res.json({
            erro: true,
            message: error
        })
    }
 };

 const criarModelo = async (req, res) => {
 try {
    const {modelo, preco, promocao} = req.body;
    if(!modelo || !preco || !promocao){
       return res.json({
       erro: true,
       mensagem: 'Obrigatório preencher todos os campos'
       })
    }

    const carro = new carrosModel({modelo, preco, promocao})
    await carro.save();
    res.json(carro)

 } catch (error) {
    res.json({
        erro: true,
        message: error
    })
 }
};

const atualizarModelo = async (req, res) =>{
  try {
    const {id} = req.params
    const carro = await carrosModel.findByIdAndUpdate(id, req.body, {new: true})

    if(!carro){
        return res.json({  
        erro: true,
        mensagem: 'Esse modelo não foi encontrado'})  
    }
  } catch (error) {
    res.json({
        erro: true,
        message: error
    })
  }
};

const deletarModelo =  async (req, res) =>{
try {
    const {id} = req.params
    const carro = await carrosModel.findByIdAndDelete(id)

    if(!carro){
        return res.json({
            erro: true,
            mensagem: 'Esse modelo não foi encontrado'
        })
    }

    res.json({
        erro: false,
        mensagem: 'Esse modelo foi excluído!'
    })
} catch (error) {
    res.json({
        erro: true,
        message: error
    })
}
};

export {lermodelos, lerUmModelo, criarModelo, atualizarModelo, deletarModelo}
