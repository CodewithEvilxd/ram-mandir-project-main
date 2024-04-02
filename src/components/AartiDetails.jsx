import React from "react";

const AartiComponent = () => {
  return (
    <div className="container mx-auto py-20 flex flex-col gap-6 lg:flex-row border-b">
      {/* Image */}
      <div className="lg:w-1/2">
        <img
          src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-11/13/full/1699867188-4387.png?im=FeatureCrop,size=(826,465)"
          className="w-full h-full object-cover"
          alt="Aarti Image"
        />
      </div>

      {/* Text content */}
      <div className="lg:w-1/2 lg:pl-4 px-8 md:px-0">
        <h1 className="font-bold text-3xl md:text-5xl m-2 p-2 text-orange-500 text-center">
          About Aarti Pass
        </h1>
        <p className="text-justify text-lg md:text-xl font-semibold">
          To attend the morning Aarti or Shringar Aarti at the Ayodhya Ram
          Temple, it is necessary to book your ticket one day in advance,
          subject to availability. To participate in the Sandhya Aarti, it is
          essential to book your ticket on the same day, with booking
          availability depending on the subject of availability. For Ram Mandir
          Aarti passes, please reach the Camp Office at Shri Ram Janmabhoomi 30
          minutes before the Aarti Time with a valid Government ID Proof.
        </p>
      </div>
    </div>
  );
};

export default AartiComponent;
