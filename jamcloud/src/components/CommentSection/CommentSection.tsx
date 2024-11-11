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
            {`${(thread.timeRange.start * 100).toFixed(1)}% - ${(thread.timeRange.end * 100).toFixed(1)}%`}
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