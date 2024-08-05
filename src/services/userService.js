// userService.js
const userModel = require('../models/user');

const createUser = async (user) => {
  return await userModel.createUser(user);
};

const getUserById = async (id) => {
  return await userModel.getUserById(id);
};

const updateUser = async (id, user) => {
  return await userModel.updateUser(id, user);
};

const deleteUser = async (id) => {
  return await userModel.deleteUser(id);
};

const getAllUsers = async () => {
  return await userModel.getAllUsers();
};

module.exports = { createUser, getUserById, updateUser, deleteUser, getAllUsers };
