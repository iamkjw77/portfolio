'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { IProjectMedia } from '@/types/home';

interface MediaSliderProps {
  media: IProjectMedia[];
  projectName: string;
}

const MediaSlider = ({ media, projectName }: MediaSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!media.length) return null;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const currentMedia = media[currentIndex];

  return (
    <div className="relative w-full h-[400px] md:h-[500px] mb-12 mt-6">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0.5, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 rounded-lg overflow-hidden">
          {currentMedia.type === 'image' ? (
            <img
              src={currentMedia.url}
              alt={`${projectName} ${currentIndex + 1}`}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="relative w-full h-full">
              {!isPlaying && currentMedia.thumbnail && (
                <div className="absolute inset-0 z-10">
                  <img
                    src={currentMedia.thumbnail}
                    alt={`${projectName} 비디오 썸네일`}
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-gray-900" />
                    </div>
                  </button>
                </div>
              )}
              {(isPlaying || !currentMedia.thumbnail) && (
                <video
                  key={currentMedia.url}
                  className="w-full h-full object-contain"
                  controls={false}
                  autoPlay={true}
                  muted
                  loop
                  onEnded={() => setIsPlaying(false)}>
                  <source src={currentMedia.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {media.length > 1 && (
        <>
          <button
            onClick={handlePrevious}
            className="z-200 absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-400 text-white hover:bg-black/50 transition-colors cursor-pointer"
            aria-label="이전">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="z-200 absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-400 text-white hover:bg-black/50 transition-colors cursor-pointer"
            aria-label="다음">
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="z-200 absolute bottom-[-30px] left-1/2 -translate-x-1/2 flex gap-2">
            {media.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-colors border border-gray-300 cursor-pointer ${
                  index === currentIndex ? 'bg-gray-300' : 'bg-white/50'
                }`}
                aria-label={`${index + 1}번으로 이동`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MediaSlider;
