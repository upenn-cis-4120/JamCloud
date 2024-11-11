import React from 'react';
import Header from './Header.tsx';
import TrackList from './TrackList.tsx';
import AddTrackButton from './AddTrackButton.tsx';

const TracksPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col mx-auto w-full border border-black border-solid bg-stone-900 max-w-[480px] rounded-[34px]">
      <Header />
      <main>
        <TrackList />
      </main>
      <footer className="flex overflow-hidden flex-col items-center px-5 pt-96 pb-10 max-w-full border border-black border-solid bg-neutral-800 w-[107px]">
        <AddTrackButton />
      </footer>
    </div>
  );
};

export default TracksPage;