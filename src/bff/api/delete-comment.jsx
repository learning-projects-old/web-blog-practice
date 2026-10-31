export const deleteComment = (commentId) =>
	fetch(`http://localhost:8008/comments/${commentId}`, {
		method: 'DELETE',
	});
