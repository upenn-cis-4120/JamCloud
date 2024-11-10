import React from 'react';
import CommentCard from './CommentCard.tsx';
import { Comment } from './types';

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  return (
    <section className="flex flex-col px-6 mt-5 w-full text-base text-white">
      {comments.map((comment, index) => (
        <CommentCard key={index} comment={comment} />
      ))}
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/120c119e5034932b7734504f0920b04a594d4cba1812dfb3a5fe52eb00be20a2?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff" 
        alt="" 
        className="object-contain mt-2.5 ml-3.5 aspect-[1.04] w-[83px]" 
      />
    </section>
  );
};

export default CommentSection;