export function getYoutubeThumbnail(
    url?: string,
    thumbnail?: string
): string {
    // Ako postoji ručno definisan thumbnail, koristi njega
    if (thumbnail) {
        return thumbnail;
    }

    // Ako nema YouTube URL-a, vrati prazno
    if (!url) {
        return '';
    }

    const match = url.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([^&?/]+)/
    );

    if (match) {
        return `https://img.youtube.com/vi/${match[1]}/maxresdefault.jpg`;
    }

    return '';
}