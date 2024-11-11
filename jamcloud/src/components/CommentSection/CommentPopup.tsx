import React, { useState } from 'react';

interface CommentPopupProps {
  onClose: () => void;
  onSubmit: (text: string) => void;
  mode: 'new' | 'reply';
  replyingTo?: {
    author: string;
    text: string;
  };
}

const CommentPopup: React.FC<CommentPopupProps> = ({ 
  onClose, 
  onSubmit, 
  mode,
  replyingTo 
}) => {
  const [comment, setComment] = useState('');
  const [isTextMode, setIsTextMode] = useState(true);

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
          {/* Header */}
          <div className="flex justify-between items-center">
            <h3 className="text-white text-lg">
              {mode === 'reply' ? 'Reply to Comment' : 'New Comment'}
            </h3>
            <div className="flex gap-4">
              <button
                className={`text-white ${isTextMode ? 'text-orange-400' : ''}`}
                onClick={() => setIsTextMode(true)}
              >
                TEXT
              </button>
              <button
                className={`text-white ${!isTextMode ? 'text-orange-400' : ''}`}
                onClick={() => setIsTextMode(false)}
              >
                AUDIO
              </button>
            </div>
          </div>

          {/* Reply Preview */}
          {mode === 'reply' && replyingTo && (
            <div className="bg-neutral-700 p-2 rounded text-sm">
              <p className="text-orange-400">{replyingTo.author}</p>
              <p className="text-white truncate">{replyingTo.text}</p>
            </div>
          )}

          {/* Comment Input */}
          {isTextMode ? (
            <textarea
              className="w-full h-32 bg-neutral-700 text-white p-2 rounded resize-none"
              placeholder={mode === 'reply' ? "Write a reply..." : "Type something..."}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          ) : (
            <div className="w-full h-32 bg-neutral-700 rounded flex items-center justify-center">
              <button className="text-white bg-neutral-600 p-2 rounded">
                Record Audio
              </button>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-between">
            <button
              className="text-red-500 hover:text-red-400 transition-colors"
              onClick={onClose}
            >
              CANCEL
            </button>
            <button
              className="bg-orange-400 px-4 py-1 rounded hover:bg-orange-500 transition-colors disabled:opacity-50"
              onClick={handleSubmit}
              disabled={!comment.trim()}
            >
              {mode === 'reply' ? 'REPLY' : 'POST'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPopup;