import React, { useState } from 'react';
import CommentCard from './CommentCard.tsx';
import CommentPopup from './CommentPopup.tsx';
import { Comment } from './types';

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ 
  comments
}) => {
  return (
    <section className="flex flex-col px-6 mt-5 w-full text-base text-white max-h-[500px] overflow-y-auto flex-nowrap">
      {comments.map((comment, index) => (
        <CommentCard 
          key={index} 
          comment={comment}
        />
      ))}
    </section>
  );
};

export default CommentSection;