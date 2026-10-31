export const deleteSession = async (sessionId) =>
	fetch(`http://localhost:8008/sessions/${sessionId}`, {
		method: 'DELETE',
	});
