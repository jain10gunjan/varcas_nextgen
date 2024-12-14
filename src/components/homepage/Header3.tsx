"use client";

import React, { useState } from "react";
import SteinStore from "stein-js-client";
import toast, { Toaster } from "react-hot-toast";

const Header3 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    services: "",
    message: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    toast.success("Please Wait We Are Getting Your Message.");
    e.preventDefault();

    const store = new SteinStore(
      "https://api.steinhq.com/v1/storages/66936c704d11fd04f013470a"
    );

    try {
      await store.append("sheet1", [formData]);
      toast.success("Message sent successfully");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        services: "",
        message: "",
        location: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the message");
    }
  };

  return (
    <div className="relative bg-gradient-to-bl from-orange-100 via-transparent mt-28">
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent">
              Digital Marketing At Ease.
            </p>

            <div className="mt-4 md:mb-12 max-w-2xl">
              <h1 className="mb-4 font-semibold text-gray-800 text-4xl lg:text-5xl">
                Varcas NexGen
              </h1>
              <p className="text-gray-600">
                Varcas NexGen Digital Marketing is a cutting-edge digital
                marketing agency dedicated to helping businesses thrive in the
                online world. With a team of skilled professionals and
                innovative strategies, we offer a comprehensive range of
                services tailored to meet your specific needs and goals.
              </p>
            </div>

            <blockquote className="hidden md:block relative max-w-sm">
              <svg
                className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 size-16 text-gray-200"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                  fill="currentColor"
                />
              </svg>

              <div className="relative z-10">
                <p className="text-xl italic text-gray-800">
                  Empowering Businesses Globally | Digital Marketing Expert |
                  Driving Profitable Growth & Brand Recognition
                </p>
              </div>

              <footer className="mt-3">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="size-8 rounded-full"
                      src="https://media.licdn.com/dms/image/D4D03AQHKOAnZa0Iguw/profile-displayphoto-shrink_800_800/0/1714896273422?e=1726704000&v=beta&t=mE6gtxMuqL49gZS-ab60HFRU8kjrCPgxelQkfrp4RRQ"
                      alt="Founder Image"
                    />
                  </div>
                  <div className="grow ms-4">
                    <div className="font-semibold text-gray-800">
                      Gopal Kushwaha
                    </div>
                    <div className="text-xs text-gray-500">
                      Founder, CEO | Varcas NexGen | 8602758854
                    </div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                <div className="p-4 sm:p-7 flex flex-col bg-white rounded-2xl shadow-lg">
                  <div className="text-center">
                    <h1 className="block text-2xl font-bold text-gray-800">
                      Get In Touch
                    </h1>
                  </div>
                  <div className="mt-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          type="text"
                          name="firstName"
                          id="hs-hero-signup-form-floating-input-first-name"
                          className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                    focus:pt-6
                                                    focus:pb-2
                                                    [&:not(:placeholder-shown)]:pt-6
                                                    [&:not(:placeholder-shown)]:pb-2
                                                    autofill:pt-6
                                                    autofill:pb-2"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                        <label
                          htmlFor="hs-hero-signup-form-floating-input-first-name"
                          className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                                    peer-focus:scale-90
                                                    peer-focus:translate-x-0.5
                                                    peer-focus:-translate-y-1.5
                                                    peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                                                    peer-[:not(:placeholder-shown)]:scale-90
                                                    peer-[:not(:placeholder-shown)]:translate-x-0.5
                                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                                    peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                        >
                          First name
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          name="lastName"
                          id="hs-hero-signup-form-floating-input-last-name"
                          className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                    focus:pt-6
                                                    focus:pb-2
                                                    [&:not(:placeholder-shown)]:pt-6
                                                    [&:not(:placeholder-shown)]:pb-2
                                                    autofill:pt-6
                                                    autofill:pb-2"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                        <label
                          htmlFor="hs-hero-signup-form-floating-input-last-name"
                          className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                                    peer-focus:scale-90
                                                    peer-focus:translate-x-0.5
                                                    peer-focus:-translate-y-1.5
                                                    peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                                                    peer-[:not(:placeholder-shown)]:scale-90
                                                    peer-[:not(:placeholder-shown)]:translate-x-0.5
                                                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                                    peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                        >
                          Last name
                        </label>
                      </div>
                    </div>
                    <div className="relative mt-4">
                      <input
                        type="email"
                        name="email"
                        id="hs-hero-signup-form-floating-input-email"
                        className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                focus:pt-6
                                                focus:pb-2
                                                [&:not(:placeholder-shown)]:pt-6
                                                [&:not(:placeholder-shown)]:pb-2
                                                autofill:pt-6
                                                autofill:pb-2"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label
                        htmlFor="hs-hero-signup-form-floating-input-email"
                        className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                                peer-focus:scale-90
                                                peer-focus:translate-x-0.5
                                                peer-focus:-translate-y-1.5
                                                peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                                                peer-[:not(:placeholder-shown)]:scale-90
                                                peer-[:not(:placeholder-shown)]:translate-x-0.5
                                                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                                peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                      >
                        Email address
                      </label>
                    </div>
                    <div className="relative mt-4">
                      <select
                        name="services"
                        className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                focus:pt-6
                                                focus:pb-2
                                                [&:not(:placeholder-shown)]:pt-6
                                                [&:not(:placeholder-shown)]:pb-2
                                                autofill:pt-6
                                                autofill:pb-2"
                        value={formData.services}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled hidden>
                          Choose a service
                        </option>
                        <option value="Digital Marketing">
                          Digital Marketing
                        </option>
                        <option value="Lead Generation">Lead Generation</option>
                        <option value="Social Media Marketing">
                          Social Media Marketing
                        </option>
                        <option value="Website Development">
                          Website Development
                        </option>
                        <option value="SEO">SEO Services</option>
                      </select>
                      <label
                        className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                                peer-focus:scale-90
                                                peer-focus:translate-x-0.5
                                                peer-focus:-translate-y-1.5
                                                peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                                                peer-[:not(:placeholder-shown)]:scale-90
                                                peer-[:not(:placeholder-shown)]:translate-x-0.5
                                                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                                peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                      >
                        Services
                      </label>
                    </div>
                    <div className="relative mt-4">
                      <textarea
                        name="message"
                        id="hs-hero-signup-form-floating-input-message"
                        className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                focus:pt-6
                                                focus:pb-2
                                                [&:not(:placeholder-shown)]:pt-6
                                                [&:not(:placeholder-shown)]:pb-2
                                                autofill:pt-6
                                                autofill:pb-2"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                      <label
                        htmlFor="hs-hero-signup-form-floating-input-message"
                        className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                                peer-focus:scale-90
                                                peer-focus:translate-x-0.5
                                                peer-focus:-translate-y-1.5
                                                peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                                                peer-[:not(:placeholder-shown)]:scale-90
                                                peer-[:not(:placeholder-shown)]:translate-x-0.5
                                                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                                peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                      >
                        Message
                      </label>
                    </div>
                    <div className="relative mt-4">
                      <input
                        type="text"
                        name="location"
                        id="hs-hero-signup-form-floating-input-location"
                        className="peer p-4 block w-full border-gray-200 rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
                                                focus:pt-6
                                                focus:pb-2
                                                [&:not(:placeholder-shown)]:pt-6
                                                [&:not(:placeholder-shown)]:pb-2
                                                autofill:pt-6
                                                autofill:pb-2"
                        placeholder="Location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                      />
                      <label
                        htmlFor="hs-hero-signup-form-floating-input-location"
                        className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
                                                peer-focus:scale-90
                                                peer-focus:translate-x-0.5
                                                peer-focus:-translate-y-1.5
                                                peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
                                                peer-[:not(:placeholder-shown)]:scale-90
                                                peer-[:not(:placeholder-shown)]:translate-x-0.5
                                                peer-[:not(:placeholder-shown)]:-translate-y-1.5
                                                peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
                      >
                        Location
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="w-full mt-6 py-2 px-4 bg-blue-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-6 md:mt-12 py-3 flex items-center text-sm text-gray-800 gap-x-1.5 after:flex-1 after:border-t after:border-gray-200 after:ms-6">
          <span className="font-semibold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent"></span>
          Individuals and Companies That Trust VarCas NexGen
        </div>

        <div className="flex flex-wrap gap-x-4 sm:gap-x-12  lg:gap-x-20">
          <img
            className="md:w-48 w-24"
            src={`./trineenterprise-removebg-preview.png`}
          />
          <img
            className="md:w-48 w-24"
            src={`./vasudadevcon-removebg-preview.png`}
          />
          <img
            className="md:w-48 w-24"
            src={`./DomaFabricators-removebg-preview.png`}
          />
          <img className="md:w-48 w-24" src={`./raslake.png`} />
          <img className="md:w-48 w-24" src={`./remaxboiler.png`} />
          <img className="md:w-48 w-24" src={`./thomsonboiler.png`} />
          <img className="md:w-48 w-24" src={`./easymedico_cover.png`} />
          <img className="md:w-48 w-24" src={`./Logobankpan.png`} />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Header3;
