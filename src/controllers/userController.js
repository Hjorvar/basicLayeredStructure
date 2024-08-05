// userController.js
const userService = require('../services/userService');

exports.createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.render('pages/index', { users });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

/*
Útskýring á kóðanum:

1. `const userService = require('../services/userService');`
   - Flytur inn userService sem inniheldur viðskiptafræðilega rökfræði fyrir notendur.

2. `exports.createUser = async (req, res) => { ... };`
   - Skilgreinir aðgerðina createUser sem býr til nýjan notanda.
   - `req` er beiðnin frá viðskiptavininum sem inniheldur gögnin um nýja notandann.
   - `res` er svarið sem við sendum til baka til viðskiptavinarins.

3. `try { ... } catch (err) { ... }`
   - Reynir að framkvæma kóðann í `try` blokkinni og grípur villur í `catch` blokkinni.

4. `const user = await userService.createUser(req.body);`
   - Kallar á createUser aðgerðina í userService með gögnum úr beiðninni (req.body).
   - `await` bíður eftir að aðgerðin klárist áður en haldið er áfram.

5. `res.status(201).json(user);`
   - Skilar nýja notandanum með status 201 (Created) og JSON sniði.

6. `res.status(500).send(err.message);`
   - Ef villa kemur upp, skilar status 500 (Internal Server Error) og villuskilaboðum.

7. `exports.getUser = async (req, res) => { ... };`
   - Skilgreinir aðgerðina getUser sem sækir notanda eftir ID.

8. `const user = await userService.getUserById(req.params.id);`
   - Kallar á getUserById aðgerðina í userService með ID úr beiðninni (req.params.id).

9. `res.json(user);`
   - Skilar notandanum sem JSON.

10. `exports.updateUser = async (req, res) => { ... };`
    - Skilgreinir aðgerðina updateUser sem uppfærir notanda eftir ID.

11. `const user = await userService.updateUser(req.params.id, req.body);`
    - Kallar á updateUser aðgerðina í userService með ID úr beiðninni (req.params.id) og nýjum gögnum (req.body).

12. `exports.deleteUser = async (req, res) => { ... };`
    - Skilgreinir aðgerðina deleteUser sem eyðir notanda eftir ID.

13. `await userService.deleteUser(req.params.id);`
    - Kallar á deleteUser aðgerðina í userService með ID úr beiðninni (req.params.id).

14. `res.status(204).send();`
    - Skilar status 204 (No Content) til að sýna að eyðing tókst.

15. `exports.getAllUsers = async (req, res) => { ... };`
    - Skilgreinir aðgerðina getAllUsers sem sækir alla notendur.

16. `const users = await userService.getAllUsers();`
    - Kallar á getAllUsers aðgerðina í userService til að sækja alla notendur.

17. `res.render('pages/index', { users });`
    - Renderar 'pages/index' sniðmátið með lista af notendum.
*/