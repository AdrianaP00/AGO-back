const advertisement = require("../models/advertisement.models");

const getAdvertisement = async (req, res) => {
    try {
        const allAdvertisement = await advertisement.find();
        return res.status(200).json(allAdvertisement);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getOneAdvertisement = async (req, res) => {
    try {
        const { id } = req.params
        const oneAdvertisement = await advertisement.findById(id)
        return res.status(200).json(oneAdvertisement)

    } catch (error) {
        return res.status(500).json(error);
    }
};

const postAdvertisement = async (req, res) => {
    try {
        const newAdvertisement = new advertisement({
            ...req.body,
            userId: req.user._id,
        });
        const createAdvertisement = await newAdvertisement.save();
        return res.status(201).json(createAdvertisement);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const putAdvertisement = async (req, res) => {
    try {
        const { id } = req.params
        const putAdvertisement = new advertisement(req.body)
        putAdvertisement._id = id;
        const updateAdvertisement = await advertisement.findByIdAndUpdate(id, putAdvertisement, { new: true })
        if (!updateAdvertisement) {
            return res.status(404).json({ message: "Advertisement not found" });
        }
        return res.status(200).json(updateAdvertisement);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteAdvertisement = async (req, res) => {
    try {
        const { id } = req.params
        const deleteAdvertisement = await advertisement.findByIdAndDelete(id)
        if (!deleteAdvertisement) {
            return res.status(404).json({ message: "Advertisement not found" });
        }
        return res.status(200).json(deleteAdvertisement);
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    getAdvertisement,
    getOneAdvertisement,
    postAdvertisement,
    putAdvertisement,
    deleteAdvertisement,
};