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

/*
Útskýring á kóðanum:

1. `const userModel = require('../models/user');`
   - Flytur inn userModel sem inniheldur gagnalíkön og samskipti við gagnagrunninn.

2. `const createUser = async (user) => { ... };`
   - Skilgreinir aðgerðina createUser sem býr til nýjan notanda.

3. `return await userModel.createUser(user);`
   - Kallar á createUser aðgerðina í userModel með gögnum um nýja notandann.

4. `const getUserById = async (id) => { ... };`
   - Skilgreinir aðgerðina getUserById sem sækir notanda eftir ID.

5. `return await userModel.getUserById(id);`
   - Kallar á getUserById aðgerðina í userModel með ID notandans.

6. `const updateUser = async (id, user) => { ... };`
   - Skilgreinir aðgerðina updateUser sem uppfærir notanda eftir ID.

7. `return await userModel.updateUser(id, user);`
   - Kallar á updateUser aðgerðina í userModel með ID notandans og nýjum gögnum.

8. `const deleteUser = async (id) => { ... };`
   - Skilgreinir aðgerðina deleteUser sem eyðir notanda eftir ID.

9. `return await userModel.deleteUser(id);`
   - Kallar á deleteUser aðgerðina í userModel með ID notandans.

10. `const getAllUsers = async () => { ... };`
    - Skilgreinir aðgerðina getAllUsers sem sækir alla notendur.

11. `return await userModel.getAllUsers();`
    - Kallar á getAllUsers aðgerðina í userModel til að sækja alla notendur.

12. `module.exports = { createUser, getUserById, updateUser, deleteUser, getAllUsers };`
    - Flytur út aðgerðirnar svo þær séu aðgengilegar í öðrum skrám.
*/