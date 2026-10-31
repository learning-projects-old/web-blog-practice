export const transformComment = (dbComment) => ({
	id: dbComment.id,
	authorId: dbComment.author_id,
	postId: dbComment.post_id,
	content: dbComment.content,
	publishedAt: dbComment.published_at,
});
