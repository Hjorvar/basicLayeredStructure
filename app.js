// app.js
const express = require('express');
const app = express();
require('dotenv').config(); // Þetta þarf að vera efst til að lesa umhverfisbreytur
const userRoutes = require('./src/routes/userRoutes');
const { db } = require('./src/models/user');

app.set('view engine', 'ejs');
app.set('views', './src/views'); // Stilltu slóðina að views möppunni
app.use(express.json());
app.use(express.static('public'));
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.redirect('/api/users');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

/*
Útskýring á kóðanum:

1. `const express = require('express');`
   - Flytur inn Express bókasafnið sem gerir okkur kleift að búa til vefþjónustu.

2. `const app = express();`
   - Býr til nýtt Express forrit.

3. `require('dotenv').config();`
   - Les umhverfisbreytur úr .env skrá (t.d. API lykla, gagnagrunns tengingar).
   - Þetta þarf að vera efst til að lesa umhverfisbreytur.

4. `const userRoutes = require('./src/routes/userRoutes');`
   - Flytur inn leiðir fyrir notendur úr userRoutes skrá.

5. `const { db } = require('./src/models/user');`
   - Flytur inn db hlutinn úr user módeli til að tengjast gagnagrunni.

6. `app.set('view engine', 'ejs');`
   - Setur view engine sem EJS, sem gerir okkur kleift að nota EJS sniðmát.

7. `app.set('views', './src/views');`
   - Stillir slóðina að views möppunni þar sem EJS sniðmátin eru geymd.

8. `app.use(express.json());`
   - Middleware sem gerir okkur kleift að vinna með JSON gögn í beiðnum.

9. `app.use(express.static('public'));`
   - Middleware sem gerir okkur kleift að þjóna static skrám úr public möppunni.

10. `app.use('/api', userRoutes);`
    - Notar userRoutes fyrir allar beiðnir sem byrja á /api.

11. `app.get('/', (req, res) => { res.redirect('/api/users'); });`
    - Þegar notandi fer á rótarslóðina ("/"), þá er hann vísað á "/api/users".

12. `app.listen(3000, () => { console.log('Server is running on port 3000'); });`
    - Setur upp vefþjóninn til að hlusta á port 3000 og prentar skilaboð í console þegar hann er keyrður.
*/