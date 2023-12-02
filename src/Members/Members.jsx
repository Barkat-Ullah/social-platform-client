/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";

const Members = () => {
  return (
    <div className="">
      <div className="bg-white dark:bg-gray-900 ">
        <div className="container px-6 py-8 mx-auto">
          <div className="xl:items-center xl:-mx-8 xl:flex my-14">
            <div className="flex-1 xl:mx-8">
              <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
                  <div className="p-6">
                    <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl dark:text-white">
                      Premium
                    </h1>

                    <p className="mt-4 text-gray-500 dark:text-gray-300">
                      If you create more post than you have to need get premium
                      membership
                    </p>

                    <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-300">
                      $50.00{" "}
                      <span className="text-base font-medium">/life time</span>
                    </h2>

                    <p className="mt-1 text-gray-500 dark:text-gray-300">
                      One time payment
                    </p>

                    <Link to="/payments">
                      <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
                        Start Now
                      </button>
                    </Link>
                  </div>

                  <hr className="border-gray-200 dark:border-gray-700" />

                  <div className="p-6">
                    <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl dark:text-white">
                      What’s included:
                    </h1>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-700 dark:text-gray-300">
                        Own analytics platform
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-700 dark:text-gray-300">
                        Chat support
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-700 dark:text-gray-300">
                        Optimize hashtags
                      </span>
                    </div>

                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-blue-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <span className="mx-4 text-gray-700 dark:text-gray-300">
                        Mobile app
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
