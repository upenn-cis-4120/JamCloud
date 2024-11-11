import React, { useState } from 'react';

interface CommentPopupProps {
  onClose: () => void;
  onSubmit: (text: string) => void;
}

const CommentPopup: React.FC<CommentPopupProps> = ({ onClose, onSubmit }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (comment.trim()) {
      onSubmit(comment.trim());
      setComment('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-neutral-800 rounded-lg p-4 w-[300px]">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="text-white">TEXT</div>
            <div className="text-white">AUDIO</div>
          </div>
          <textarea
            className="w-full h-32 bg-neutral-700 text-white p-2 rounded"
            placeholder="Type something......"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="flex justify-between">
            <button
              className="text-red-500"
              onClick={onClose}
            >
              CANCEL
            </button>
            <button
              className="bg-orange-400 px-4 py-1 rounded"
              onClick={handleSubmit}
            >
              POST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPopup;