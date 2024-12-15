import React from "react";

const Approach = () => {
  return (
    <div>
      <div className="">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:pt-20  mx-auto">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-gray-900 font-semibold text-2xl md:text-4xl md:leading-tight">
              Our approach
            </h2>
            <p className="mt-1 text-neutral-400">
              This profound insight guides our comprehensive strategy — from
              meticulous research and strategic planning to the seamless
              execution of brand development and website or product deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image Description"
              />
            </div>

            <div>
              <div className="mb-4">
                <h3 className="text-xs font-medium uppercase text-purple">
                  Steps
                </h3>
              </div>

              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-purple font-semibold text-xs uppercase rounded-full">
                      1
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-neutral-400">
                    <span className="text-gray-900 font-bold font-bold">
                      The Brief:{" "}
                    </span>
                    Client tails us of what they want and need. Timelines are
                    set.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-purple font-semibold text-xs uppercase rounded-full">
                      2
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-neutral-400">
                    <span className="text-gray-900 font-bold font-bold">
                      Research
                    </span>
                    Creative team gathers materials and inspiration.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-purple font-semibold text-xs uppercase rounded-full">
                      3
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-neutral-400">
                    <span className="text-gray-900 font-bold">Ideation:</span>
                    We brainstorm to get the final idea.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-purple font-semibold text-xs uppercase rounded-full">
                      4
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-neutral-400">
                    <span className="text-gray-900 font-bold">Production:</span>
                    We do the necessary steps to deliver the result.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-purple font-semibold text-xs uppercase rounded-full">
                      5
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-neutral-400">
                    <span className="text-gray-900 font-bold">Delivery: </span>
                    We show our design to client and wait for feedback.
                  </p>
                </div>
              </div>

              <a
                className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#dbd21f] font-medium text-sm text-neutral-100 rounded-full focus:outline-none"
                href="/contact-us"
              >
                <svg
                  className="flex-shrink-0 size-4"
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-hover:delay-100 transition"
                    d="M14.05 2a9 9 0 0 1 8 7.94"
                  ></path>
                  <path
                    className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition"
                    d="M14.05 6A5 5 0 0 1 18 10"
                  ></path>
                </svg>
                Schedule a call
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
