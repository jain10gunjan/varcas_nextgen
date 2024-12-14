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
    resumeLink: "",
    consentChecked: false,
    eSign: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    toast.success("Please Wait We Are Getting Your Message.");
    e.preventDefault();

    const store = new SteinStore(
      "https://api.steinhq.com/v1/storages/66936c704d11fd04f013470a"
    );

    try {
      await store.append("sheet1", [formData]);
      toast.success("Message sent successfully");
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
        resumeLink: "",
        consentChecked: false,
        eSign: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while sending the message");
    }

    if (!formData.consentChecked) {
      toast("Please agree to the terms and conditions.");
      return;
    }
    if (!formData.eSign.trim()) {
      toast("Please type your name as an e-signature.");
      return;
    }

    toast.success(
      `Form submitted successfully! Thank you, ${formData.fullName}.`
    );
  };

  return (
    <div className="mt-48 mb-24">
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
                I agree to the terms and conditions. By submitting this form , I
                certify that the information provided is true and accurate to
                the best of my knowledge. I agree to abide by the terms and
                conditions of the internship program.
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
