"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SteinStore from "stein-js-client";

const Page = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    permanentAddress: "",
    college: "",
    degree: "",
    specialization: "",
    yearOfStudy: "",
    cgpa: "",
    skills: "",
    experience: "",
    internshipExperience: "",
    certificates: "",
    projectLinks: "",
    appliedfor: "",
    resumeLink: "",
    consentChecked: false,
    eSign: "",
  });

  const [isPopupVisible, setPopupVisible] = useState(false);
  const togglePopup = () => setPopupVisible(!isPopupVisible);

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.fullName.trim()) {
      toast("Please enter your full name.");
      return;
    }
    if (!formData.dateOfBirth.trim()) {
      toast("Please enter your date of birth.");
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast("Please enter a valid email address.");
      return;
    }
    if (!formData.phoneNumber.trim()) {
      toast("Please enter your phone number.");
      return;
    }
    if (!formData.permanentAddress.trim()) {
      toast("Please enter your permanent address.");
      return;
    }
    if (!formData.college.trim()) {
      toast("Please enter your college name.");
      return;
    }
    if (!formData.degree.trim()) {
      toast("Please enter your degree.");
      return;
    }
    if (!formData.specialization.trim()) {
      toast("Please enter your specialization.");
      return;
    }
    if (!formData.yearOfStudy.trim()) {
      toast("Please enter your year of study.");
      return;
    }
    if (!formData.cgpa.trim()) {
      toast("Please enter your CGPA.");
      return;
    }
    if (!formData.skills.trim()) {
      toast("Please enter your skills.");
      return;
    }
    if (!formData.experience.trim()) {
      toast("Please enter your experience.");
      return;
    }
    if (!formData.internshipExperience.trim()) {
      toast("Please enter your internship experience.");
      return;
    }
    if (!formData.certificates.trim()) {
      toast("Please enter your certificates.");
      return;
    }
    if (!formData.projectLinks.trim()) {
      toast("Please enter your project links.");
      return;
    }
    if (!formData.appliedfor.trim()) {
      toast("Please specify the position you are applying for.");
      return;
    }
    if (!formData.resumeLink.trim()) {
      toast("Please provide a link to your resume.");
      return;
    }

    // Consent and e-signature checks
    if (!formData.consentChecked) {
      toast("Please agree to the terms and conditions.");
      return;
    }
    if (!formData.eSign.trim()) {
      toast("Please type your name as an e-signature.");
      return;
    }

    // Show a loading message before sending the request
    toast.success("Please Wait, We Are Getting Your Message.");

    const store = new SteinStore(
      "https://api.steinhq.com/v1/storages/675e6d09c0883333655b187a"
    );

    try {
      // Send the data to the API
      await store.append("sheet1", [formData]);
      toast.success("Message sent successfully");

      // Reset form data after successful submission
      setFormData({
        fullName: "",
        dateOfBirth: "",
        email: "",
        phoneNumber: "",
        permanentAddress: "",
        college: "",
        degree: "",
        specialization: "",
        yearOfStudy: "",
        cgpa: "",
        skills: "",
        experience: "",
        internshipExperience: "",
        certificates: "",
        projectLinks: "",
        appliedfor: "",
        resumeLink: "",
        consentChecked: false,
        eSign: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the message");
    }

    // Show success message after submission
    toast.success(
      `Form submitted successfully! Thank you, ${formData.fullName}.`
    );
  };

  return (
    <div className="mt-48 mb-24">
      {/* Pop-up modal */}
      {isPopupVisible && (
        <div
          className="mt-24 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={togglePopup}
        >
          <div
            className="bg-white p-6 max-w-lg w-full max-h-[80%] overflow-y-auto rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold mb-4">Internship Details</h2>
            <div className="space-y-4 max-h-80 overflow-y-auto">
              <div>
                <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Terms and Conditions
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Attendance:
                      </h3>
                      <p className="text-gray-600">
                        A minimum of 90% attendance is mandatory during the
                        internship period. Failure to meet the required
                        attendance may result in disqualification from obtaining
                        the Certificate of Internship.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Form Filling:
                      </h3>
                      <p className="text-gray-600">
                        Interns must properly fill out all required forms,
                        including onboarding forms, task trackers, and feedback
                        forms, as part of the program.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Task Completion:
                      </h3>
                      <p className="text-gray-600">
                        Timely response to all assigned tasks is crucial.
                        Interns are expected to complete all assignments,
                        projects, and activities within the deadlines set by the
                        mentors.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Assessment:
                      </h3>
                      <p className="text-gray-600">
                        Interns will undergo regular evaluations, including
                        MCQ-based tests, to assess their understanding and
                        performance. Completing these assessments is compulsory
                        to qualify for the certificate.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Certificate Fee:
                      </h3>
                      <p className="text-gray-600">
                        A nominal management fee of ₹1XX/- will be charged to
                        cover administrative costs for the issuance of the
                        Certificate of Internship and Letter of Recommendation.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Professional Conduct:
                      </h3>
                      <p className="text-gray-600">
                        Interns must maintain professional behavior and adhere
                        to Varcas NexGen’s policies. This includes regular
                        communication with mentors, meeting deadlines, and
                        collaborating effectively with team members.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Eligibility for Future Stipend-Based Opportunities:
                      </h3>
                      <p className="text-gray-600">
                        Interns who successfully complete the program, fulfill
                        all terms and conditions, and obtain the certificate
                        will be eligible for stipend-based internships in future
                        opportunities.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-700">
                        Program Termination:
                      </h3>
                      <p className="text-gray-600">
                        Varcas NexGen reserves the right to terminate the
                        internship of any individual who fails to comply with
                        the terms and conditions, including attendance, form
                        filling, task completion, and assessments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-xl mx-auto p-6 bg-gray-50 rounded-md shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">
          Apply For Internship
        </h1>

        <form onSubmit={handleSubmit} className="mt-6">
          {/* Full Name */}
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name:
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-4">
            <label
              htmlFor="dateOfBirth"
              className="block text-sm font-medium text-gray-700"
            >
              Date of Birth:
            </label>
            <input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number:
            </label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
            />
          </div>

          {/* Permanent Address */}
          <div className="mb-4">
            <label
              htmlFor="permanentAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Permanent Address:
            </label>
            <textarea
              id="permanentAddress"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleInputChange}
              placeholder="Enter your permanent address"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
            ></textarea>
          </div>

          {/* Educational Details */}
          <div className="mb-4">
            <label
              htmlFor="college"
              className="block text-sm font-medium text-gray-700"
            >
              College/University:
            </label>
            <input
              id="college"
              name="college"
              type="text"
              value={formData.college}
              onChange={handleInputChange}
              placeholder="Enter your college/university"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="degree"
              className="block text-sm font-medium text-gray-700"
            >
              Degree Program:
            </label>
            <select
              id="degree"
              name="degree"
              value={formData.degree}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
            >
              <option value="">Select a program</option>
              <option value="BTech">B.Tech</option>
              <option value="B.E">B.E</option>
              <option value="BBA">BBA</option>
              <option value="MBA">MBA</option>
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
              <option value="B.com">B.COM</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              htmlFor="specialization"
              className="block text-sm font-medium text-gray-700"
            >
              Branch Specialization:
            </label>
            <input
              id="specialization"
              name="specialization"
              type="text"
              value={formData.specialization}
              onChange={handleInputChange}
              placeholder="Enter your specialization"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="yearOfStudy"
              className="block text-sm font-medium text-gray-700"
            >
              Year of Study:
            </label>
            <input
              id="yearOfStudy"
              name="yearOfStudy"
              type="number"
              value={formData.yearOfStudy}
              onChange={handleInputChange}
              placeholder="Enter your current year of study"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="cgpa"
              className="block text-sm font-medium text-gray-700"
            >
              Current CGPA:
            </label>
            <input
              id="cgpa"
              name="cgpa"
              type="text"
              value={formData.cgpa}
              onChange={handleInputChange}
              placeholder="Enter your CGPA"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-smborder-gray-300"
            />
          </div>

          {/* Skills */}
          <div className="mb-4">
            <label
              htmlFor="skills"
              className="block text-sm font-medium text-gray-700"
            >
              Skills:
            </label>
            <textarea
              id="skills"
              name="skills"
              value={formData.skills}
              onChange={handleInputChange}
              placeholder="List your skills (e.g., Programming, Communication, etc.)"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
            ></textarea>
          </div>

          {/* Experience */}
          <div className="mb-4">
            <label
              htmlFor="experience"
              className="block text-sm font-medium text-gray-700"
            >
              Experience:
            </label>
            <textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              placeholder="Describe your work experience"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
            ></textarea>
          </div>

          {/* Internship Experience */}
          <div className="mb-4">
            <label
              htmlFor="internshipExperience"
              className="block text-sm font-medium text-gray-700"
            >
              Internship Experience:
            </label>
            <textarea
              id="internshipExperience"
              name="internshipExperience"
              value={formData.internshipExperience}
              onChange={handleInputChange}
              placeholder="Describe your internships"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
            ></textarea>
          </div>

          {/* Certificates */}
          <div className="mb-4">
            <label
              htmlFor="certificates"
              className="block text-sm font-medium text-gray-700"
            >
              Certifications:
            </label>
            <textarea
              id="certificates"
              name="certificates"
              value={formData.certificates}
              onChange={handleInputChange}
              placeholder="List your certifications"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
            ></textarea>
          </div>

          {/* Project Links */}
          <div className="mb-4">
            <label
              htmlFor="projectLinks"
              className="block text-sm font-medium text-gray-700"
            >
              Project Links : [Can be your any work like canva design, website
              or any other]
            </label>
            <textarea
              id="projectLinks"
              name="projectLinks"
              value={formData.projectLinks}
              onChange={handleInputChange}
              placeholder="Provide links to your projects"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="appliedfor"
              className="block text-sm font-medium text-gray-700"
            >
              Applied For Role:
            </label>
            <select
              id="appliedfor"
              name="appliedfor"
              value={formData.appliedfor}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
            >
              <option value="">Select Role</option>
              <option value="fullstack">Full Stack</option>
              <option value="frontend">Front End</option>
              <option value="backend">Back End</option>
            </select>
          </div>
          {/* Resume Link */}
          <div className="mb-4">
            <label
              htmlFor="resumeLink"
              className="block text-sm font-medium text-gray-700"
            >
              Resume Link:
            </label>
            <input
              id="resumeLink"
              name="resumeLink"
              type="url"
              value={formData.resumeLink}
              onChange={handleInputChange}
              placeholder="Provide a link to your resume"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
            />
          </div>

          {/* Consent */}
          <div className="mb-4">
            <div className="flex items-start">
              <input
                id="consentChecked"
                name="consentChecked"
                type="checkbox"
                checked={formData.consentChecked}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label
                htmlFor="consentChecked"
                className="ml-2 text-sm text-gray-700"
              >
                I agree to the{" "}
                <a
                  onClick={togglePopup}
                  className="hover:cursor-pointer text-amber-400"
                >
                  terms and conditions.
                </a>{" "}
                By submitting this form , I certify that the information
                provided is true and accurate to the best of my knowledge. I
                agree to abide by the terms and conditions of the internship
                program.
              </label>
            </div>
          </div>

          {/* E-Sign */}
          <div className="mb-4">
            <label
              htmlFor="eSign"
              className="block text-sm font-medium text-gray-700"
            >
              E-Signature:
            </label>
            <input
              id="eSign"
              name="eSign"
              type="text"
              value={formData.eSign}
              onChange={handleInputChange}
              placeholder="Type your full name as a signature"
              className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>

      <Toaster />
    </div>
  );
};

export default Page;
