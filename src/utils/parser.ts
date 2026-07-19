import { FacebookRawPost, ParsedPost, FacebookPlace } from '../types/facebook';

export function formatDate(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function getTimeAgo(timestamp: number): string {
  const now = Date.now() / 1000;
  const diffSeconds = Math.floor(now - timestamp);

  if (diffSeconds < 60) return 'just now';
  if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)}m ago`;
  if (diffSeconds < 86400) return `${Math.floor(diffSeconds / 3600)}h ago`;
  if (diffSeconds < 2592000) return `${Math.floor(diffSeconds / 86400)}d ago`;
  if (diffSeconds < 31536000) return `${Math.floor(diffSeconds / 2592000)}mo ago`;
  return `${Math.floor(diffSeconds / 31536000)}y ago`;
}

export function extractPostText(rawPost: FacebookRawPost): string {
  if (!rawPost.data || rawPost.data.length === 0) return '';

  const postData = rawPost.data.find(d => d.post);
  if (!postData || !postData.post) return '';

  // Clean up the post text
  return postData.post.trim();
}

export function extractImages(rawPost: FacebookRawPost): string[] {
  const images: string[] = [];

  if (!rawPost.attachments) return images;

  rawPost.attachments.forEach(attachment => {
    if (attachment.data) {
      attachment.data.forEach(data => {
        if (data.media && data.media.uri) {
          images.push(data.media.uri);
        }
      });
    }
  });

  return images;
}

export function extractPlaces(rawPost: FacebookRawPost): FacebookPlace[] {
  const places: FacebookPlace[] = [];

  if (!rawPost.attachments) return places;

  rawPost.attachments.forEach(attachment => {
    if (attachment.data) {
      attachment.data.forEach(data => {
        if (data.place) {
          places.push(data.place);
        }
      });
    }
  });

  return places;
}

export function extractEvents(rawPost: FacebookRawPost) {
  const events = [];

  if (!rawPost.attachments) return events;

  rawPost.attachments.forEach(attachment => {
    if (attachment.data) {
      attachment.data.forEach(data => {
        if (data.event) {
          events.push(data.event);
        }
      });
    }
  });

  return events;
}

export function isMemoryPost(rawPost: FacebookRawPost): boolean {
  return rawPost.title.includes('memory') || rawPost.title.toLowerCase().includes('memory');
}

export function parsePost(rawPost: FacebookRawPost, index: number): ParsedPost {
  const text = extractPostText(rawPost);
  const images = extractImages(rawPost);
  const places = extractPlaces(rawPost);
  const events = extractEvents(rawPost);
  const isMemory = isMemoryPost(rawPost);

  return {
    id: `post-${rawPost.timestamp}-${index}`,
    text,
    timestamp: rawPost.timestamp,
    date: formatDate(rawPost.timestamp),
    timeAgo: getTimeAgo(rawPost.timestamp),
    images,
    places,
    events,
    isMemory
  };
}

export function parseFacebookData(rawData: FacebookRawPost[]): ParsedPost[] {
  return rawData
    .map((post, index) => parsePost(post, index))
    .filter(post => post.text || post.images.length > 0)
    .sort((a, b) => b.timestamp - a.timestamp);
}

export function extractPhotos(posts: ParsedPost[]) {
  const photos: Array<{
    id: string;
    uri: string;
    timestamp: number;
    alt: string;
  }> = [];
  let photoId = 0;

  posts.forEach(post => {
    post.images.forEach(uri => {
      photos.push({
        id: `photo-${photoId++}`,
        uri,
        timestamp: post.timestamp,
        alt: post.text.substring(0, 50) || 'Photo'
      });
    });
  });

  return photos;
}
