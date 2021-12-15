import React from "react";

const TextInputComponent = ({ label, placeholder, onChange, value }) => {
  return (
    <div className="w-full md:w-1/3 px-3 mb-4 mt-2">
      <label
        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        type="text"
        name="search"
        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default TextInputComponent;
