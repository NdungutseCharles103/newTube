export interface IPlayerState {
  isPlaying: boolean;
  progress: number;
  speed: number;
  isMuted: boolean;
  isFullScreen: boolean;
  isPicInPic: boolean;
  volume: number;
  loop: string;
  shuffle: boolean;
}

export type VideoResponse = {
  contents: VideoContent[];
  cursorNext: string;
};

export type VideoContent = {
  type: string;
  video: Video;
};

export type Video = {
  author: Author;
  isLiveNow: boolean;
  lengthSeconds: number;
  publishedTimeText: "Live now" | string;
  stats: Stats;
  thumbnails: Thumbnail[];
  title: string;
  videoId: string;
  captions: any[];
  cards: {
    label: string;
    link: string;
    type: any;
  };
  category: string;
  description: string;
  publishedDate: string;
};

export type Author = {
  avatar: Thumbnail;
  badges: any[];
  title: string;
  canonicalBaseUrl: string;
  channelId: string;
  stats: AuthorStats;
};

export type Stats = {
  views: number;
  likes?: number;
  comments?: number;
};

export type AuthorStats = {
  subscribers: number;
  subscribersText: number;
};

export type Thumbnail = {
  url: string;
  width: number;
  height: number;
};
