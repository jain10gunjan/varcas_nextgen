"use client"
import React, { useState } from 'react';

const reviews = [
  {
    text: "Working with Varcas NexGen has greatly elevated our real estate business in Indore. Their expertise in generating high-quality leads, branding, social media marketing, and top listing on Google My Business in Pithampur has made a remarkable difference. The engaging video content they created has also attracted significant attention. Additionally, high-profile investors have started visiting our site, and our sales have increased rapidly thanks to their efforts. Their professional approach and outstanding services have truly helped us stand out in the market",
    name: "Rohit Chouhan",
    title: "Owner of Vasudha Devcon",
    image: "https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundImage: "https://images.unsplash.com/photo-1671725501928-b7d85698ccd8?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    text: "Varcas NexGen has been instrumental in improving our local visibility. As manufacturers of machined components, it was crucial for us to rank well among our local competitors. With their exceptional listing services, we've achieved just that. Their dedication and strategic approach have significantly enhanced our presence in the local market.",
    name: "Varghese Kalladyail Abrham",
    title: " Owner of Doma Fabricators",
    image: "https://images.unsplash.com/photo-1603415526960-f9e287bfe6d0?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundImage: "https://images.unsplash.com/photo-1603415526960-f9e287bfe6d0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    text: "We reached out to Varcas NexGen for attractive and vibrant designs for our high-end corporate office. As a manufacturer of Vinyl Stickers, Night Glow Stickers, and Sun Board Sheets, it was essential for us to have designs that stand out. With their young and creative minds, they have been providing exceptional designs for the past 8 months and continue to do so. The feedback we've received has been overwhelmingly positive, and we are extremely satisfied with their work.",
    name: "Mahesh Baghel",
    title: "Owner of Baghel Arts",
    image: "https://images.unsplash.com/photo-1603415526960-f9e287bfe6d0?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundImage: "https://images.unsplash.com/photo-1603415526960-f9e287bfe6d0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    text: "Partnering with Varcas NexGen has been a game-changer for our business. As a leading provider of air conditioning deals, supply, and maintenance in the Indore-Pithampur area, we have seen our sales boost by 2.5 times since we started working with them. Their expertise in sales services has positioned us among the top competitors in our market. Their commitment and results-driven approach have truly made a significant impact on our growth.",
    name: "Johnson Muralidharan",
    title: "Owner of Trine Enterprise",
    image: "https://images.unsplash.com/photo-1603415526960-f9e287bfe6d0?q=80&w=320&h=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    backgroundImage: "https://images.unsplash.com/photo-1603415526960-f9e287bfe6d0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  // Add more reviews as needed
];

const Testimonials = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handleNext = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const handlePrevious = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const { text, name, title, image, backgroundImage } = reviews[currentReview];

  return (
    <div>
      <div className="">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-whitegray-900 font-semibold text-2xl md:text-4xl md:leading-tight">Client Reviews</h2>
            <p className="mt-1 text-neutral-400">With over 30 awards, and achievements, we proudly demonstrate our unwavering dedication to excellence and client success.</p>
          </div>

          <div className="md:items-center">
            <div>
              <blockquote>
                <p className="font-medium text-sm text-whitegray-900 md:text-lg md:leading-normal xl:text-xl xl:leading-normal">
                  {text}
                </p>

                <footer className="mt-6">
                  <div className="items-center">
                    <div className="md:hidden flex-shrink-0">
                      <img className="size-12 rounded-full" src={image} alt="Image Description" />
                    </div>
                    <div className="ms-4 md:ms-0">
                      <div className="text-base font-semibold text-whitegray-900">{name}</div>
                      <div className="text-xs text-neutral-400">{title}</div>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <button onClick={handlePrevious} className="px-4 py-2 bg-gray-200 rounded">Previous</button>
            <button onClick={handleNext} className="px-4 py-2 bg-gray-200 rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
