import express from 'express';

import { getAssets, getAsset, createAsset, updateAsset, likeAsset, deleteAsset } from '../controllers/assets.js';

const router = express.Router();

router.get('/', getAssets);
router.post('/', createAsset);
router.get('/:id', getAsset);
router.patch('/:id', updateAsset);
router.delete('/:id', deleteAsset);
router.patch('/:id/likeAsset', likeAsset);

export default router;