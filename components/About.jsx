const About = () => {
  return (
    <div
      className="flex flex-col lg:flex-row px-5 md:px-7 lg:px-16 xl:px-20 2xl:px-24  py-10"
      style={{ backgroundColor: "#E6E4E8" }}
    >
      <div>
        <h3 className="text-6xl" style={{ color: "#C79288" }}>
          Ilda
        </h3>
        <p className="w-3/4 my-2 text-black text-2xl font-bold">Come To Me</p>
        <p className="w-3/4 my-2 text-black text-xl">
          God saw you getting tired, and a cure was not to be, so He put his arms around you, and
          whispered "Come to Me."
        </p>
        <p className="w-3/4 my-2 text-black text-xl">
          With tearful eyes we watched you suffer, and saw you fall away. Although we couldn't bear
          to lose you, we could not ask you to stay. A golden heart stooped beating, hardworking
          hands lay to rest. God broke our hearts to prove to us, that He only takes the best.
        </p>
      </div>
      <div>
        <img src="lola-1.jpg" className=" object-cover" />
        <p className="text-xl" style={{ color: "#C79288" }}>
          If you have a photo you’d like to share with our family, please email them to
          lorenzejay@gmail.com
        </p>
      </div>
    </div>
  );
};

export default About;
