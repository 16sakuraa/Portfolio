
import React, { useState } from 'react';

interface CatCard {
    img : string;
    name : string;
    age : string;
    
}

const CatCard: React.FC<CatCard> = ({img,name,age}) => {
  return (
    <div className="flex flex-col bg-slate-100 h-[400px] w-[250px] rounded-lg text-3xl items-center justify-center">
                    <div className="">
                        <img src={img} className="h-[300px] rounded-lg"></img>
                    </div>

                    <div className="flex flex-row text-4xl mt-2">
                        {name}
                    </div>

                    <div className="flex flex-row">
                        Age : {age}
                    </div>
    </div>
  );
};

export default CatCard;
