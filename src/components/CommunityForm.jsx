import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

// Initialize Firebase with your configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAVi7Mmhaxy_5w0KuUDSKkNTRL-E-KKug",
  authDomain: "ram-mandir-45452.firebaseapp.com",
  projectId: "ram-mandir-45452",
  storageBucket: "ram-mandir-45452.appspot.com",
  messagingSenderId: "188869541939",
  appId: "1:188869541939:web:450b96873c0c8f92a62346"
  
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const submissionsRef = ref(database, "submissions");

const CommunityForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [visitDate, setVisitDate] = useState("");
  const [experience, setExperience] = useState("");
  const [rating, setRating] = useState("");
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleExperienceChange = (e) => {
    const inputValue = e.target.value;

    // Validate the input to allow only letters and spaces
    if (/^[A-Za-z\s]+$/.test(inputValue) || inputValue === "") {
      setExperience(inputValue);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Push the form data to the "submissions" node in the database
      await push(submissionsRef, {
        name,
        email,
        visitDate,
        experience,
        rating,
      });

      // Reset the form after submission
      setName("");
      setEmail("");
      setVisitDate("");
      setExperience("");
      setRating("");

      // Set submission status to success
      setSubmissionStatus("success");

      // Hide the success message after 5 seconds
      setTimeout(() => {
        setSubmissionStatus(null);
      }, 5000);
    } catch (error) {
      // Handle submission error
      console.error("Error submitting form:", error);
      // Set submission status to error
      setSubmissionStatus("error");
    }
  };

  return (
    <div className="w-full p-8 bg-white">
      <h2 className="mb-4 font-bold text-2xl sm:text-5xl m-2 p-2 text-orange-500 text-center">
        Share Your Experience of Ram Mandir
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-base font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-orange-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            pattern="^[A-Za-z\s]+$"
            title="Name should contain only letters"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-base font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border border-orange-300 rounded-md focus:outline-orange-300 focus:ring-orange-400 focus:border-orange-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="visitDate" className="block text-base font-medium text-gray-600">
            Visit Date
          </label>
          <input
            type="date"
            id="visitDate"
            name="visitDate"
            value={visitDate}
            onChange={(e) => setVisitDate(e.target.value)}
            className="mt-1 p-2 w-full border border-orange-300 rounded-md focus:outline-orange-300 focus:ring-orange-400 focus:border-orange-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="experience" className="block text-sm font-medium text-gray-600">
            Share Your Experience
          </label>
          <textarea
            id="experience"
            name="experience"
            value={experience}
            onChange={handleExperienceChange}
            rows="4"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-base font-medium text-gray-600">
            Rating (Out of 5)
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            min="1"
            max="5"
            className="mt-1 p-2 w-full border border-orange-300 rounded-md focus:outline-orange-300 focus:ring-orange-400 focus:border-orange-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white p-4 rounded-md text-sm"
        >
          Submit
        </button>
      </form>

      {/* Display success message if submission is successful */}
      {submissionStatus === "success" && (
        <div className="bg-green-500 text-white p-4 rounded-md text-sm mt-4">
          Form submitted successfully! Closing in 5 seconds...
        </div>
      )}
      {/* Display error message if submission encounters an error */}
      {submissionStatus === "error" && (
        <p className="text-red-600 mt-4">
          Oops! There was an error submitting the form. Please try again later.
        </p>
      )}
    </div>
  );
};

export default CommunityForm;
