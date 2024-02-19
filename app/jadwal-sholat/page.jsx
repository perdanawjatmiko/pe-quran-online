import React from "react";

const page = () => {
  return (
    <main className="bg-lime-100 min-h-screen px-4 md:px-32">
      <div className="container pt-32">
        <div className="relative overflow-x-auto">
          <table className="text-sm rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-white uppercase bg-primary-600 border-b-4 border-b-yellow-500 dark:bg-gray-700 dark:text-gray-400 text-center">
              <tr className="overflow-auto">
                <th scope="col" className="px-6 py-3">
                  Hari Tanggal
                </th>
                <th scope="col" className="px-6 py-3">
                  Imsak
                </th>
                <th scope="col" className="px-6 py-3">
                  Subuh
                </th>
                <th scope="col" className="px-6 py-3">
                  Dzuhur
                </th>
                <th scope="col" className="px-6 py-3">
                  Ashar
                </th>
                <th scope="col" className="px-6 py-3">
                  Maghrib
                </th>
                <th scope="col" className="px-6 py-3">
                  Isya
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center overflow-auto">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Sabtu, 01/06/2024
                </th>
                <td className="px-6 py-4">04:08 WIB</td>
                <td className="px-6 py-4">04:08 WIB</td>
                <td className="px-6 py-4">04:08 WIB</td>
                <td className="px-6 py-4">04:08 WIB</td>
                <td className="px-6 py-4">04:08 WIB</td>
                <td className="px-6 py-4">04:08 WIB</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default page;
