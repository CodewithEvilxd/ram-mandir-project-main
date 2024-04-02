const tipsData = [
  "Free Entry of Everyone",
  "Cameras not allowed",
  "Timings - 7:00 AM to 7:00 PM",
  "Prefer Simple Dress",
  "Require Time - 1-2 hours",
];

const Tips = () => (
  <>
    <div className="py-20">
      <h1 className="font-bold  text-5xl mb-10 text-orange-500 text-center">
        Good to Know
      </h1>
      <div className="grid grid-cols-2 md:grid-flow-col gap-6 px-16">
        {tipsData.map((tip) => {
          return (
            <div className=" text-xl bg-white shadow-lg rounded-md font-bold border border-slate-950 text-center my-6 py-9 px-2 hover:scale-110 transition duration-50 cursor-pointer">
              {tip}
            </div>
          );
        })}
      </div>
    </div>
  </>
);

export default Tips;
