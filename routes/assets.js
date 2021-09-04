import express from 'express';

import { getAssets, getAsset, createAsset, updateAsset, likeAsset, deleteAsset } from '../controllers/assets.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/',auth, getAssets);
router.post('/', auth,createAsset);
router.get('/:id', auth,getAsset);
router.patch('/:id', auth,updateAsset);
router.delete('/:id', auth,deleteAsset);
router.patch('/:id/likeAsset',auth, likeAsset);

export default router;