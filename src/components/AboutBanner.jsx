import RamMandir from "../../public/images/rammandir.jpg";

const AboutBanner = () => (
  <>
    <section className="w-full h-[90vh] flex justify-center items-center">
      <img
        src={RamMandir}
        className="absolute z-[-1] w-full h-[90vh] object-cover data-te-lazy-load-init data-te-lazy-src"
      />
      <div className="bg-black bg-opacity-50 text-center ">
        <div className="p-16">
          <h1 className="font-bold md:text-9xl text-7xl my-6 text-orange-500 text-center">
            Ayodhya
          </h1>
          <h1 className="font-bold text-3xl md:text-4xl mb-4 text-white ">
            Birthplace of Shree Ram
          </h1>
          <p className="text-white font-semibold text-xl md:text-2xl">
            According to the Ramayana, Ayodhya was founded by Manu, the
            progenitor of mankind.
          </p>
        </div>
      </div>
    </section>
  </>
);
export default AboutBanner;
