import React from "react";

const Waiting = () => {
  return (
    <>
      <a
        className="flex items-center w-48 justify-center mx-auto bg-pink-300 text-white px-3 py-1 rounded-md my-48 cursor-pointer"
        href="https://share.icloud.com/photos/0Z8HR06vFGZ5VrgJtYd0SFhyw"
        target="_blank"
      >
        View More
      </a>
      <div className="flex items-center justify-center px-5 md:px-7 lg:px-16 xl:px-20 2xl:px-24 pb-24 ">
        <div>
          <h3 className="text-5xl font-bold">Upcoming Events:</h3>
          <p className="text-xl lg:text-3xl mt-5">
            <span className="font-bold">May 27, 2021</span> - Lola Ilda's Funeral Service
          </p>
          <p className="text-xl lg:text-3xl mt-5">
            <span className="font-bold">Funeral Zoom Link</span> -
            <a
              className="text-black underline"
              target="_blank"
              href="https://zoom.us/j/99492942018?pwd=eFdRWUtIYkFrNmg1UDBZQjAxT056Zz09"
            >
              {" "}
              Zoom Link
            </a>
          </p>
          <p className="text-xl lg:text-3xl mt-5">
            <span className="font-bold">May 27, 2021</span> - Remembering Lola Ilda Site Launch
          </p>
        </div>
      </div>
    </>
  );
};

export default Waiting;
