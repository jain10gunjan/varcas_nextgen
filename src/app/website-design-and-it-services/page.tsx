"use client";
import React, { useState } from "react";

const ITService = () => {
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
      title: "Custom Website Design",
      img: "https://img.freepik.com/free-vector/video-game-developer-concept-illustration_114360-6106.jpg",
      description:
        "Get a stunning, fully customized website tailored to meet your business goals and captivate your target audience.",
    },
    {
      id: 2,
      title: "Management System Website",
      img: "https://img.freepik.com/free-vector/communication-flat-icon_1262-18771.jpg",
      description:
        "Develop robust management system websites that streamline workflows and improve operational efficiency.",
    },
    {
      id: 3,
      title: "Mobile Apps",
      img: "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149024129.jpg",
      description:
        "Build user-friendly and high-performing mobile applications for iOS and Android to boost customer engagement.",
    },
    {
      id: 4,
      title: "Data Analytics",
      img: "https://img.freepik.com/free-vector/data-analyst-oversees-governs-income-expenses-with-magnifier-financial-management-system-finance-software-it-management-tool-concept_335657-1891.jpg",
      description:
        "Leverage data analytics solutions to gain actionable insights, optimize decision-making, and drive business growth.",
    },
    {
      id: 5,
      title: "Software Solutions",
      img: "https://img.freepik.com/free-vector/isometric-cms-concept_23-2148807389.jpg",
      description:
        "Create scalable, efficient, and customized software solutions tailored to solve your unique business challenges.",
    },
    {
      id: 6,
      title: "DevOps Solutions",
      img: "https://img.freepik.com/free-vector/hand-drawn-flat-design-devops-illustration_23-2149375793.jpg",
      description:
        "Streamline your software development lifecycle with DevOps solutions that ensure faster delivery and higher reliability.",
    },
    {
      id: 7,
      title: "Dashboard Development",
      img: "https://img.freepik.com/free-vector/dashboard-interface-user-panel-template_52683-23323.jpg",
      description:
        "Design intuitive and visually appealing dashboards that present key data clearly for better business decisions.",
    },
    {
      id: 8,
      title: "AI ChatBots",
      img: "https://img.freepik.com/free-vector/chatbot-concept-background-with-mobile-device_23-2147829909.jpg",
      description:
        "Implement AI-powered chatbots that enhance customer interactions, provide quick support, and improve user experience.",
    },
    {
      id: 9,
      title: "Landing Pages",
      img: "https://img.freepik.com/free-vector/flat-design-minimal-technology-landing-page_23-2149138461.jpg",
      description:
        "Design high-converting landing pages optimized for lead generation, product launches, and marketing campaigns.",
    },
  ];

  return (
    <div className="max-w-5xl px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-32">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Website Design and IT Services
        </h2>
        <p className="mt-1 text-gray-600">
          Our Services in Website Design and IT Services Niche
        </p>
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

export default ITService;
