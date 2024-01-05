
import React, { useState } from 'react';

interface ImageSelect {
    imgSrc1 : string;
    imgSrc2 : string;
    imgSrc3 : string;
    imgSrc4 : string;
    
}

const ImageSelect: React.FC<ImageSelect> = ({imgSrc1,imgSrc2,imgSrc3,imgSrc4}) => {
  const [path, setPath] = useState<string>(imgSrc1);
  
  const handleImageClick = (newImagePath: string) => {
    setPath(newImagePath);
  };

  return (
    <div className="mt-4 flex flex-row justify-center items-center gap-3">
      <img src={path} alt="imageAlt" className="h-[410px] rounded-xl" id="bigPic"></img>
      <div className="flex flex-col gap-3">
        <button className="hover:opacity-50" type="button" onClick={() => handleImageClick(imgSrc1)}>
          <img src={imgSrc1} alt="imageAlt" className="w-[207px] rounded-xl" id="1"></img>
        </button>
        <button className="hover:opacity-50" type="button" onClick={() => handleImageClick(imgSrc2)}>
          <img src={imgSrc2} alt="imageAlt" className="w-[207px] rounded-xl" id="2"></img>
        </button>
        <button className="hover:opacity-50" type="button" onClick={() => handleImageClick(imgSrc3)}>
          <img src={imgSrc3} alt="imageAlt" className="w-[207px] rounded-xl" id="3"></img>
        </button>
        <button className="hover:opacity-50" type="button" onClick={() => handleImageClick(imgSrc4)}>
          <img src={imgSrc4} alt="imageAlt" className="w-[207px] rounded-xl" id="4"></img>
        </button>
      </div>
    </div>
  );
};

export default ImageSelect;
