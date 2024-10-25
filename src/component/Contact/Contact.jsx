import React from "react";
import img1 from "../../assets/contact.png";
import Container from "../Container/Container";

const Contact = () => {
  return (
    <Container id={"Contact"}>
      <section id="contact" className=" py-12 text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Contact Me
          </h2>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2">
              <img
                src={img1}
                alt="Contact Image"
                className="rounded-lg shadow-lg w-96"
              />
            </div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:pl-12">
              <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                  <label
                    className="block text-white text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-slate-950 bg-opacity-45"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-white text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outlinebg bg-slate-950 bg-opacity-45"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-white text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-slate-950 bg-opacity-45"
                    id="message"
                    rows="5"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="mt-2">
                  <a
                    href="mailto:aashisrijal252@gmail.com"
                    className="text-designColor border border-designColor px-6 py-2 rounded-md duration-300 hover:bg-slate-700 hover:text-white"
                  >
                    Send Message
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
