import React from "react";

const Waiting = () => {
  return (
    <div className="flex items-center justify-center h-screen px-5 md:px-7 lg:px-16 xl:px-20 2xl:px-24">
      <div>
        <h3 className="text-5xl font-bold">Upcoming Events:</h3>
        <p className="text-xl lg:text-3xl mt-5">
          <span className="font-bold">May 27, 2021</span>- Lola Ilda's Funeral Service
        </p>
        <p className="text-xl lg:text-3xl mt-5">
          <span className="font-bold">May 27, 2021</span>- Remembering Lola Ilda Site Launch
        </p>
      </div>
    </div>
  );
};

export default Waiting;
