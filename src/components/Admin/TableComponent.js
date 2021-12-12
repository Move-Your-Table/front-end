import React from "react";

export const TableComponent = ({ headers, data, onDelete, onEdit }) => {
  console.log(data);

  function renderActions() {
    return onDelete || onEdit;
  }
  return (
    <section className="container mx-auto font-mono">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full ">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                {headers.map((header) => {
                  return (
                    <th scope="col" key={header} className="px-4 py-3">
                      {header}
                    </th>
                  );
                })}
                {renderActions() && (
                  <th scope="col" key={"Actions"} className="px-4 py-3">
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((item) => {
                return (
                  <tr className="text-gray-700">
                    {Object.keys(item).map((key, index) => {
                      return (
                        <td
                          key={`${item.id} ${index}`}
                          className="px-4 py-3 text-ms font-semibold border"
                        >
                          {item[key]}
                        </td>
                      );
                    })}
                    {renderActions() && (
                      <td className="px-4 py-3 text-ms font-semibold border">
                        <div className="flex justify-around">
                          {onDelete && (
                            <button
                              type="button"
                              className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                              onClick={onDelete}
                            >
                              Delete
                            </button>
                          )}
                          {onEdit && (
                            <button
                              onClick={onEdit}
                              type="button"
                              className="mr-3 text-sm  bg-indigo-500 hover:bg-indigo-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                            >
                              Edit
                            </button>
                          )}
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
