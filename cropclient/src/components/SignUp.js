import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = useState("");
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic will be here
    console.log(
      "Form submitted:",
      mobileNumber,
      fullName,
      dateOfBirth,
      gender,
      username,
      pin,
      confirmPin,
      termsAccepted
    );
  };

  return (
    <div className="bg-white p-10 rounded-lg">
      <h1 className="text-2xl font-bold mb-5 text-green-500">Sign up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-green-500">
            Mobile Number*
          </label>
          <input
            type="text"
            id="mobileNumber"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Mobile Number"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-sm font-medium text-green-500">
            Full Name*
          </label>
          <input
            type="text"
            id="fullName"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

<div className="mb-3">
  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-green-500">
    Date of Birth
  </label>
  <input
    type="date"
    id="dateOfBirth"
    className="w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
  />
</div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-green-500">
            Select Gender*
          </label>
          <select
            id="gender"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-green-500">
            Username*
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pin" className="block text-sm font-medium text-green-500">
            Pin*
          </label>
          <input
            type="password"
            id="pin"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPin" className="block text-sm font-medium text-green-500">
            Confirm Pin*
          </label>
          <input
            type="password"
            id="confirmPin"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Confirm Pin"
            value={confirmPin}
            onChange={(e) => setConfirmPin(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 rounded border-gray-300 text-green-500 focus:ring-green-500"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            <label htmlFor="terms" className="ml-2 text-sm text-green-500">
              I consent to{" "}
              <a href="#" className="underline text-green-500">
                terms of use.
              </a>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Verify
        </button>
      </form>
     
    {/* <p className="mt-3 text-sm text-green-500">
    <a href="/Login.js" className="underline text-green-500 hover:text-black ">
        Sign in to an existing account
    </a>
    </p> */}

<Link to="/LoginPage" className="underline text-green-500 hover:text-black">
  Sign in to an existing account
</Link>

    </div>
  );
}

export default SignUp;