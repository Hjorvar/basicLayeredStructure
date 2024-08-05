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
