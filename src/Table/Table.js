import React, { useEffect, useState } from "react";
import Form from "./Form";

function Table() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("error");
  const [showAdditionData, setShowAdditionData] = useState(true);
  const showAddition = () => {
    setShowAdditionData(!showAdditionData);
    console.log(showAdditionData);
  };
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`).then((response) =>
      response
        .json()
        .then((json) => {
          setData(json);
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        })
    );
  }, []);
  console.log(data);
  const tabledata = data.map((item, index) => {
    return (
      <tr
        className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
        key={item.id}
      >
        <td className="px-6 py-4">{item.id}</td>
        <td className="px-6 py-4">{item.name}</td>
        <td className="px-6 py-4">{item.username}</td>
        <td className="px-6 py-4">{item.address.city}</td>
        <td className="px-6 py-4">{item.address.suite}</td>
        <td className="px-6 py-4">{item.address.zipcode}</td>
      </tr>
    );
  });
  const table = (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              City
            </th>
            <th scope="col" className="px-6 py-3">
              Suite
            </th>
            <th scope="col" className="px-6 py-3">
              Zip code
            </th>
            <button
              onClick={showAddition}
              className="mr-3 mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              +
            </button>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr className="text-2xl">
              <td> loading</td>
            </tr>
          ) : (
            tabledata
          )}
        </tbody>
      </table>
    </div>
  );
  return showAdditionData ? table : <Form goback={showAddition} />;
}

export default Table;
