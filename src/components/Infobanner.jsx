import Aarti from "../../public/images/Aarti.jpg";

const aartiSchedule = [
  {
    name: "Jagaran/Shringar Aarti",
    time: "6:30 AM",
  },
  {
    name: "Afternoon Aarti",
    time: "12:00 PM",
  },
  {
    name: "Sandhya Aarti",
    time: "7:30 PM",
  },
];

const Infobanner = () => (
  <>
    <section className="w-full h-[90vh] flex justify-center items-center">
      <img
        src={Aarti}
        className="absolute z-[-1] w-full h-[90vh] object-cover data-te-lazy-load-init data-te-lazy-src"
      />
      <div className="text-center bg-black bg-opacity-60">
        <div className="p-16">
          <h3 className="font-semibold text-3xl my-2 text-white ">
            Ayodhya Temple
          </h3>
          <h1 className="font-bold text-7xl md:text-9xl my-4 text-white tracking-wide">
            Aarti Timings
          </h1>
          <div className="w-full md:w-3/4 text-white mx-auto flex flex-col gap-4 mt-6">
            {aartiSchedule.map((aarti) => {
              return (
                <div className="w-full flex flex-col md:flex-row justify-between text-2xl md:text-3xl">
                  <p className="font-semibold ">{aarti.name}</p>
                  <p className="font-bold">{aarti.time}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  </>
);
export default Infobanner;
