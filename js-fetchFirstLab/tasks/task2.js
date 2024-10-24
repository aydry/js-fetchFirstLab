async function createUser(user) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    if (!response.ok) {
      throw new Error('Error1');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error2:', error);
    return null;
  }
}
createUser({ name: "Sam", email: "fjsnfkjns2342@gmail.com" })
  .then(response => console.log(response));
module.exports = createUser;