async function fetchUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Error1');
    }
    const users = await response.json();
    return users.map(user => {
      return {
        id: user.id,
        name: user.name
      };
    });
  } catch (error) {
    console.error('Error2:', error);
    return [];
  }
}
fetchUsers().then(users => console.log(users));
module.exports = fetchUsers;
