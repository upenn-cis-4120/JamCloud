import React from 'react';
import CommentCard from './CommentCard.tsx';
import { Thread } from './types';

interface CommentSectionProps {
  threads: Thread[];
  onCommentContextMenu: (commentId: string) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({ 
  threads,
  onCommentContextMenu
}) => {
  return (
    <section className="flex flex-col px-6 mt-5 w-full text-base text-white max-h-[500px] overflow-y-auto">
      {threads.map((thread) => (
        <div key={thread.id} className="mb-8">
          {/* Time range indicator */}
          <div className="text-xs text-neutral-400 mb-2">
            {`${String(Math.floor(thread.timeRange.start / 60)).padStart(2, '0')}:${String((thread.timeRange.start % 60).toFixed(0)).padStart(2, '0')} - ${String(Math.floor(thread.timeRange.end / 60)).padStart(2, '0')}:${String((thread.timeRange.end % 60).toFixed(0)).padStart(2, '0')}`}
          </div>
          
          {/* Thread comments */}
          <div className="pl-4 border-l-2 border-neutral-700">
            {thread.comments.map((comment, index) => (
              <div key={comment.id} className="mb-4">
                <CommentCard 
                  comment={comment}
                  onContextMenu={() => onCommentContextMenu(comment.id)}
                  isReply={!!comment.parentCommentId}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default CommentSection;