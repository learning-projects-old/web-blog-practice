import { transformUser } from '../transformers';

export const getUsers = async () =>
	await fetch(`http://localhost:8008/users`)
		.then((loadedUsers) => loadedUsers.json())
		.then((loadedUsers) => loadedUsers.map(transformUser));
