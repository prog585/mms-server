import mongoose from 'mongoose';

const assetSchema = mongoose.Schema({
    assetId:String,
    status: String,
    biosName: String,
    deviceType: String,
    make: String,
    model: String,
    serialNumber: String, 
    assignedTo:String,
    deviceLocation: String,
    assignedDate:Date,
    versionOS:String,
    isInstalledESET: Boolean,
    isInstalledOffice360: Boolean,
    lastServiced: Date,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var AssetModel = mongoose.model('AssetModel', assetSchema);

export default AssetModel;