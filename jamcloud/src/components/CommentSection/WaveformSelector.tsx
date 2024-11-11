import React, { useState, useRef, useEffect } from 'react';

interface WaveformSelectorProps {
  onSelectionComplete: (start: number, end: number) => void;
  onCancel: () => void;
  isSelecting: boolean;
}

const generateWaveformData = () => {
  return Array.from({ length: 40 }, () => {
    const height = Math.random() * 120 + 40;
    return height;
  });
};

const waveformData = generateWaveformData();


const WaveformSelector: React.FC<WaveformSelectorProps> = ({ 
  onSelectionComplete, 
  onCancel,
  isSelecting 
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState<number | null>(null);
  const [currentX, setCurrentX] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('State updated:', { isDragging, startX, currentX, isSelecting });
  }, [isDragging, startX, currentX, isSelecting]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isSelecting) return;
    
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      setStartX(x);
      setCurrentX(x);
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !isSelecting) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      setCurrentX(x);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging || !isSelecting) return;

    if (startX !== null && currentX !== null) {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const start = Math.min(startX, currentX) / rect.width;
        const end = Math.max(startX, currentX) / rect.width;
        onSelectionComplete(start, end);
      }
    }
    resetSelection();
  };

  const resetSelection = () => {
    setIsDragging(false);
    setStartX(null);
    setCurrentX(null);
  };

  useEffect(() => {
    if (!isSelecting) {
      resetSelection();
    }
  }, [isSelecting]);

  return (
    <div className="relative w-full">
      <div 
        ref={containerRef}
        className="relative cursor-crosshair w-full"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg 
          viewBox="0 0 800 200" 
          className="w-full aspect-[1.67] select-none"
          preserveAspectRatio="none"
        >
          {/* Generate 40 bars with random heights */}
          {Array.from({ length: 40 }, (_, i) => {
            // Create random heights between 40 and 160
            const height = waveformData[i];
            const x = (i * 20) + 10; // Space bars evenly
            return (
              <rect
                key={i}
                x={x}
                y={(200 - height) / 2}
                width="6"
                height={height}
                fill="#ef4444" // Red-500 color
                rx="2"
              />
            );
          })}
        </svg>
        {isDragging && startX !== null && currentX !== null && (
          <div 
            className="absolute top-0 bottom-0 bg-orange-500 opacity-80"
            style={{
              left: `${Math.min(startX, currentX)}px`,
              width: `${Math.abs(currentX - startX)}px`,
              height: '100%',
              border: '2px solid #ff6b00'
            }}
          />
        )}
      </div>
      {isSelecting && (
        <div className="absolute top-2 right-2 flex gap-2">
          <button 
            onClick={onCancel}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Cancel
          </button>
          <div className="text-white bg-neutral-800/80 px-3 py-1 rounded">
            Select a section
          </div>
        </div>
      )}
    </div>
  );
};

export default WaveformSelector;