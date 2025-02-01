import express from 'express'
const router = express.Router()
import { atualizarModelo, criarModelo, deletarModelo, lermodelos, lerUmModelo } from '../controllers/chevroletControllers.js';



router.get('/', lermodelos)
router.get('/:id', lerUmModelo)
router.put('/:id', atualizarModelo)
router.post('/', criarModelo);
router.delete('/:id', deletarModelo)



export {router}