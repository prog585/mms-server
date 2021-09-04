import express from 'express';
import mongoose from 'mongoose';

import AssetModel from '../models/assetModel.js';

const router = express.Router();

export const getAssets = async (req, res) => {
  try {
    const assets = await AssetModel.find();

    res.status(200).json(assets);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAsset = async (req, res) => {
  const { id } = req.params;

  try {
    const asset = await AssetModel.findById(id);

    res.status(200).json(asset);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAsset = async (req, res) => {
  const {
    assetId,
    status,
    biosName,
    deviceType,
    make,
    model,
    serialNumber,
    assignedTo,
    deviceLocation,
    assignedDate,
    versionOS,
    isInstalledESET,
    isInstalledOffice365,
    lastServiced,
  } = req.body;
  let newDate = new Date();
  const newAssetModel = new AssetModel({
    assetId,
    status,
    biosName,
    deviceType,
    make,
    model,
    serialNumber,
    assignedTo,
    deviceLocation,
    assignedDate,
    versionOS,
    isInstalledESET,
    isInstalledOffice365,
    lastServiced,
    newDate,
  });

  try {
    await newAssetModel.save();

    res.status(201).json(newAssetModel);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateAsset = async (req, res) => {
  const { id } = req.params;
  const {
    assetId,
    status,
    biosName,
    deviceType,
    make,
    model,
    serialNumber,
    assignedTo,
    deviceLocation,
    assignedDate,
    versionOS,
    isInstalledESET,
    isInstalledOffice365,
    lastServiced,
  } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No asset with id: ${id}`);

  const updatedAsset = {
    assetId,
    status,
    biosName,
    deviceType,
    make,
    model,
    serialNumber,
    assignedTo,
    deviceLocation,
    assignedDate,
    versionOS,
    isInstalledESET,
    isInstalledOffice365,
    lastServiced,
    _id: id,
  };

  await AssetModel.findByIdAndUpdate(id, updatedAsset, { new: true });

  res.json(updatedAsset);
};

export const deleteAsset = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No asset with id: ${id}`);

  await AssetModel.findByIdAndRemove(id);

  res.json({ message: 'Asset deleted successfully.' });
};

export const likeAsset = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No asset with id: ${id}`);

  const asset = await AssetModel.findById(id);
  ///////////custom code///////////
  res.json(asset);
  ///////////custom code End///////////
  ////const updatedAsset = await AssetModel.findByIdAndUpdate(id, { //likeCount: asset.likeCount + 1 }, { new: true });

  // res.json(updatedAsset);
};

export default router;
