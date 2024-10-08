# basicLayeredStructure

## Lýsing
MyApp er einfalt vefforrit sem notar Node.js, Express, EJS, CSS, JS og SQLite til að framkvæma CRUD aðgerðir (Create, Read, Update, Delete) á notendum. Verkefnið notar Layered Structure til að halda kóðanum skipulögðum og auðveldum í viðhaldi.

## Uppsetning

### Forkröfur
- Node.js (mælt með að nota nýjustu útgáfu)
- npm (Node Package Manager)

### Skref til að setja upp verkefnið
1. Klónaðu geymsluna:
    ```bash
    git clone https://github.com/username/myapp.git
    cd myapp
    ```

2. Settu upp nauðsynlegar pakkar:
    ```bash
    npm install
    ```

3. Búðu til `.env` skrá í rót verkefnisins og bættu við eftirfarandi:
    ```plaintext
    DB_PATH=./src/db/database.sqlite
    ```

4. Keyrðu verkefnið:
    ```bash
    node app.js
    ```

5. Opnaðu vafrann þinn og farðu á `http://localhost:3000`.

## Möppuuppbygging

- /src
    - /controllers
        - userController.js
    - /db
        - database.js
    - /models
        - user.js
    - /routes
        - userRoutes.js
    - /services
        - userService.js
    - /views
        - /pages
            - index.ejs
        - /partials
            - header.ejs
- /public
    - /css
        - style.css
    - /images
        - logo.png
    - /js
        - main.js
- .env
- .gitignore
- app.js
- package.json


## Skýringar á Möppum og Skrám

- **/src/controllers**: Inniheldur stjórnunarskrár sem sjá um viðbrögð við beiðnum frá notendum.
- **/src/db**: Geymir skrár sem tengjast gagnagrunninum, eins og stillingar og tengingar.
- **/src/models**: Geymir gagnalíkön sem skilgreina uppbyggingu gagna og samskipti við gagnagrunninn.
- **/src/routes**: Inniheldur leiðaskrár sem skilgreina hvernig beiðnir eru meðhöndlaðar og hvaða stjórnunaraðgerðir eru kallaðar.
- **/src/services**: Inniheldur þjónustulög sem sjá um viðskiptafræðilega rökfræði.
- **/src/views**: Geymir EJS sniðmát sem eru notuð til að búa til HTML síður.
- **/public**: Geymir allar opinberar skrár eins og CSS, myndir og JavaScript skrár sem eru aðgengilegar frá vefþjóninum.
- **.env**: Geymir umhverfisbreytur eins og gagnagrunnstengingar og aðrar stillingar sem þú vilt ekki setja beint í kóðann.
- **.gitignore**: Skilgreinir hvaða skrár og möppur Git á að hunsa.
- **app.js**: Aðalforritsskráin þar sem þú setur upp Express forritið þitt, skilgreinir miðlög og leiðir.
- **package.json**: Inniheldur upplýsingar um verkefnið þitt, eins og nöfn, útgáfur og háð.

## Notkun

### Bæta við notanda
Til að bæta við nýjum notanda, fylltu út formið undir "Add User" og smelltu á "Add User" hnappinn.

### Sækja alla notendur
Allir notendur eru sýndir á heimasíðunni undir "All Users".

### Uppfæra notanda
Til að uppfæra notanda, smelltu á "Edit" hnappinn við hliðina á notandanum sem þú vilt uppfæra og fylltu út nýju upplýsingarnar.

### Eyða notanda
Til að eyða notanda, smelltu á "Delete" hnappinn við hliðina á notandanum sem þú vilt eyða.

### Leita að notanda
Til að leita að notanda, fylltu út ID notandans í "Search User" formið og smelltu á "Search" hnappinn.

## Höfundur
- **Nafn þitt** - GitHub

## Leyfi
Þetta verkefni er leyft undir MIT leyfinu - sjá LICENSE skrána fyrir frekari upplýsingar.
