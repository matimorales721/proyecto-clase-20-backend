import { Router } from 'express';
import { getAllProducts, getProduct, cargarProducto, actualizarProducto, eliminarProducto } from '../controllers/producto.controller';

const router = Router();

/*
get /api/producto   todos los productos
get /api/producto/:id  trae un producto
post /api/producto cargo un producto
put /api/producto actualizo un producto
delete /api/producto /:id elimino un producto
*/

router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/', cargarProducto);
router.put('/', actualizarProducto);
router.delete('/:id', eliminarProducto);

export default router;