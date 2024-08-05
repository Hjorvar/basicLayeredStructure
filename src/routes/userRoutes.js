// userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);
router.get('/users', userController.getAllUsers);

module.exports = router;

/*
Útskýring á kóðanum:

1. `const express = require('express');`
   - Flytur inn express.

2. `const router = express.Router();`
   - Býr til nýjan router.

3. `const userController = require('../controllers/userController');`
   - Flytur inn userController sem inniheldur stjórnunaraðgerðir fyrir notendur.

4. `router.post('/users', userController.createUser);`
   - Skilgreinir POST leið til að búa til nýjan notanda.
   - Þegar POST beiðni er send á `/users`, er createUser aðgerðin í userController kölluð.

5. `router.get('/users/:id', userController.getUser);`
   - Skilgreinir GET leið til að sækja notanda eftir ID.
   - Þegar GET beiðni er send á `/users/:id`, er getUser aðgerðin í userController kölluð.

6. `router.put('/users/:id', userController.updateUser);`
   - Skilgreinir PUT leið til að uppfæra notanda eftir ID.
   - Þegar PUT beiðni er send á `/users/:id`, er updateUser aðgerðin í userController kölluð.

7. `router.delete('/users/:id', userController.deleteUser);`
   - Skilgreinir DELETE leið til að eyða notanda eftir ID.
   - Þegar DELETE beiðni er send á `/users/:id`, er deleteUser aðgerðin í userController kölluð.

8. `router.get('/users', userController.getAllUsers);`
   - Skilgreinir GET leið til að sækja alla notendur.
   - Þegar GET beiðni er send á `/users`, er getAllUsers aðgerðin í userController kölluð.

9. `module.exports = router;`
   - Flytur út router svo hann sé aðgengilegur í öðrum skrám.
*/