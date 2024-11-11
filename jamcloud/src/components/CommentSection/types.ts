export interface Comment {
  id: string;
  text: string;
  author: string;
  date: string;
  time: string;
  parentCommentId?: string;
}

export interface Thread {
  id: string;
  timeRange: {
    start: number;
    end: number;
  };
  comments: Comment[];
  createdAt: string;
}

export interface ThreadCollection {
  threads: Thread[];
}