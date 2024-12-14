"use client";
import React, { useState } from "react";
import SteinStore from "stein-js-client";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  // SteinStore instance pointing to your Steinhq sheet
  const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/66936c704d11fd04f013470a"
  );

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Log form data to ensure it's being captured correctly
    console.log("Submitting form with data:");

    // Use SteinStore to append the form data to the sheet

    //console.log("SteinStore response:", response);
    try {
      await store.append("sheet1", [formData]);
      alert("Message sent successfully");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div className="mt-24">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className=" font-semibold text-2xl md:text-4xl md:leading-tight">
            Contact Us
          </h2>
          <p className="mt-1 text-neutral-700">
            Whatever your goal - we will get you there.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Name"
                    required
                  />
                  <label
                    htmlFor="hs-tac-input-name"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-700 text-sm truncate pointer-events-none"
                  >
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="hs-tac-input-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Email"
                    required
                  />
                  <label
                    htmlFor="hs-tac-input-email"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-700 text-sm truncate pointer-events-none"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Company"
                    required
                  />
                  <label
                    htmlFor="hs-tac-input-company"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-700 text-sm truncate pointer-events-none"
                  >
                    Company
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    id="hs-tac-input-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Phone"
                    required
                  />
                  <label
                    htmlFor="hs-tac-input-phone"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-700 text-sm truncate pointer-events-none"
                  >
                    Phone
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="hs-tac-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="peer p-4 block w-full border rounded-lg text-sm placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Tell us about your project"
                    required
                  ></textarea>
                  <label
                    htmlFor="hs-tac-message"
                    className="absolute top-0 start-0 p-4 h-full text-neutral-700 text-sm truncate pointer-events-none"
                  >
                    Tell us about your project
                  </label>
                </div>
              </div>

              <div className="mt-2">
                <p className="text-xs text-neutral-500">
                  All fields are required
                </p>

                <p className="mt-5">
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff8400] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                  >
                    Submit
                    <svg
                      className="shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </p>
              </div>
            </form>
          </div>

          {/* Address and contact details */}
          <div className="space-y-14">
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 size-6 text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="grow">
                <h4 className=" font-semibold">Our address:</h4>

                <address className="mt-1 text-neutral-700 text-sm not-italic">
                  <b>Indore, Madhya Pradesh: </b>A/L- 163 Housing Board Colony
                  Pithampur Indore, Madhya Pradesh 454775.
                  <br />
                  Indore, Madhya Pradesh - 454774
                </address>
                <address className="mt-1 text-neutral-700 text-sm not-italic">
                  <b> Ahemdabad, Gujarat: </b> 303/7 Anand Nagar, NR KRusha SOC,
                  NR 100 Ahemdabad, Gujarat - 380007.
                  <br />
                  Ahemdabad, Gujarat - 380007
                </address>
              </div>
            </div>

            <div className="flex gap-x-5">
              <svg
                className="shrink-0 size-6 text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
              <div className="grow">
                <h4 className=" font-semibold">Email us:</h4>

                <a
                  className="mt-1 text-neutral-700 font-semibold text-sm hover:text-neutral-200 focus:outline-none focus:text-neutral-200"
                  href="#mailto:example@site.co"
                  target="_blank"
                >
                  info@varcasnexgen.com, <br />
                </a>
              </div>
            </div>

            <div className="flex gap-x-5">
              <svg
                className="shrink-0 size-6 text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m3 11 18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
              <div className="grow">
                <h4 className=" font-semibold">Phone no:</h4>
                <p className="mt-1 text-neutral-700">
                  8602758854,
                  <br />
                </p>
                <p className="mt-2"></p>
              </div>
            </div>
            <div className="flex gap-x-5">
              <svg
                className="shrink-0 size-6 text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m3 11 18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
              <div className="grow">
                <h4 className=" font-semibold">Working Hours:</h4>
                <p className="mt-1 text-neutral-700">
                  9:00 AM- 9:00 PM
                  <br />
                </p>
                <p className="mt-2"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
