export interface FacebookPlace {
  name: string;
  coordinate?: {
    latitude: number;
    longitude: number;
  };
  address?: string;
  url?: string;
}

export interface FacebookEvent {
  name: string;
  start_timestamp: number;
  end_timestamp: number;
}

export interface FacebookMedia {
  uri: string;
  creation_timestamp: number;
}

export interface FacebookAttachmentData {
  place?: FacebookPlace;
  event?: FacebookEvent;
  media?: FacebookMedia;
  text?: string;
  external_context?: {
    url: string;
  };
}

export interface FacebookPostData {
  post?: string;
  update_timestamp?: number;
}

export interface FacebookRawPost {
  timestamp: number;
  title: string;
  data: FacebookPostData[];
  attachments?: Array<{
    data: FacebookAttachmentData[];
  }>;
}

export interface ParsedPost {
  id: string;
  text: string;
  timestamp: number;
  date: string;
  timeAgo: string;
  images: string[];
  places: FacebookPlace[];
  events: FacebookEvent[];
  isMemory?: boolean;
}

export interface Friend {
  id: string;
  name: string;
  avatar: string;
  mutualFriends: number;
}

export interface UserProfile {
  name: string;
  bio: string;
  location: string;
  joinDate: string;
  avatar: string;
  coverPhoto: string;
  totalPosts: number;
  joinedYear: number;
}

export interface Photo {
  id: string;
  uri: string;
  timestamp: number;
  alt: string;
}
