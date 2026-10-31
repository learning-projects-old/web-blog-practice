import { setPostData } from './set-post-data';

export const removeCommentAsync = (requestServer, postId, id) => (dispatch) => {
	requestServer('removePostComment', postId, id).then(({ res: postData }) => {
		dispatch(setPostData(postData));
	});
};
