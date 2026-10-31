export const getLastPageFromLinks = (links) => {
	if (typeof links !== 'string' || links.length === 0) {
		return 1;
	}

	const lastLinkPart = links
		.split(',')
		.map((part) => part.trim())
		.find((part) => part.includes('rel="last"'));

	if (!lastLinkPart) {
		return 1;
	}

	const match = lastLinkPart.match(/_page=(\d{1,4})&_limit=\d{1,3}>/);

	return match ? Number(match[1]) : 1;
};
