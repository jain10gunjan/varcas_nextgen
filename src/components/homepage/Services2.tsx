import React from "react";

const Services2 = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="lg:w-3/4">
          <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl ">
            Our Services
          </h2>
          <p className="mt-3 text-gray-800 dark:text-neutral-400">
            We help businesses bring ideas to life in the digital world, by
            designing and implementing the technology tools that they need to
            win.
          </p>
          <p className="mt-5">
            <a
              className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
              href="/contact-us"
            >
              Contact us to learn more
              <svg
                className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </p>
        </div>

        <div className="space-y-6 lg:space-y-10">
          <div className="flex gap-x-5 sm:gap-x-8">
            <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto  ">
              <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </span>
            <div className="grow">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
                <a href="/marketing">Digital Marketing:</a>
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Our digital marketing services focus on building effective
                strategies to increase your online visibility, engage your
                target audience, and drive conversions. From SEO and social
                media marketing to paid ads and content creation, we help your
                brand stand out in the digital world.
              </p>
            </div>
          </div>

          <div className="flex gap-x-5 sm:gap-x-8">
            <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto  ">
              <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
            </span>
            <div className="grow">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
                <a href="/branding">Branding:</a>
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                We create unique and impactful brand identities that resonate
                with your audience. Our branding services include logo design,
                brand positioning, and messaging that align with your company’s
                vision, helping you build a consistent and memorable presence
                across all platforms.
              </p>
            </div>
          </div>

          <div className="flex gap-x-5 sm:gap-x-8">
            <span className="shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto  ">
              <svg
                className="shrink-0 size-5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M7 10v12" />
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
              </svg>
            </span>
            <div className="grow">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
                <a href="/website-design-and-it-services">
                  Web Development & Designing:
                </a>
              </h3>
              <p className="mt-1 text-gray-600 dark:text-neutral-400">
                Our web development and designing services are tailored to
                deliver user-friendly, visually appealing, and responsive
                websites. We create seamless digital experiences with a focus on
                functionality, speed, and scalability, ensuring that your
                website works flawlessly on all devices and platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services2;
