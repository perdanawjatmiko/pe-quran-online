import React from 'react'

const TableJadwal = ({item}) => {
  const currentDate = new Date();

  // Mendapatkan tahun, bulan, dan tanggal
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0, tambahkan 1
  const day = String(currentDate.getDate()).padStart(2, '0');

  // Membuat tanggal dengan format "YYYY-MM-DD"
  const formattedDate = `${year}-${month}-${day}`;

  return (
    <tr className={`${item.date == formattedDate ? 'bg-primary-600 text-white' : 'bg-white'} border-b dark:bg-gray-800 dark:border-gray-700 text-center overflow-auto`}>
        <td className="px-2 py-4 whitespace-nowrap font-bold">{item.tanggal}</td>
        <td className="px-2 py-4 whitespace-nowrap font-bold">{item.imsak}</td>
        <td className="px-2 py-4 whitespace-nowrap">{item.subuh}</td>
        <td className="px-2 py-4 whitespace-nowrap">{item.dzuhur}</td>
        <td className="px-2 py-4 whitespace-nowrap">{item.ashar}</td>
        <td className="px-2 py-4 whitespace-nowrap font-bold">{item.maghrib}</td>
        <td className="px-2 py-4 whitespace-nowrap">{item.isya}</td>
    </tr>
  )
}

export default TableJadwal