import React from 'react'

const TableJadwal = ({item}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center overflow-auto">
        <td className="px-6 py-4 whitespace-nowrap text-left font-bold">{item.tanggal}</td>
        <td className="px-6 py-4 whitespace-nowrap">{item.imsak}</td>
        <td className="px-6 py-4 whitespace-nowrap">{item.subuh}</td>
        <td className="px-6 py-4 whitespace-nowrap">{item.dzuhur}</td>
        <td className="px-6 py-4 whitespace-nowrap">{item.ashar}</td>
        <td className="px-6 py-4 whitespace-nowrap">{item.maghrib}</td>
        <td className="px-6 py-4 whitespace-nowrap">{item.isya}</td>
    </tr>
  )
}

export default TableJadwal