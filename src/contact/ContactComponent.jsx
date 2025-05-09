import React from "react";
import ContactItems from "./ContactItems";

const ContactComponent = () => {
  return (
    <section className="py-20 dark:bg-gray-950 dark:text-white text-2xl">
      <div className="container mx-auto px-4">
        <ContactItems />
      </div>
    </section>
  );
};

export default ContactComponent;
