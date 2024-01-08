import React, { useState } from 'react';

interface ImageSelectProps {
  imgSrc1: string;
  imgSrc2: string;
  imgSrc3: string;
  imgSrc4: string;
}

const ImageSelect: React.FC<ImageSelectProps> = ({ imgSrc1, imgSrc2, imgSrc3, imgSrc4 }) => {
  const [path, setPath] = useState<string>(imgSrc1);

  const handleImageClick = (newImagePath: string) => {
    setPath(newImagePath);
  };

  return (
    <div className="mt-4 flex flex-row justify-center items-center gap-3 relative">
      <img src={path} alt="imageAlt" className="h-[410px] rounded-xl" id="bigPic" />
      <div className="flex flex-col gap-3">
        {[
          { id: 1, src: imgSrc1 },
          { id: 2, src: imgSrc2 },
          { id: 3, src: imgSrc3 },
          { id: 4, src: imgSrc4 },
        ].map((image) => (
          <button
            key={image.id}
            className="hover:opacity-50 relative"
            type="button"
            onClick={() => handleImageClick(image.src)}
          >
            <img src={image.src} alt="imageAlt" className="w-[207px] rounded-xl" id={`${image.id}`} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-white">
              View
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSelect;
