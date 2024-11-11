import React, { useState } from 'react';
import { Comment } from './types';

interface CommentCardProps {
  comment: Comment;
  onContextMenu: () => void;
  isReply: boolean;
}

const CommentCard: React.FC<CommentCardProps> = ({ comment, onContextMenu, isReply }) => {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenuPosition({ x: e.clientX, y: e.clientY });
    setShowContextMenu(true);
  };

  const handleReply = () => {
    setShowContextMenu(false);
    onContextMenu();
  };

  const handleClickOutside = () => {
    setShowContextMenu(false);
  };

  React.useEffect(() => {
    if (showContextMenu) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [showContextMenu]);

  return (
    <div className={`relative ${isReply ? 'ml-8' : ''}`}>
      <div 
        onContextMenu={handleContextMenu}
        className="px-3 py-4 max-w-full rounded-3xl bg-neutral-600 w-full break-words text-left hover:bg-neutral-500 transition-colors cursor-pointer"
      >
        {comment.text}
      </div>
      <div className="flex gap-5 justify-between self-center w-full text-xs max-w-[318px] text-neutral-600">
        <div className="self-start">
          {`${comment.author} - ${comment.date} - ${comment.time}`}
        </div>
      </div>

      {showContextMenu && (
        <div 
          className="fixed bg-neutral-700 rounded-lg shadow-lg py-2 z-50"
          style={{ 
            top: contextMenuPosition.y, 
            left: contextMenuPosition.x 
          }}
        >
          <button
            onClick={handleReply}
            className="w-full px-4 py-2 text-left text-white hover:bg-neutral-600 transition-colors"
          >
            Reply
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentCard;