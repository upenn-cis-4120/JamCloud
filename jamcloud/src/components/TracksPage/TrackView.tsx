import React, { useState } from 'react';

interface Track {
  id: string;
  name: string;
  color: string;
  isMuted: boolean;
  isSolo: boolean;
}

const TrackView: React.FC = () => {
  const [tracks, setTracks] = useState<Track[]>([
    {
      id: '1',
      name: 'Guitar 1',
      color: 'bg-orange-200',
      isMuted: false,
      isSolo: false
    },
    {
      id: '2',
      name: 'Drums',
      color: 'bg-green-300',
      isMuted: false,
      isSolo: false
    }
  ]);

  return (
    <main className="flex overflow-hidden flex-col pb-9 mx-auto w-full font-semibold bg-stone-900 max-w-[480px] rounded-[34px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
      <header className="flex overflow-hidden gap-9 items-start pt-3 pr-3 w-full border border-black border-solid bg-neutral-600">
        <div className="flex flex-col grow shrink-0 mt-3 basis-0 w-fit">
          <div className="flex gap-5 justify-between items-start text-3xl whitespace-nowrap text-slate-50">
            <span className="text-lg">Final_V9</span>
            <div className="flex space-x-2">
              <button className="p-2 bg-green-600 rounded-md hover:bg-green-700">
                <span>▶</span>
              </button>
              <button className="p-2 bg-zinc-700 rounded-md hover:bg-zinc-600">
                ⬤
              </button>
              <button className="p-2 bg-zinc-700 rounded-md hover:bg-zinc-600">
                ↗
              </button>
              <button className="p-2 bg-zinc-700 rounded-md hover:bg-zinc-600">
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tools */}
      <div className="flex overflow-hidden gap-6 self-start pl-6 text-sm text-white rounded-md border border-black border-solid bg-zinc-800">
        <button className="p-2">✋</button>
        <button className="p-2">↔</button>
        <button className="p-2">↻</button>
        <button className="p-2">?</button>
        <button className="p-2">⋯</button>
        <button className="p-2">△</button>
        <span className="px-2 text-sm">120 BPM</span>
      </div>

      {/* Tracks */}
      <div className="flex-1 overflow-y-auto">
        {tracks.map((track) => (
          <div key={track.id} className="flex flex-col">
            {/* Track Header */}
            <div className="flex overflow-hidden gap-6 self-start pl-6 text-sm text-white rounded-md border border-black border-solid bg-zinc-800">
              <span>{track.name}</span>
              <div className="flex space-x-2">
                <button className={`p-1 rounded ${track.isMuted ? 'bg-red-500' : 'bg-zinc-700'}`}>M</button>
                <button className={`p-1 rounded ${track.isSolo ? 'bg-yellow-500' : 'bg-zinc-700'}`}>S</button>
              </div>
            </div>
            {/* Waveform */}
            <div className={`flex-1 p-4 ${track.color} rounded-md border border-black border-solid`}>
              <div className="h-16 flex items-center">
                <div className="w-full h-12 flex items-center justify-between">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="w-1 h-8 bg-black opacity-50"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Track Button */}
      <button className="mt-2.5 ml-3.5 w-[83px]">
        <div className="p-2 rounded-full bg-orange-500 hover:bg-orange-600">
          +
        </div>
      </button>
    </main>
  );
};

export default TrackView;
