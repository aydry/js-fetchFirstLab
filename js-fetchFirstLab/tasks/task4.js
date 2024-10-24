async function deleteUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Error1');
    }
    return response;
  } catch (error) {
    console.error('Error2:', error);
    return null;
  }
}
module.exports = deleteUser;
