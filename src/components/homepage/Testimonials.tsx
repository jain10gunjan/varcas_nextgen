import React from 'react'

const Testimonials = () => {
  return (
    <div>
        <div className="">
      <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-whitegray-900 font-semibold text-2xl md:text-4xl md:leading-tight">Preline reviews</h2>
          <p className="mt-1 text-neutral-400">With over 30 awards, and achievements, we proudly demonstrate our unwavering dedication to excellence and client success.</p>
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-10 lg:gap-16 md:items-center">
          <div>
            <blockquote>
              <p className="font-medium text-xl text-whitegray-900 md:text-2xl md:leading-normal xl:text-3xl xl:leading-normal">
                To say that switching to Preline has been life-changing is an understatement. My business has tripled since then.
              </p>

              <footer className="mt-6">
                <div className="flex items-center">
                  <div className="md:hidden flex-shrink-0">
                    <img className="size-12 rounded-full" src="https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description"/>
                  </div>
                  <div className="ms-4 md:ms-0">
                    <div className="text-base font-semibold text-whitegray-900">Nicole Grazioso</div>
                    <div className="text-xs text-neutral-400">Director Payments & Risk | Airbnb</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>

          <div className="hidden md:block mb-24 md:mb-0">
            <img className="rounded-xl" src="https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description"/>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Testimonials