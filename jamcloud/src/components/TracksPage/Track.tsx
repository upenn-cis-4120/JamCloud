import React from 'react';

interface TrackProps {
  name: string;
  color: string;
  recordingDate: string;
  waveformSrc: string;
}

const Track: React.FC<TrackProps> = ({ name, color, recordingDate, waveformSrc }) => {
  return (
    <div className="flex overflow-hidden gap-7 justify-between items-center w-full border border-black border-solid bg-neutral-800">
      <div className="flex overflow-hidden gap-1.5 items-start self-stretch py-px my-auto border border-black border-solid bg-neutral-600 w-[107px]">
        <div className={`overflow-hidden px-3 pt-0.5 pb-2.5 text-xs text-black ${color} w-[107px]`}>
          {name}
        </div>
        <div className="flex flex-col items-start w-3.5">
          <label htmlFor={`vol-${name}`} className="text-xs text-gray-400">Vol</label>
          <div className="flex overflow-hidden flex-col pt-1.5 pb-11 mt-2 border border-black border-solid bg-stone-900">
            <input
              type="range"
              id={`vol-${name}`}
              className="flex shrink-0 w-2.5 h-2.5 bg-gray-400 rounded-full"
              aria-label={`Volume for ${name}`}
            />
          </div>
        </div>
        <button className="flex overflow-hidden gap-2.5 items-center p-1 border border-black border-solid bg-stone-900 h-[25px] w-[25px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/70cccd8c698e2a716a8725399d45be67c17418e3ec66c0acaca5f0dfecbb4cf3?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff" alt="" className="object-contain self-stretch my-auto aspect-square w-[19px]" />
        </button>
        <button className="overflow-hidden px-1 text-xs text-gray-400 whitespace-nowrap border border-black border-solid bg-stone-900 h-[25px] w-[25px]">
          Solo
        </button>
        <button className="flex overflow-hidden gap-2.5 items-center p-1.5 border border-black border-solid bg-stone-900 h-[25px] w-[25px]">
          <div className="flex self-stretch my-auto bg-gray-400 rounded-full h-[15px] min-h-[15px] w-[15px]" />
        </button>
      </div>
      <div className={`flex overflow-hidden flex-col self-stretch pr-1.5 pb-2.5 my-auto text-xs text-black ${color} rounded-xl min-w-[240px] w-[267px]`}>
        <div className="overflow-hidden px-2.5 py-1.5 max-w-full border border-black border-solid w-[170px]">
          {`${name} - ${recordingDate}`}
        </div>
        <img loading="lazy" src={waveformSrc} alt={`Waveform for ${name}`} className="object-contain mt-1.5 aspect-[4.08] w-[261px]" />
      </div>
    </div>
  );
};

export default Track;