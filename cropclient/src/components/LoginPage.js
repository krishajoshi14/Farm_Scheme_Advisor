import React, { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [pin, setPin] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", username, mobileNumber, pin);
  };

  return (
    <div className="bg-white p-10 rounded-lg">
      <h1 className="text-2xl font-bold mb-5 text-green-500">Log In</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-green-500"
          >
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
          <label
            htmlFor="mobileNumber"
            className="block text-sm font-medium text-green-500"
          >
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
          <label
            htmlFor="pin"
            className="block text-sm font-medium text-green-500"
          >
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
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Log in
        </button>
      </form>
      <p className="mt-3 text-sm text-green-500">
        <a
          href="/SignUp.js"
          className="underline text-green-500 hover:text-black"
        >
          Create a new account
        </a>
      </p>
    </div>
  );
}

export default LoginPage;
