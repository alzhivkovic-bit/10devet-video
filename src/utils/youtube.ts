export function getYoutubeThumbnail(
	url?: string,
	thumbnail?: string
): string {
	if (thumbnail) {
		return thumbnail;
	}

	const match = url?.match(
		/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([^&?/]+)/
	);

	if (match) {
		return `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`;
	}

	return '';
}