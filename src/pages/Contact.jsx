import React from "react";
import ContactComponent from "../contact/ContactComponent";

const Contact = () => {
  return (
    <section className="dark:bg-gray-950 dark:text-white text-2xl">
      <div className="container mx-auto h-[700px] px-4">
        <ContactComponent />
      </div>
    </section>
  );
};

export default Contact;
