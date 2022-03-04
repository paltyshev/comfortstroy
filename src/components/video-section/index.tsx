import { tw } from 'twind';
import Preferences from '@/constants/svg/preferences.svg';
import Play from '@/constants/svg/play.svg';
import React, { useState } from 'react';

import ModalVideo from 'react-modal-video';

export default function VideoSection() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section className={tw(`bg-gradient-to-b from-gray-50 to-white shadow-inner`)}>
      <ModalVideo channel="youtube" isOpen={videoOpen} videoId="ckH9YgqV0wQ" onClose={() => setVideoOpen(false)} />
      <div className={tw(`max-w-7xl mx-auto`)}>
        <div className={tw(`flex flex-col max-w-4xl mx-auto pt-28`)}>
          <div className={tw(`w-full`)}>
            <div className={tw(`relative shadow-2xl mx-6 lg:mx-0`)}>
              <Preferences width="100%" height="100%" />
              <button
                onClick={handleClick}
                type="button"
                className={tw(
                  `w-64 lg:w-auto absolute top-full left-1/2 flex items-center transform
                  -translate-y-1/2 -translate-x-1/2 bg-white rounded-full font-medium group p-4 shadow-xl`,
                )}
                aria-label="play video"
              >
                <Play className={tw(`w-6 h-6 fill-current text-gray-400 group-hover:text-yellow-600 flex-shrink-0`)} />
                <span className={tw(`ml-3`)}>Видео ремонта (2мин)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}