export const deleteUser = (userId) =>
	fetch(`http://localhost:8008/users/${userId}`, {
		method: 'DELETE',
	}).then((userJSON) => userJSON.json());
