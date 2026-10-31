export const sanitizeContent = (content) =>
	content
		.replaceAll('<br>', '\n')
		.replaceAll('<div>', '\n')
		.replaceAll('</div>', '')
		.replaceAll('&nbsp;', '');
