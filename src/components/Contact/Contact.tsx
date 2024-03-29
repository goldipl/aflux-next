import React from "react";

import "@/components/Contact/contact.scss";

const Contact = () => {
  return (
    <div className="flex bg-green-50 w-full justify-center" id="contact">
      <div className="flex flex-col container mx-xl lg:py-24 justify-center items-center">
        <h1 className="text-black font-regular text-center text-2xl lg:text-4xl mt-12 mb-12 lg:mb-20 lg:mt-0">
          - Kontakt -
        </h1>
        <div className="relative flex flex-col lg:flex-row justify-between items-center w-full">
          <div className="flex flex-col border-4 border-green-800 w-full me-0 lg:me-8 h-[200px] px-4 lg:px-12 items-start justify-center shadow-inner">
            <p className="mb-2">
              <strong className="text-black me-4 font-extrabold">
                E-mail:
              </strong>
              <a
                className="text-black hover:text-green-600 text-sm"
                href="mailto:kontakt@aflux.pl"
              >
                kontakt@aflux.pl
              </a>
            </p>
            <p className="mb-2">
              <strong className="text-black me-4 font-extrabold">Tel.:</strong>
              <a
                className="text-black hover:text-green-600 text-sm"
                href="tel:+48 777 999 999"
              >
                +48 777 999 999
              </a>
            </p>
          </div>
          <div className="flex flex-col">
            <iframe
              className="absolute top-0 right-0 w-[40vw] lg:w-[720px] shadow-inner p-0.75 border-4 border-green-800"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156388.35438479282!2d20.92111239761172!3d52.23306532094908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669a869f01%3A0x72f0be2a88ead3fc!2sWarszawa!5e0!3m2!1spl!2spl!4v1668164739561!5m2!1spl!2spl"
              width="800"
              height="200"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
