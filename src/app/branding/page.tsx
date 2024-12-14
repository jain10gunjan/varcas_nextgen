"use client";
import React, { useState } from "react";

const page = () => {
  const [activeModal, setActiveModal] = useState<number>(0); // Tracks which modal is open

  // Open specific modal
  const openModal = (serviceId: number) => {
    setActiveModal(serviceId);
  };

  // Close modal
  const closeModal = () => {
    setActiveModal(0);
  };

  const services = [
    {
      id: 1,
      title: "Branding Services",
      img: "https://img.freepik.com/free-vector/brand-words-illustration_53876-26059.jpg",
      description:
        "Build a unique and memorable brand identity that resonates with your audience and sets your business apart from competitors.",
    },
    {
      id: 2,
      title: "Catalogue Design",
      img: "https://img.freepik.com/free-vector/green-leaf-stationery-collection_23-2147579965.jpg",
      description:
        "Design professional and visually appealing catalogues to showcase your products and services effectively.",
    },
    {
      id: 3,
      title: "Graphic Design",
      img: "https://img.freepik.com/free-vector/flat-world-graphics-day-illustration_23-2148880103.jpg",
      description:
        "Create eye-catching graphics that communicate your message clearly and enhance your brand's visual appeal.",
    },
    {
      id: 4,
      title: "Product Branding",
      img: "https://img.freepik.com/free-vector/illustration-business-branding_53876-17832.jpg",
      description:
        "Enhance your product’s identity with packaging, logo design, and branding strategies that make a lasting impression.",
    },
    {
      id: 5,
      title: "Label Design",
      img: "https://img.freepik.com/free-vector/grunge-colorful-distressed-textured-badges-vector-set_53876-85195.jpg",
      description:
        "Design custom labels that reflect your brand's personality while providing essential product information.",
    },
    {
      id: 6,
      title: "Brand Identity",
      img: "https://img.freepik.com/free-vector/id-card-concept-illustration_114360-1417.jpg",
      description:
        "Establish a consistent and cohesive brand identity, from logos to business cards, that builds customer trust and recognition.",
    },
    {
      id: 7,
      title: "Personal Branding",
      img: "https://img.freepik.com/free-vector/employees-cv-candidates-resume-corporate-workers-students-id-isolate-flat-design-element-job-applications-avatars-personal-information_335657-2605.jpg",
      description:
        "Position yourself as an authority in your field with a powerful personal brand tailored to your goals and audience.",
    },
    {
      id: 8,
      title: "Corporate Branding",
      img: "https://img.freepik.com/free-vector/flat-working-day-scene-with-different-business-people_23-2148946792.jpg?t=st=1733823743~exp=1733827343~hmac=45f2f95de0340d34ad4a5eb48f18896312dc46fd16330ae96acf93662fb297e7&w=996",
      description:
        "Craft a professional and reliable corporate brand image that reflects your company’s values and vision.",
    },
    {
      id: 9,
      title: "Service Branding",
      img: "https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg",
      description:
        "Create a distinct and credible service brand that communicates reliability and customer satisfaction.",
    },
    {
      id: 10,
      title: "Event Branding",
      img: "https://img.freepik.com/free-vector/technicians-preparing-audio-equipment-concert_74855-14172.jpg",
      description:
        "Design engaging event branding materials, from banners to visuals, that leave a lasting impact on your audience.",
    },
    {
      id: 11,
      title: "Industrial Branding",
      img: "https://img.freepik.com/free-vector/fuel-industry-refinery-plant_33099-1112.jpg",
      description:
        "Build a strong and reputable brand for your industrial business, focusing on trust, innovation, and quality.",
    },
  ];

  return (
    <div className="max-w-5xl px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-32">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Branding
        </h2>
        <p className="mt-1 text-gray-600">Our Services in Branding Niche</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="text-center cursor-pointer"
            onClick={() => openModal(service.id)} // Open modal for the clicked service
          >
            <img
              className="rounded-full size-24 mx-auto"
              src={service.img}
              alt="Avatar"
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="font-medium text-gray-800">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      {services.map(
        (service) =>
          activeModal === service.id && (
            <div
              key={service.id}
              tabIndex={-1}
              aria-hidden="true"
              className="fixed top-0 left-0 right-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
            >
              <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow ">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                  <h3 className="text-xl font-semibold text-gray-900 ">
                    {service.title} Details
                  </h3>
                  <button
                    onClick={closeModal}
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                  <p className="text-base leading-relaxed text-gray-500 ">
                    {service.description}.
                  </p>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default page;
