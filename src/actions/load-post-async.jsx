import { setPostData } from './set-post-data';

export const loadPostAsync = (requestServer, postId) => (dispatch) =>
	requestServer('fetchPost', postId).then(({ error, res: postData }) => {
		if (postData) {
			dispatch(setPostData(postData));
		}

		return error;
	});
