const About = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-around px-5 md:px-7 lg:px-16 xl:px-20 2xl:px-24  py-10"
      style={{ backgroundColor: "#E6E4E8" }}
    >
      <div className="w-1/2 flex-grow mr-10">
        {/* <h3 className="text-6xl" style={{ color: "#C79288" }}>
          Ilda
        </h3> */}

        <p className="w-full  2xl:w-3/4 my-2 text-black text-xl">
          Ilda “Iding” Labitoria Ramos was born on November 10, 1921 in the town of Dao, Capiz,
          Philippines. She was the youngest daughter of Ceriaco Labitoria and Teodora Escalada, and
          beloved sister of Clementia and Pascual.
        </p>
        <p className="w-full  2xl:w-3/4 my-2 text-black text-xl">
          Upon finishing her own education, Iding began teaching primary school in Dao, where she
          worked for over 20 years. During the war time, she met and married the love of her life,
          Leon Ramos, who was also a school teacher. Together, they had three children, Eleanor
          (“Ely”), Mamerto (“Mert”), and Leonilda (“Nene”). Iding and Leon enjoyed life with one
          another in Dao until Leon’s death in 1976.
        </p>
        <p className="w-full  2xl:w-3/4 my-2 text-black text-xl">
          In 1977, Iding immigrated to the United States, joining Mert and Nene and their families
          in Los Angeles, California. Ely would eventually join her there as well. In the U.S.,
          Iding became employed by the Los Angeles County Registrar’s Office. After many years of
          service, she retired in 1999.
        </p>
        <p className="w-full  2xl:w-3/4 my-2 text-black text-xl">
          In her free time, Iding enjoyed reading, completing crossword puzzles, and watching Wheel
          of Fortune. She also loved spending time with her family and friends, especially through
          her favorite past time— playing mahjong! At parties, you could always find her at the
          mahjong table. Over the past few years, she passed on her skills and love for the game,
          teaching her grandchildren and great-grandchildren how to play. They all cherished the
          special time spent with their Lola/Granny.
        </p>
        <p className="w-full  2xl:w-3/4 my-2 text-black text-xl">
          Iding spent her last years under the love and care of her family as was also adored by the
          family dog, James.
        </p>
        <p className="w-full  2xl:w-3/4 my-2 text-black text-xl">
          Iding was known by others to be strong, smart, and independent—well into her old age. She
          was straightforward and always spoke her mind. She could be strict and stern at times, but
          also one to make others laugh and smile. Especially to her family, she was very loving and
          caring in her own special way. With 3 children, 11 grandchildren, and 19
          great-grandchildren, plus 2 more great-grandchildren on the way—Iding lived a long, full
          life and was beloved by all.
        </p>
      </div>
      <div>
        <img src="lola-1.jpg" className=" object-cover w-full lg:max-w-lg 2xl:max-w-7xl" />
        <p className="text-xl" style={{ color: "#C79288" }}>
          If you have a photo you’d like to share with our family, please email them to
          lorenzejay@gmail.com
        </p>
      </div>
    </div>
  );
};

export default About;
