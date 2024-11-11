import React, { useEffect, useState } from "react";
import CommentSection from './CommentSection.tsx';
import { Comment, Thread } from './types.ts';
import CommentPopup from './CommentPopup.tsx';
import AudioWaveform from './AudioWaveform.tsx';

const initialThreads: Thread[] = [
  {
    id: '1',
    timeRange: { start: 20, end: 31 },
    createdAt: '2024-10-23T20:13:00',
    comments: [
      {
        id: '1',
        text: "Love the vibe you're going for here! The chords are 🔥. You're definitely the modern day Phill Collins.",
        author: "Srikar",
        date: "10/23/2024",
        time: "8:13PM"
      }
    ]
  },
  {
    id: '2',
    timeRange: { start: 24, end: 29 },
    createdAt: '2024-10-21T02:50:00',
    comments: [
      {
        id: '2',
        text: "Could you try recording a second take of the solo with a bit more distortion?",
        author: "Lincoln",
        date: "10/21/2024",
        time: "2:50AM"
      }
    ]
  },
  {
    id: '3',
    timeRange: { start: 112, end: 117 },
    createdAt: '2024-10-24T15:30:00',
    comments: [
      {
        id: '3',
        text: "The bass line here is incredible! What pedal are you using for that warm tone?",
        author: "Maya",
        date: "10/24/2024",
        time: "3:30PM"
      }
    ]
  },
  {
    id: '4',
    timeRange: { start: 164, end: 170 },
    createdAt: '2024-10-24T09:45:00',
    comments: [
      {
        id: '4',
        text: "This transition is a bit choppy, could you try to smooth it out?",
        author: "Alex",
        date: "10/24/2024",
        time: "9:45AM"
      }
    ]
  }
];

const CommentsPage: React.FC = () => {
  const [threads, setThreads] = useState<Thread[]>(initialThreads);
  const [isSelecting, setIsSelecting] = useState(false);
  const [selectedRange, setSelectedRange] = useState<{ start: number, end: number } | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState<string | null>(null);

  const handleAddThread = (text: string) => {
    if (selectedRange) {
      const newThread: Thread = {
        id: Date.now().toString(),
        timeRange: selectedRange,
        createdAt: new Date().toISOString(),
        comments: [{
          id: Date.now().toString(),
          text,
          author: "You",
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]
      };
      
      const updatedThreads = [...threads, newThread].sort((a, b) => 
        a.timeRange.start - b.timeRange.start
      );
      
      setThreads(updatedThreads);
      setSelectedRange(null);
      setIsPopupOpen(false);
    }
  };

  const handleAddReply = (text: string) => {
    if (selectedCommentId) {
      const updatedThreads = threads.map(thread => {
        const hasComment = thread.comments.some(comment => comment.id === selectedCommentId);
        if (hasComment) {
          return {
            ...thread,
            comments: [...thread.comments, {
              id: Date.now().toString(),
              text,
              author: "You",
              date: new Date().toLocaleDateString(),
              time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
              parentCommentId: selectedCommentId
            }]
          };
        }
        return thread;
      });

      setThreads(updatedThreads);
      setSelectedCommentId(null);
      setIsPopupOpen(false);
    }
  };

  const handleCommentContextMenu = (commentId: string) => {
    setSelectedCommentId(commentId);
    setIsPopupOpen(true);
  };

  const handleSelectionComplete = (start: number, end: number) => {
    setSelectedRange({ start, end });
    setIsSelecting(false);
    setIsPopupOpen(true);
  };

  const handleCommentButtonClick = () => {
    setIsSelecting(true);
  };

  return (
    <main className="flex overflow-hidden flex-col pb-9 mx-auto w-full font-semibold bg-stone-900 max-w-[480px] rounded-[34px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <header className="flex overflow-hidden gap-9 items-start pt-3 pr-3 w-full border border-black border-solid bg-neutral-600">
        <div className="flex flex-col grow shrink-0 mt-3 basis-0 w-fit">
          <div className="flex gap-5 justify-between items-start text-3xl whitespace-nowrap text-slate-50">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/13ff8761494279e119e8c98ea86aafb2ec066ec0806bf371a4facfa96ae90393?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff"
              alt=""
              className="object-contain shrink-0 aspect-[0.93] w-[39px]"
            />
            <h1 className="mt-2.5">COMMENTS</h1>
          </div>
          <div className="flex overflow-hidden gap-6 self-start pl-6 text-sm text-white rounded-md border border-black border-solid bg-zinc-800">
            <span>Guitar 1</span>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d826643b6b672af01c5fc6ef77cad4738a821ab9978d9f5ec05c4b22435a4d7?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff"
              alt=""
              className="object-contain shrink-0 aspect-[0.96] w-[26px]"
            />
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/94fcc9b31e5ea159fa2ad3ba69f1a98629490ca0fdbb653263b63358797120c2?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff"
          alt=""
          className="object-contain shrink-0 aspect-[0.97] w-[66px]"
        />
      </header>
      <AudioWaveform
        audioUrl="/audio/Mk.gee - ROCKMAN (Official Audio) [ ezmp3.cc ].mp3"
        isSelecting={isSelecting}
        onSelectionComplete={handleSelectionComplete}
        onCancel={() => setIsSelecting(false)}
      />
      <CommentSection
        threads={threads}
        onCommentContextMenu={handleCommentContextMenu}
      />
      <button
        onClick={handleCommentButtonClick}
        className={`mt-2.5 ml-3.5 w-[83px] ${isSelecting ? 'opacity-50' : ''}`}
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/120c119e5034932b7734504f0920b04a594d4cba1812dfb3a5fe52eb00be20a2?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff"
          alt="Add comment"
          className="object-contain aspect-[1.04] w-full"
        />
      </button>
      {isPopupOpen && (
        <CommentPopup
          onClose={() => {
            setIsPopupOpen(false);
            setSelectedCommentId(null);
          }}
          onSubmit={selectedCommentId ? handleAddReply : handleAddThread}
          mode={selectedCommentId ? 'reply' : 'new'}
        />
      )}
    </main>
  );
};

export default CommentsPage;