import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cultureData = [
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLLEWxDLBqgHvPEdsMsiO7W5RE3k4CGmNDg&usqp=CAU",
    title: "Festivals: Vibrant Expressions of Faith",
    content:
      "Festivals are like big parties where people celebrate their beliefs and culture. They bring communities together, making everyone happy and connected.",
    url: "https://www.sanatanadharmausa.org/festivals",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzvFnZT4LV84Q6fASykcy7er1Y53cUYgXgg&usqp=CAU",
    title: "Ramayana: Epic Journey of Shree Ram",
    content:
      "Ramayana is an ancient Indian epic narrating Lord Rama's quest to rescue Sita from demon king Ravana. Filled with moral teachings.",
    url: "https://sanskritdocuments.org/sites/valmikiramayan/vr_index.htm",
  },
  {
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC5ag3J4MgUK79V8V9F1o_IfHPsi9UsbEkyA&usqp=CAU",
    title: "Symbols: Unveiling Deeper Meaning",
    content:
      "The sacred syllable OM resonates with cosmic vibrations, guiding seekers on a harmonious journey through life's intricate tapestry.",
    url: "https://static1.squarespace.com/static/5e87bde3b55f46363f3fea35/t/5ee3b8b44c1ced01cdb50f70/1591982262613/SymbolismIntroduction.pdf",
  },
];

const Culture = () => (
  <>
    <section className="py-20">
      <h1 className="font-bold text-5xl mb-10 text-orange-500 text-center">
        Know Your Culture
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 1 }}
        className="flex flex-wrap justify-around gap-6"
      >
        {cultureData.map((culture, index) => {
          const { imageUrl, title, content, url } = culture;
          return (
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.5,
                delay: index * 0.5,
                ease: "easeOut",
              }}
              key={title}
              className="w-72 sm:w-1/3 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto shadow-lg bg-white m-3 p-3 border-2 border-orange-500 hover:scale-110 transition-[300s]"
            >
              <img
                className="rounded-md w-full h-60 border-2 border-orange-500"
                src={imageUrl}
                alt="Festivals"
              />
              <h1 className="font-bold my-4 text-2xl">{title}</h1>
              <p className="font-semibold text-lg mb-4 ">{content}</p>
              <Link to={url} target="_blank">
                <button className="bg-orange-500 text-white mt-2 p-1 rounded-md text-lg py-2 px-6 font-bold">
                  Read More
                </button>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  </>
);

export default Culture;
