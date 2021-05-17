import React from "react";

const Remembering = () => {
  return (
    <div
      className="flex items-center justify-center flex-col pt-40 px-5 md:px-7 lg:px-16 xl:px-20 2xl:px-24"
      style={{ background: "#dceae6" }}
    >
      <main style={{ color: "#C79288" }}>
        <h3 className=" text-3xl text-center">Remembering</h3>
        <h1 className="text-3xl lg:text-6xl 2xl:text-8xl text-center mt-4 mb-7">
          Ilda Labitoria Ramos
        </h1>
        <p className="text-center text-xl md:text-2xl xl:text-3xl">
          November 10, 1921 - April 18, 2021
        </p>
      </main>
      <img src="/mahjongtiles.png" />
    </div>
  );
};

export default Remembering;
