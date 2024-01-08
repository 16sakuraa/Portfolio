
import React from 'react';

interface CatCard {
    img : string;
    name : string;
    age : string;
    
}

const CatCard: React.FC<CatCard> = ({img,name,age}) => {
  return (
    <div className="flex flex-col h-[400px] w-[350px] rounded-lg text-3xl items-center justify-center font-itim text-white">
                    <div className="">
                        <img src={img} className="h-[300px] rounded-lg"></img>
                    </div>

                    <div className="flex flex-row text-3xl mt-2">
                        {name}
                    </div>

                    <div className="flex flex-row text-2xl">
                        Age : {age} Year(s)
                    </div>
    </div>
  );
};

export default CatCard;
