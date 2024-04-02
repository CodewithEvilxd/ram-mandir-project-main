import React from "react";
import RamanyaBackground from "../../public/images/RamayanaImage.webp";

const ramayanaData = [
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYjSPiVT77IVwNE7S4eHQLJwqM3OZ2Nthk0BYY6P0qET5IxbfpOa9ODusz7AXlIjWa1g&usqp=CAU",
    title: "Ramanand Sagar's Ramayana",
    content:
      "It is the most popular show in history. It was directed by Ramanand Sagar. The show is based on Valmiki's 'Ramayan' & Tulsidas' 'Ramcharit manas'.",
    link: "https://www.youtube.com/playlist?list=PLFPJRCFRDARSZofcQcV6m7Pu2EAL8_1dv&si=ncnrrCT9IAPw5ovS",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocuMMIJqt4r9EtofjrVPWbrY_WAFnQ9AbOg&usqp=CAU",
    title: "Ramayana - The Epic full movie",
    content:
      "This picture bombed at the box office when it released in theaters back in 2010. Thumping background music, perfect animation.",
    link: "https://youtu.be/Ven2W085g1k?si=_uJbui2HVHVpkA2l",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXupP4oiHwJQY9xgIdxnbaDDLTDIPvB11EHQ&usqp=CAU",
    title: "Ramayana: The Legend of Prince Rama",
    content:
      "This is a 1992 anime film co-produced by Japan and India; produced and directed by Yugo Sako. Beautiful animation makes it amazing.",
    link: "https://www.youtube.com/watch?v=gKcOjnDJfzk",
  },
];

const Ramayana = () => (
  <>
    <section className="py-20 px-8 md:px-16 relative">
      <img
        src={RamanyaBackground}
        className="w-full h-full absolute top-0 left-0 object-cover z-[-2]"
      />
      <div className="w-full h-full absolute top-0 left-0 object-cover bg-black opacity-70 z-[-1]"></div>
      <h1 className="font-bold text-5xl mb-6 text-orange-500 text-center">
        Ramayana Rewind
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:px-16">
        {ramayanaData.map((ramayana) => {
          return (
            <div className="shadow-lg bg-white p-4 flex flex-col h-full">
              <img
                className="flex-1 rounded-md w-full h-48 object-cover"
                src={ramayana.imageUrl}
                alt={ramayana.title}
              />
              <div className="flex-[2] flex flex-col justify-between">
                <div>
                  <h1 className="font-bold text-2xl my-4">{ramayana.title}</h1>
                  <p className="texxt-xl font-semibold mb-6">
                    {ramayana.content}
                  </p>
                </div>
                <a
                  href={ramayana.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 font-bold text-xl border-2 border-orange-500 p-2 w-fit"
                >
                  Watch Now
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  </>
);

export default Ramayana;
