import React from "react";

const ContactForm: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
      {/* Form */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque
          ultrices tristique amet erat vitae eget dolor lobortis quis bibendum
          quam.
        </p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-md focus:ring focus:ring-pink-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-md focus:ring focus:ring-pink-300"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border rounded-md focus:ring focus:ring-pink-300"
          />
          <textarea
            placeholder="Type Your Message"
            className="w-full p-3 border rounded-md focus:ring focus:ring-pink-300"
            rows={5}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-pink-500 text-white rounded-lg shadow-md hover:bg-pink-600"
          >
            Send Mail
          </button>
        </form>
      </div>

      {/* Illustration */}
      <div className="flex justify-center">
        <img
          src="/c1.png"
          alt="Contact Illustration"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default ContactForm;
