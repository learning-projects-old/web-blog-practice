export const deletePost = (postId) =>
	fetch(`http://localhost:8008/posts/${postId}`, {
		method: 'DELETE',
	});
