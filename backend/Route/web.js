import expess from 'express';
const router = expess.Router();
import productController from '../controller/ProductController.js';
import userController from '../controller/UserController.js';

router.post('/createpro',productController.createProduct);
router.get('/getproducts',productController.getProduct);
router.delete('/deleteProduct/:id',productController.deleteProduct);
router.post('/sign',userController.createUser);
router.post('/login',userController.signIn);


export default router;