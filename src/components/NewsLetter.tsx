import React from "react";

const Newsletter = () => {
  return (
    <section
      className="relative bg-cover bg-center h-64 flex flex-col justify-center items-center text-center text-white"
      style={{ backgroundImage: "url('/28.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10" />

      {/* Content */}
      <div className="relative z-10 ">
        <h2 className="text-3xl font-bold mb-4 text-[#151875]">
          Get Latest Update By Subscribing to <br />Our Newsletter
        </h2>
        <button className="bg-pink-500 text-white font-medium px-6 py-2 rounded hover:bg-pink-600 transition">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
