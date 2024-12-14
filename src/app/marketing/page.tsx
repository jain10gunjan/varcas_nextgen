"use client";
import React, { useState } from "react";

const Marketing = () => {
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
      title: "Social Media Services",
      img: "https://img.freepik.com/free-vector/infographic-social-media-icons_1045-609.jpg",
      description:
        "We help businesses grow their presence on platforms like Facebook, Instagram, Twitter, and LinkedIn through content creation, management, and engagement strategies.",
    },
    {
      id: 2,
      title: "SEO Services",
      img: "https://img.freepik.com/free-vector/seo-analytics-concept-illustration_114360-9862.jpg",
      description:
        "Improve your website's ranking on search engines and attract organic traffic with tailored SEO strategies, keyword research, and on-page optimization.",
    },
    {
      id: 3,
      title: "Lead Generation",
      img: "https://img.freepik.com/free-vector/marketing-funnel-background_23-2148007810.jpg",
      description:
        "Generate high-quality leads with targeted marketing campaigns, landing pages, and email nurturing strategies to maximize conversions.",
    },
    {
      id: 4,
      title: "Video Ad Marketing",
      img: "https://img.freepik.com/free-vector/hand-drawn-blogger-illustration_23-2149086390.jpg",
      description:
        "Engage your audience with creative video ads that drive awareness, increase views, and deliver measurable ROI across multiple platforms.",
    },
    {
      id: 5,
      title: "Anchor Marketing",
      img: "https://img.freepik.com/free-vector/letter-anchor_1308-84050.jpg",
      description:
        "Build authority for your brand using anchor marketing techniques that enhance brand trust and foster long-term customer loyalty.",
    },
    {
      id: 6,
      title: "Influencer Marketing",
      img: "https://img.freepik.com/free-vector/influencer-recording-new-video-concept_23-2148519049.jpg",
      description:
        "Collaborate with top influencers to boost your brand reach, engagement, and credibility with authentic, engaging content.",
    },
    {
      id: 7,
      title: "Google Ad Market",
      img: "https://img.freepik.com/free-vector/man-advertisement-background_23-2148011476.jpg",
      description:
        "Leverage Google Ads to target the right audience with data-driven campaigns, PPC strategies, and measurable performance insights.",
    },
    {
      id: 8,
      title: "Sales Funnel Marketing",
      img: "https://img.freepik.com/free-vector/funnel-concept-illustration_114360-28514.jpg",
      description:
        "Design effective sales funnels that guide your customers through every stage, from awareness to conversion, for optimal growth.",
    },
  ];

  return (
    <div className="max-w-5xl px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-32">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
          Marketing
        </h2>
        <p className="mt-1 text-gray-600">Our Services in Marketing Niche</p>
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
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default Marketing;
