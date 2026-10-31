import { deleteComment, getComments, getPost, getUsers } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const removePostComment = async (hash, postId, commentId) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];
	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещён',
			res: null,
		};
	}

	await deleteComment(commentId);

	const [post, comments, users] = await Promise.all([
		getPost(postId),
		getComments(postId),
		getUsers(),
	]);

	const commentsWithAuthor = comments.map((comment) => {
		const user = users.find(
			({ id }) => Number(id) === Number(comment.authorId),
		);

		return {
			...comment,
			author: user ? user.login : null,
		};
	});

	return {
		error: null,
		res: {
			...post,
			comments: commentsWithAuthor,
		},
	};
};
