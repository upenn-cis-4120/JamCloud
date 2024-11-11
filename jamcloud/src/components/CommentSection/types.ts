export interface Comment {
    text: string;
    author: string;
    date: string;
    time: string;
    timeRange?: {
      start: number;
      end: number;
    };
  }