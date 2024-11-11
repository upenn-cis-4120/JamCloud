import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions.esm.js';

interface AudioWaveformProps {
  audioUrl: string;
  isSelecting: boolean;
  onSelectionComplete?: (start: number, end: number) => void;
  onCancel?: () => void;
}

const AudioWaveform: React.FC<AudioWaveformProps> = ({
  audioUrl,
  isSelecting,
  onSelectionComplete,
  onCancel
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);
  const regionsRef = useRef<RegionsPlugin | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const regions = RegionsPlugin.create();
    const wavesurfer = WaveSurfer.create({
      container: containerRef.current,
      waveColor: '#ef4444',
      progressColor: '#825855',
      cursorColor: '#ffffff',
      height: 250,
      normalize: true,
      interact: true,
      plugins: [regions],
    });

    regionsRef.current = regions;
    wavesurferRef.current = wavesurfer;

    // Load audio file
    wavesurfer.load(audioUrl).catch((error) => {
      console.error('Error loading audio:', error);
    });

    wavesurfer.on('ready', () => {
      setIsReady(true);
    });

    wavesurfer.on('play', () => setIsPlaying(true));
    wavesurfer.on('pause', () => setIsPlaying(false));

    // Improved cleanup
    return () => {
      if (wavesurfer) {
        // Clear all regions first
        regions.clearRegions();
        // Stop playback
        wavesurfer.pause();
        // Remove all event listeners
        wavesurfer.unAll();
        // Destroy the wavesurfer instance immediately
        wavesurfer.destroy();
        // Clear refs
        wavesurferRef.current = null;
        regionsRef.current = null;
        // Reset state
        setIsReady(false);
        setIsPlaying(false);
      }
    };
  }, [audioUrl]);

  // Handle selection mode
  useEffect(() => {
    if (!wavesurferRef.current || !regionsRef.current || !isReady) return;

    const wavesurfer = wavesurferRef.current;
    const regions = regionsRef.current;

    // Clear any existing regions first
    regions.clearRegions();

    if (isSelecting) {
      const disableDragSelection = regions.enableDragSelection({
        color: 'rgba(237, 194, 168, 0.3)',
        drag: true,
        resize: true,
      });

      const handleRegionCreated = (region: any) => {
        // Listen for when the user finishes dragging
        if (onSelectionComplete) {
            setTimeout(() => {
                regions.clearRegions();
                onSelectionComplete(region.start, region.end);
            }, 100);
        }
    
      };

      regions.on('region-created', handleRegionCreated);
      
      return () => {
        regions.un('region-created', handleRegionCreated);
        regions.clearRegions();
        disableDragSelection();
      };
    }

    return () => {
      regions.clearRegions();
    };
  }, [isSelecting, isReady, onSelectionComplete]);

  const handlePlayPause = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.playPause();
    }
  };

  const handleZoom = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (wavesurferRef.current) {
      const minPxPerSec = Number(e.target.value);
      wavesurferRef.current.zoom(minPxPerSec);
    }
  };

  return (
    <div className="relative w-full">
      <div ref={containerRef} className="w-full" />
      
      <div className="flex justify-between items-center mt-2">
        <div className="flex gap-2 items-center">
          <button
            onClick={handlePlayPause}
            disabled={!isReady}
            className="px-3 py-1 bg-neutral-700 text-white rounded hover:bg-neutral-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>

          <div className="flex items-center gap-2">
            <span className="text-white text-sm">Zoom:</span>
            <input
              type="range"
              min="10"
              max="1000"
              defaultValue="10"
              onChange={handleZoom}
              className="w-24"
            />
          </div>
        </div>

        {isSelecting && (
          <div className="flex gap-2">
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
    </div>
  );
};

export default AudioWaveform;
