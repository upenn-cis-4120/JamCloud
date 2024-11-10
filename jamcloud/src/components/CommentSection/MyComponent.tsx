import React, { useEffect, useState } from "react";
import CommentSection from './CommentSection.tsx';
import { Comment } from './types';

const comments: Comment[] = [
  {
    text: "Love the vibe you're going for here! The chords are 🔥. You're definitely the modern day Phill Collins.",
    author: "Srikar",
    date: "10/23/2024",
    time: "8:13PM"
  },
  {
    text: "Could you try recording a second take of the solo with a bit more distortion? It might give the section more edge and make it stand out, adding that extra punch we need to drive the energy home.",
    author: "Lincoln",
    date: "10/21/2024",
    time: "2:50AM"
  },
  {
    text: "Thinking of adding a jazzy influence to this part. It could give the song a unique flair without shifting the vibe too much",
    author: "Karthik",
    date: "10/19/2024",
    time: "4:27PM"
  }
];

const MyComponent: React.FC = () => {
    const [comments, setComments] = useState();

    useEffect(() => {
        const defaultComments =   [{
            text: "Love the vibe you're going for here! The chords are 🔥. You're definitely the modern day Phill Collins.",
            author: "Srikar",
            date: "10/23/2024",
            time: "8:13PM"
          },
          {
            text: "Could you try recording a second take of the solo with a bit more distortion? It might give the section more edge and make it stand out, adding that extra punch we need to drive the energy home.",
            author: "Lincoln",
            date: "10/21/2024",
            time: "2:50AM"
          },
          {
            text: "Thinking of adding a jazzy influence to this part. It could give the song a unique flair without shifting the vibe too much",
            author: "Karthik",
            date: "10/19/2024",
            time: "4:27PM"
          }
        ];

        setComments(defaultComments);
    }, []);

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
      <img 
        loading="lazy" 
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/37aaf0d546004718c657c9b41c77712b126e1bb021d068cf714bfb672db1edbb?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff" 
        alt="" 
        className="object-contain w-full aspect-[1.67]" 
      />
      <CommentSection comments={comments} />
    </main>
  );
};

export default MyComponent;