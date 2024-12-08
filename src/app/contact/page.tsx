import React from "react";
import InformationSection from "@components/InformationSection";
import ContactForm from "@/components/ContactForm";

const ContactUs: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-30">
     

      {/* Information Section */}
      <div className="flex flex-wrap justify-end space-x-10 w-auto,">
        <InformationSection />
      </div>

      {/* Get in Touch Section */}
      <div className="flex justify-end space-x-10 w-full ml-10 mr-10 ">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
