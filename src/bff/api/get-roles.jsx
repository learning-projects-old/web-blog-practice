export const getRoles = async () =>
	fetch('http://localhost:8008/roles').then((loadedRoles) => loadedRoles.json());
