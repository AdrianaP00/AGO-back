const Chat = require("../models/chat.models");

const getChats = async (req, res) => {
  try {
    const chats = await Chat.find();
    return res.status(200).json(chats);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getChat = async (req, res) => {
  try {
    const { id } = req.params;
    const chat = await Chat.findById(id);
    return res.status(200).json(chat);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postChat = async (req, res) => {
  try {
    const chat = new Chat(req.body);
    const createdChat = await chat.save();
    return res.status(201).json(createdChat);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putChat = async (req, res) => {
  try {
    const { id } = req.params;
    const chat = new Chat(req.body);
    chat._id = id;
    const updatedChat = await Chat.findByIdAndUpdate(id, chat, {
      new: true,
    });
    if (!updatedChat) {
      return res.status(404).json({ message: "ops! we don't have this id" });
    }
    return res.status(200).json(updatedChat);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteChat = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedChat = await Chat.findByIdAndDelete(id);
    if (!deletedChat) {
      return res.status(404).json({ message: "ops! we don't have this id" });
    }
    return res.status(200).json(deletedChat);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getChats, getChat, postChat, putChat, deleteChat };
