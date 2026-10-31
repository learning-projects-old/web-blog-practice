import { transformPost } from '../transformers';

export const updatePost = ({ id, imageUrl, title, content }) =>
	fetch(`http://localhost:8008/posts/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			image_url: imageUrl,
			title,
			content,
		}),
	})
		.then((postJSON) => postJSON.json())
		.then(transformPost);
