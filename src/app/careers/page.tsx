"use client";
import React, { useState } from "react";

const ConsentFormWithPopup = () => {
  const [selectedInternship, setSelectedInternship] = useState<any>(null);

  const Details = [
    {
      id: 1,
      title: "Full Stack Developer Intern",
      description: `<div>
        <h2>Full-Stack Developer Intern</h2>
        <p><strong>Company:</strong> Varcas NexGen</p>
        <p><strong>Location:</strong> Remote</p>
        <p><strong>Duration:</strong> 1 Month (Unpaid)</p>
        <p><strong>Opportunity:</strong> Full-time based on performance, with Certificate of Internship</p>
        <h3>About Varcas NexGen:</h3>
        <p>Varcas NexGen offers students and graduates comprehensive experience in full-stack development, preparing them for successful careers.</p>
        <h3>Responsibilities:</h3>
        <ul>
          <li>Design, develop, and maintain both front-end and back-end components of web applications.</li>
          <li>Implement responsive web features and server-side logic.</li>
          <li>Collaborate with designers and back-end developers.</li>
          <li>Test and debug applications for optimal performance.</li>
        </ul>
        <h3>Requirements:</h3>
        <ul>
          <li>Enrolled in or recent graduate of a relevant program.</li>
          <li>Skilled in HTML, CSS, JavaScript, and back-end languages like Node.js or Python.</li>
          <li>Familiarity with frameworks like React, Angular, or Vue.js.</li>
          <li>Strong communication and teamwork skills.</li>
        </ul>
        <h3>Benefits:</h3>
        <ul>
          <li>Real-world full-stack development experience.</li>
          <li>Certificate of Internship and Letter of Recommendation.</li>
          <li>Build your portfolio with impactful projects.</li>
        </ul>
        <h3>How to Apply:</h3>
        <p>Submit your application by 21 December 2024. Varcas NexGen welcomes applicants from all backgrounds.</p>
      </div>`,
    },
    {
      id: 2,
      title: "Front-End Developer Intern",
      description: `<div>
        <h2>Front-End Developer Intern</h2>
        <p><strong>Company:</strong> Varcas NexGen</p>
        <p><strong>Location:</strong> Remote</p>
        <p><strong>Duration:</strong> 1 Month (Unpaid)</p>
        <p><strong>Opportunity:</strong> Full-time based on performance, with Certificate of Internship</p>
        <h3>About Varcas NexGen:</h3>
        <p>Varcas NexGen offers students and graduates practical experience in front-end development, preparing them for successful careers.</p>
        <h3>Responsibilities:</h3>
        <ul>
          <li>Design, code, and modify websites.</li>
          <li>Implement responsive and interactive web features.</li>
          <li>Develop user-friendly interfaces and experiences.</li>
          <li>Test and debug code to ensure seamless functionality.</li>
          <li>Use front-end tools and frameworks like React.js.</li>
        </ul>
        <h3>Requirements:</h3>
        <ul>
          <li>Enrolled in or recent graduate of a relevant program.</li>
          <li>Skilled in HTML, CSS, and JavaScript.</li>
          <li>Familiarity with frameworks like React, Angular, or Vue.js (preferred).</li>
          <li>Strong communication and teamwork skills.</li>
        </ul>
        <h3>Benefits:</h3>
        <ul>
          <li>Real-world front-end development experience.</li>
          <li>Certificate of Internship and Letter of Recommendation.</li>
          <li>Build your portfolio with impactful projects.</li>
        </ul>
        <h3>How to Apply:</h3>
        <p>Submit your application by 21 December 2024. Varcas NexGen welcomes applicants from all backgrounds.</p>
      </div>`,
    },
    {
      id: 3,
      title: "Back-End Developer Intern",
      description: `<div>
        <h2>Back-End Developer Intern</h2>
        <p><strong>Company:</strong> Varcas NexGen</p>
        <p><strong>Location:</strong> Remote</p>
        <p><strong>Duration:</strong> 1 Month (Unpaid)</p>
        <p><strong>Opportunity:</strong> Full-time based on performance, with Certificate of Internship</p>
        <h3>About Varcas NexGen:</h3>
        <p>Varcas NexGen offers students and graduates practical experience in back-end development, helping them prepare for successful careers.</p>
        <h3>Responsibilities:</h3>
        <ul>
          <li>Build and maintain server-side applications.</li>
          <li>Ensure the performance, quality, and responsiveness of applications.</li>
          <li>Develop and integrate APIs to improve user experience.</li>
          <li>Work with databases and back-end frameworks.</li>
        </ul>
        <h3>Requirements:</h3>
        <ul>
          <li>Enrolled in or recent graduate of a relevant program.</li>
          <li>Proficiency in programming languages like Python, Java, or Node.js.</li>
          <li>Familiarity with databases such as MySQL, MongoDB, or PostgreSQL.</li>
          <li>Strong communication and teamwork skills.</li>
        </ul>
        <h3>Benefits:</h3>
        <ul>
          <li>Real-world back-end development experience.</li>
          <li>Certificate of Internship and Letter of Recommendation.</li>
          <li>Build your portfolio with impactful projects.</li>
        </ul>
        <h3>How to Apply:</h3>
        <p>Submit your application by 21 December 2024. Varcas NexGen welcomes applicants from all backgrounds.</p>
      </div>`,
    },
  ];

  const openPopup = (internship: any) => {
    setSelectedInternship(internship);
  };

  const closePopup = () => {
    setSelectedInternship(null);
  };

  return (
    <>
      <div className="overflow-hidden mt-24">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
            <div className="text-center">
              <p className="text-xs font-semibold text-gray-500 tracking-wide uppercase mb-3 dark:text-neutral-200">
                Learn and Grow with us
              </p>
              <h1 className="text-3xl text-gray-800 font-bold sm:text-5xl lg:text-6xl lg:leading-tight dark:text-neutral-200">
                Start your learning{" "}
                <span className="text-blue-500">career with VarcasNexGen</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Internships List */}
        <div className="max-w-4xl mx-auto px-4">
          {Details.map((internship) => (
            <div
              key={internship.id}
              className="flex justify-between items-center bg-white shadow-md rounded-lg p-6 mb-4 dark:bg-neutral-800"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  {internship.title}
                </h2>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => openPopup(internship)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  Details
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                  <a href="/application-form">Apply</a>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Popup Modal */}
        {selectedInternship && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 mt-24">
            <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {selectedInternship.title}
              </h2>
              <div className="max-h-[50vh] overflow-y-auto">
                <p
                  className="text-gray-700 mb-6"
                  dangerouslySetInnerHTML={{
                    __html: selectedInternship.description,
                  }}
                />
              </div>
              <button
                onClick={closePopup}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ConsentFormWithPopup;
