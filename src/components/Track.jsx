import React from 'react';

const Track = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden py-24">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://demo.awaikenthemes.com/assets/videos/smart-time-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </section>
  );
};

export default Track;
