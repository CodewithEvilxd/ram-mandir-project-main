import React from "react";

const Map = () => {
  return (
    <div className="py-20">
      <h1 className="font-bold  text-5xl mb-10 text-orange-500 text-center">
        How to reach
      </h1>
      <div className="relative mb-8">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56985.22256035257!2d82.1579681171043!3d26.789769240217108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07937e6d2823%3A0x5fc8f683b17f222b!2sAyodhya%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1705850809358!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
