import React from 'react';
import { useNavigate } from 'react-router-dom';
import ControlButton from './ControlButton.tsx';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const navigate = useNavigate();

  const handleCommentsClick = () => {
    navigate('/comments'); // or whatever track ID is appropriate
  };

  return (
    <header className="flex overflow-hidden flex-col items-start pt-7 pr-3.5 w-full border border-black border-solid bg-zinc-800 bg-opacity-40">
      <div className="flex gap-2.5 items-center w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/94fcc9b31e5ea159fa2ad3ba69f1a98629490ca0fdbb653263b63358797120c2?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff" alt="" className="object-contain shrink-0 self-stretch aspect-[0.97] w-[66px]" />
        <div className="flex flex-col self-stretch my-auto">
          <h1 className="text-xl text-slate-300">Final_V9</h1>
          <p className="self-start mt-3 text-xs text-green-600">Changes Synced</p>
        </div>
        <div className="flex overflow-hidden gap-2 items-start self-stretch p-1 my-auto text-xs text-gray-400 whitespace-nowrap border border-black border-solid bg-stone-900">
          <span>V7</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/608aba066307ba643b9eb3289ec16da7dedaa77905dee34e5c78a1ca16e1ef1f?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff" alt="" className="object-contain shrink-0 my-auto w-1.5 aspect-[2]" />
        </div>
        <ControlButton icon="https://cdn.builder.io/api/v1/image/assets/TEMP/709b678eae2d8738e82a75d37ef9bebfd4f5aef11f0e15e085968c2643a7a91c?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff" />
        <div className="flex overflow-hidden flex-col justify-center items-center self-stretch px-2 my-auto border border-black border-solid bg-stone-900 h-[37px] w-[37px]">
          <div className="flex shrink-0 bg-gray-400 rounded-full h-[23px] w-[23px]" aria-label="Record button" role="button" tabIndex={0} />
        </div>
        <ControlButton icon="https://cdn.builder.io/api/v1/image/assets/TEMP/496c472edf0dc0616b5150e552649fa351d39e091f41de52030068d513cd0053?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff" />
        <ControlButton 
          icon="https://cdn.builder.io/api/v1/image/assets/TEMP/efa5298171f5d0c0cb759f6bca408825a542f72921296f013028bd7fdff69b3e?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff" 
          onClick={handleCommentsClick}
        />
      </div>
      <nav className="flex gap-2.5 mt-1.5 ml-5">
        <div className="flex gap-2.5 my-auto">
          <ControlButton icon="https://cdn.builder.io/api/v1/image/assets/TEMP/47f9bb12239c2affbad9120a01846fa92ad23176a5036720c2edc3942aa88589?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff" />
          <ControlButton icon="https://cdn.builder.io/api/v1/image/assets/TEMP/099a439d9b115a516e336098a2fa9e626ebb1d39d4130e9aa57bb44a49188c11?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff" />
          <ControlButton icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e5c8353c566c1ecee66e25e0010b62a52648b1a7957ace3907e64ca2871171c5?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff" />
          <ControlButton icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a0ee40810e0e72e503a80c06bf158aaf5cf882b165416cbe66524506b9970e7d?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff" />
        </div>
        <div className="flex gap-1 items-center text-xs whitespace-nowrap text-slate-300">
          <ControlButton icon="https://cdn.builder.io/api/v1/image/assets/TEMP/aafccfad50e2a14e590f2284b4dc0791290655fbbbf20745dabe0eeacc9d9354?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff" />
          <ControlButton icon="https://cdn.builder.io/api/v1/image/assets/TEMP/49e62e3c66dbdf34bf38a0f350321003882d18afbb6faa6f60b4d1379c66f38b?placeholderIfAbsent=true&apiKey=c282f1c67bc141efb15181803dafd5ff" />
          <div className="self-stretch px-3 py-2.5 my-auto border border-black border-solid bg-neutral-600">Tap</div>
          <div className="self-stretch px-3 py-2.5 my-auto border border-black border-solid bg-neutral-600">120</div>
          <div className="self-stretch my-auto text-white">BPM</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;