import React from "react";

export const TableComponent = ({ headers, data, actions }) => {
  console.log(data);
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
                {actions && (
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
                    {actions &&
                      actions.map((action, index) => {
                        <td
                          key={`${item.id} ${index}`}
                          className="px-4 py-3 text-ms font-semibold border"
                        >
                          action
                        </td>;
                      })}
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
