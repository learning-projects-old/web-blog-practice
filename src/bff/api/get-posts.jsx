import { transformPost } from '../transformers';

export const getPosts = async (searchPhrase, page, limit) =>
	await fetch(
		`http://localhost:8008/posts?title_like=${searchPhrase}&_page=${page}&_limit=${limit}`,
	)
		.then((loadedPosts) =>
			Promise.all([loadedPosts.json(), loadedPosts.headers.get('link')]),
		)
		.then(([loadedPosts, links]) => ({
			posts: loadedPosts.map(transformPost),
			links,
		}));
