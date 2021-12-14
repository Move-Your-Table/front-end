import React from "react";

const SearchComponent = ({ onChangeFunction }) => {
  return (
    <label className="relative block">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg className="h-5 w-5 fill-gray-300" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>
      <span className="sr-only">Search</span>
      <input
        type="text"
        name="search"
        className="block w-96 text-gray-700 border border-gray-300 rounded-md py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-gray-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        placeholder="Search for anything..."
        onChange={(e) => onChangeFunction(e.target.value)}
      />
    </label>
  );
};

export default SearchComponent;
