import React from "react";

function Form(props) {
  return (
    <form>
      <div className="relative m-auto z-0 w-1/4 mt-10 mb-6 group">
        <div class="mb-6">
          <label
            for="firstName"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            First Name
          </label>
          <input
            type="text"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="first name"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="username"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            user Name
          </label>
          <input
            type="text"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="user name"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="dob"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="date of birth"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="phone number"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            email
          </label>
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="email"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="country"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            country
          </label>
          <input
            type="text"
            id="country"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="country"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="state"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            state
          </label>
          <input
            type="text"
            id="state"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="state"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="city"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            city
          </label>
          <input
            type="text"
            id="city"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="city"
            required
          />
        </div>
        <button
          onClick={props.goback}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
