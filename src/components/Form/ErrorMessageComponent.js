import React from "react";

export const ErrorMessageComponent = ({ showing, message }) => {
  return (
    <div className="block w-full px-3 mb-6 md:mb-0 mt-6">
      {showing && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span className="block sm:inline">{message}</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            ></svg>
          </span>
        </div>
      )}
    </div>
  );
};
