import React from 'react';

interface ControlButtonProps {
  icon: string;
  onClick?: () => void;
}

const ControlButton: React.FC<ControlButtonProps> = ({ icon, onClick }) => {
  return (
    <button 
      className="flex overflow-hidden flex-col justify-center items-center self-stretch px-2 my-auto border border-black border-solid bg-stone-900 h-[37px] w-[37px]"
      onClick={onClick}
    >
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 self-stretch my-auto aspect-square w-[37px]" />
    </button>
  );
};

export default ControlButton;