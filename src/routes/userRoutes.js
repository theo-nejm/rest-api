import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não têm necessidade de existir em uma aplicação real
router.get('/', userController.index);
router.get('/:id', userController.show);

// Têm necessidade de existir em uma aplicação real
router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
