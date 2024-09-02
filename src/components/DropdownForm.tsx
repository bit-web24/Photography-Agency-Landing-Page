
import React from 'react';

const DropdownForm = () => {
  return (
    <form
      className="absolute mt-4 bg-gray-100 p-6 rounded-md shadow-md left-0 w-[343px] btn_white"
      style={{ top: '100%' }}
      Validate 
    >
      <div className="mb-6 flex space-x-6">
        <div className="flex-1">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="First Name"
            required
          />
        </div>
        <div className="flex-1">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Last Name"
            required
          />
        </div>
      </div>

      <div className="mb-8 flex space-x-8">
        <div className="flex-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="nm@gmail.com"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <p className="text-red-500 text-xs mt-1 hidden" id="emailError">
            Please enter a valid email address.
          </p>
        </div>
        <div className="flex-1">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="(000) 000-0000"
            required
            pattern="\(\d{3}\) \d{3}-\d{4}"
          />
          <p className="text-red-500 text-xs mt-1 hidden" id="phoneError">
            Please enter a valid phone number.
          </p>
        </div>
      </div>

      <div className="mb-6 flex space-x-6">
        <div className="flex-1">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 p-2 w-full border rounded-md text-gray-400"
            required
          />
        </div>
        <div className="flex-1">
          <label htmlFor="time" className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <input
            type="time"
            id="time"
            className="mt-1 p-2 w-full border rounded-md text-gray-400"
            required
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
          Comments
        </label>
        <textarea
          id="comments"
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter any comments"
        />
      </div>

      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="px-4 py-2  bg-[#374151] text-white rounded-md"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default DropdownForm;
