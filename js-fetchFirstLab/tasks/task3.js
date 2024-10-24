async function updateUser(id, updatedData) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });
    if (!response.ok) {
      throw new Error('Помилка при оновленні даних користувача');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Сталася помилка:', error);
    return null;
  }
}
updateUser(1, { name: 'New Name' })
  .then(updatedUser => console.log(updatedUser));
module.exports = updateUser;