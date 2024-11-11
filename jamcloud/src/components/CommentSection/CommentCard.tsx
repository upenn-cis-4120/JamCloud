import React from 'react';
import { Comment } from './types';

interface CommentCardProps {
  comment: Comment;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment }) => {
  return (
    <>
      <div className="px-3 py-4 max-w-full rounded-3xl bg-neutral-600 w-[353px] break-words">
        {comment.text}
      </div>
      <div className="flex gap-5 justify-between self-center w-full text-xs max-w-[318px] text-neutral-600">
        <div className="self-start">
          {`${comment.author} - ${comment.date} - ${comment.time}`}
        </div>
        <img 
          loading="lazy" 
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7f3585df7b8029baa9905d37026ac329e75206478d5ef8bc5ea3ad2300095cf?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff" 
          alt="" 
          className="object-contain shrink-0 w-12 aspect-[1.78]" 
        />
      </div>
    </>
  );
};

export default CommentCard;