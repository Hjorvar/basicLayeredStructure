// main.js
document.addEventListener('DOMContentLoaded', () => {
  const addUserForm = document.getElementById('addUserForm');
  const searchUserForm = document.getElementById('searchUserForm');
  const userList = document.getElementById('userList');
  const searchResult = document.getElementById('searchResult');

  addUserForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to add user');
    }
  });

  searchUserForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('searchId').value;

    const response = await fetch(`/api/users/${id}`);
    const user = await response.json();

    if (response.ok) {
      searchResult.innerHTML = `<p>${user.name} - ${user.email}</p>`;
    } else {
      searchResult.innerHTML = '<p>User not found</p>';
    }
  });
});

async function editUser(id) {
  const name = prompt('Enter new name:');
  const email = prompt('Enter new email:');
  const password = prompt('Enter new password:');

  const response = await fetch(`/api/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });

  if (response.ok) {
    location.reload();
  } else {
    alert('Failed to update user');
  }
}

async function deleteUser(id) {
  const response = await fetch(`/api/users/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    location.reload();
  } else {
    alert('Failed to delete user');
  }
}

/*
Útskýring á kóðanum:

1. `document.addEventListener('DOMContentLoaded', () => { ... });`
   - Bætir við event listener sem keyrir þegar DOM hefur verið hlaðið.

2. `const addUserForm = document.getElementById('addUserForm');`
   - Sækir formið til að bæta við notanda úr DOM.

3. `const searchUserForm = document.getElementById('searchUserForm');`
   - Sækir formið til að leita að notanda úr DOM.

4. `const userList = document.getElementById('userList');`
   - Sækir lista yfir notendur úr DOM.

5. `const searchResult = document.getElementById('searchResult');`
   - Sækir element til að sýna leitarniðurstöður úr DOM.

6. `addUserForm.addEventListener('submit', async (e) => { ... });`
   - Bætir við event listener fyrir að bæta við notanda.

7. `e.preventDefault();`
   - Kemur í veg fyrir sjálfgefna hegðun formsins.

8. `const name = document.getElementById('name').value;`
   - Sækir nafn notandans úr formi.

9. `const email = document.getElementById('email').value;`
   - Sækir netfang notandans úr formi.

10. `const password = document.getElementById('password').value;`
    - Sækir lykilorð notandans úr formi.

11. `const response = await fetch('/api/users', { ... });`
    - Sendir POST beiðni til að bæta við nýjum notanda.

12. `if (response.ok) { location.reload(); } else { alert('Failed to add user'); }`
    - Endurhleður síðunni ef notandi var bætt við, annars sýnir villuskilaboð.

13. `searchUserForm.addEventListener('submit', async (e) => { ... });`
    - Bætir við event listener fyrir að leita að notanda.

14. `const id = document.getElementById('searchId').value;`
    - Sækir ID notandans úr formi.

15. `const response = await fetch(`/api/users/${id}`);`
    - Sendir GET beiðni til að sækja notanda eftir ID.

16. `const user = await response.json();`
    - Breytir svari frá JSON í JavaScript hlut.

17. `if (response.ok) { searchResult.innerHTML = `<p>${user.name} - ${user.email}</p>`; } else { searchResult.innerHTML = '<p>User not found</p>'; }`
    - Sýnir notandann ef hann fannst, annars sýnir villuskilaboð.

18. `async function editUser(id) { ... }`
    - Skilgreinir aðgerðina editUser til að uppfæra notanda.

19. `const name = prompt('Enter new name:');`
    - Biður notandann um að slá inn nýtt nafn.

20. `const email = prompt('Enter new email:');`
    - Biður notandann um að slá inn nýtt netfang.

21. `const password = prompt('Enter new password:');`
    - Biður notandann um að slá inn nýtt lykilorð.

22. `const response = await fetch(`/api/users/${id}`, { ... });`
    - Sendir PUT beiðni til að uppfæra notanda eftir ID.

23. `if (response.ok) { location.reload(); } else { alert('Failed to update user'); }`
    - Endurhleður síðunni ef notandi var uppfærður, annars sýnir villuskilaboð.

24. `async function deleteUser(id) { ... }`
    - Skilgreinir aðgerðina deleteUser til að eyða notanda.

25. `const response = await fetch(`/api/users/${id}`, { method: 'DELETE' });`
    - Sendir DELETE beiðni til að eyða notanda eftir ID.

26. `if (response.ok) { location.reload(); } else { alert('Failed to delete user'); }`
    - Endurhleður síðunni ef notandi var eytt, annars sýnir villuskilaboð.
*/