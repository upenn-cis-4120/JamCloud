import React from 'react';
import Track from './Track.tsx';

const trackData = [
  {
    name: 'Guitar 1',
    color: 'bg-orange-300',
    recordingDate: '01/22/2024 8:59 PM',
    waveformSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6f96b4d6234015bdd40d7a126cc818b13e9fc5aaffb0db682acd5fde439cfcfd?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff'
  },
  {
    name: 'Drums 1',
    color: 'bg-green-300',
    recordingDate: '01/22/2024 8:59 PM',
    waveformSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4dfc3b9f55c601adc4ff1b8b743e81e01f7381609797dc379b645a99a0f64895?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff'
  }
];

const TrackList: React.FC = () => {
  return (
    <section className="flex flex-col">
      {trackData.map((track, index) => (
        <Track key={index} {...track} />
      ))}
    </section>
  );
};

export default TrackList;