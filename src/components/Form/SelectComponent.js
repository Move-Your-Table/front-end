import React from "react";

const SelectComponent = ({
  title,
  options,
  selected,
  setSelected,
  isDisabled,
  nameKey
}) => {
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div className="w-full md:w-1/3 px-3 mb-4 mt-2">
      <label
        className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
        htmlFor={title}
      >
        {title}
      </label>
      <div className="relative">
        <select
          disabled={isDisabled}
          value={selected}
          onChange={handleChange}
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id={title}
        >
          {selected === -1 && <option value={-1}>Pick an item</option>}

          {options.length > 0 &&
            options.map((item, index) => {
              return (
                <option key={`${title}${index}`} value={item.id}>
                  {nameKey ? item[nameKey] : item.name}
                </option>
              );
            })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SelectComponent;
