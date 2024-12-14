import React from "react";

const AboutUs = () => {
  const aboutData = [
    {
      id: 1,
      heading: "Real Estate Industry",
      data: "The real estate industry focuses on buying, selling, and managing properties, including residential, commercial, and industrial spaces. Our services help streamline property listings, virtual tours, and client management.",
      img: "https://img.freepik.com/free-vector/city-skyline-concept-illustration_114360-8923.jpg",
    },
    {
      id: 2,
      heading: "Health Industry",
      data: "The health industry encompasses hospitals, clinics, and wellness centers. We support healthcare providers with appointment booking systems, telemedicine solutions, and patient management platforms.",
      img: "https://img.freepik.com/free-vector/humanitarian-help-coronavirus-order_23-2148502119.jpg",
    },
    {
      id: 3,
      heading: "Academics/Institutions/Schools/College",
      data: "We cater to educational institutions by developing e-learning platforms, course management systems, and tools for virtual classrooms to enhance student learning experiences.",
      img: "https://img.freepik.com/free-vector/school-building-educational-institution-college_107791-1051.jpg ",
    },
    {
      id: 4,
      heading: "E-commerce",
      data: "The e-commerce industry thrives on online marketplaces. We deliver robust solutions for product catalogs, secure payment gateways, and inventory management to drive sales.",
      img: "https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg",
    },
    {
      id: 5,
      heading: "Financial Service Industry",
      data: "Financial services include banking, insurance, and investment management. We specialize in creating tools for online banking, financial analytics, and secure transaction systems.",
      img: "https://img.freepik.com/free-vector/digital-rupee-symbol-technology-concept-background_1017-42463.jpg",
    },
    {
      id: 6,
      heading: "Hotels and Restaurants",
      data: "We help hotels and restaurants attract customers with booking systems, online menus, and customer feedback platforms, ensuring an excellent hospitality experience.",
      img: "https://img.freepik.com/free-vector/organic-flat-new-normal-hotels-illustration_23-2148920386.jpg",
    },
    {
      id: 7,
      heading: "Automobiles",
      data: "Our solutions for the automobile industry include online vehicle showcases, booking systems, and inventory management for dealers and manufacturers.",
      img: "https://img.freepik.com/free-vector/electric-automobiles-are-charging-garage-power-station-vector-illustration-flat-design_1150-43131.jpg",
    },
    {
      id: 8,
      heading: "Astrology",
      data: "For the astrology sector, we provide tools for personalized horoscope generation, online consultations, and content sharing to connect astrologers with their audience.",
      img: "https://img.freepik.com/free-vector/flat-zodiac-wheel-galaxy-background_23-2148169215.jpg",
    },
    {
      id: 9,
      heading: "B2B Companies",
      data: "We empower B2B companies by building platforms for lead generation, product showcases, and communication tools to enhance client relationships.",
      img: "https://img.freepik.com/free-vector/gradient-b2b-illustration_23-2149322240.jpg",
    },
    {
      id: 10,
      heading: "Advocate and Law Firm",
      data: "Our services for law firms include case management systems, appointment scheduling, and document collaboration platforms to streamline legal workflows.",
      img: "https://img.freepik.com/free-vector/judges-court-hearing-illustration-prosecutor-legal-secretary-woman-assessor_33099-563.jpg",
    },
    {
      id: 11,
      heading: "Pharmaceuticals",
      data: "The pharmaceutical industry benefits from our solutions for inventory tracking, online prescription management, and supply chain optimization.",
      img: "https://img.freepik.com/free-vector/pharmacy-store-interior-with-buyer-pharmacist_107791-30927.jpg",
    },
    {
      id: 12,
      heading: "Travels and Tourism",
      data: "We support the travel industry with custom booking platforms, itinerary planners, and tools for managing travel packages and customer inquiries.",
      img: "https://img.freepik.com/free-vector/travel-concept-with-landmarks_1057-4873.jpg",
    },
    {
      id: 13,
      heading: "Events and Media",
      data: "Our services for events and media include ticketing systems, event scheduling tools, and content management platforms to ensure seamless event organization.",
      img: "https://img.freepik.com/free-vector/social-media-background-with-flat-design_23-2147834205.jpg",
    },
  ];

  return (
    <>
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="flex items-center flex-wrap mb-32 mt-14 -mx-8">
            <div className="w-full lg:w-1/2 p-8">
              <img
                className="rounded-3xl w-full"
                src="https://shuffle.dev/solstice-assets/images/about/picture4.png"
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/2 p-8">
              <div className="py-1 px-3 rounded-lg border border-orange-100 bg-orange-50 inline-flex items-center gap-2 mb-6 mt-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                >
                  <circle cx="4" cy="4" r="3" fill="#FF7100"></circle>
                </svg>
                <span className="text-orange-500 text-sm font-medium">
                  About Us
                </span>
              </div>
              <h1 className="text-2xl lg:text-4xl font-bold font-heading mb-6 max-w-md lg:max-w-2xl">
                Empowering Brand Communication on Digital Platforms Since 2023
              </h1>
              <p className="text-gray-600 text-sm mb-12">
                Varcas NexGen, an Indore-based digital marketing agency,
                specializes in delivering result-oriented marketing strategies
                to brands and businesses. Our core expertise lies in
                understanding business goals and aligning them with the best
                digital marketing strategy and engaging content. This approach
                ensures that ROI remains a top priority. Whether it’s website
                design and development, social media marketing, or search engine
                optimization (SEO), we create content that effectively engages
                the target audience and optimizes the sales funnel for maximum
                efficiency.
              </p>
            </div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold font-heading mb-6 max-w-md lg:max-w-2xl">
            Our Foots In Industries
          </h1>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
              {aboutData.map((i: any, data: any) => (
                <a
                  className="group block rounded-xl overflow-hidden focus:outline-none"
                  href="#"
                  key={data}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                    <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                      <img
                        className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                        src={i.img}
                        alt="Blog Image"
                      />
                    </div>

                    <div className="grow">
                      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                        {i.heading}
                      </h3>
                      <p className="mt-3 text-gray-600 dark:text-neutral-400">
                        {i.data}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid md:grid-cols-5 gap-10">
              <div className="md:col-span-2">
                <div className="max-w-xs">
                  <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
                    Our Highly Talented
                    <br />
                    Team
                  </h2>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="hs-accordion-group divide-y divide-gray-200 dark:divide-neutral-700">
                  We have highly Talented Team which have a mission to dominate
                  at young age in the fields of online and digital trends.
                  <br />
                  <br />
                  <b> Primarily Goals: </b> Help Businesses To Grow By Newest
                  Digital Trends. <br />
                  <br />
                  <p>12+ Members in Digital Marketing, IT Professionals.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
