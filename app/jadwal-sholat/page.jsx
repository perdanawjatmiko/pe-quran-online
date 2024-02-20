'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import TableJadwal from "./components/TableJadwal";

const Page = () => {
  const [jadwalSholat, setJadwalSholat] = useState([]);
  const [lokasi, setLokasi] = useState(1301)
  const [lokasiAll, setLokasiAll] = useState([])
  const [lokasiNow, setLokasiNow] = useState("KOTA JAKARTA")
  const bulanSekarang = new Date().getMonth()
  const bulan = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.myquran.com/v2/sholat/jadwal/${lokasi}/2024/${bulanSekarang+1}`);
        setJadwalSholat(response.data.data.jadwal);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [lokasi, bulanSekarang]);
  
  useEffect(() => {
    const fetchDataLokasi = async () => {
      try {
        const response = await axios.get(`https://api.myquran.com/v2/sholat/kota/semua`);
        setLokasiAll(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataLokasi();
  }, []);

  const handleLokasi = (event) => {
    setLokasi(event.target.value)
    setLokasiNow(event.target.options[event.target.selectedIndex].text)
  }

  return (
    <main className="bg-lime-100 min-h-screen px-4 lg:px-[10%] xl:px-[20%]">
      <div className="pt-32 flex flex-col">
        <h1 className="text-xl md:text-3xl text-center text-primary-800 font-bold mb-8 w-full bg-white py-4">
          Jadwal Sholat <br /> Bulan {bulan[bulanSekarang]} 2024 di <br /> {lokasiNow} dan Sekitarnya
        </h1>
        <div className="my-4">
        <form className="max-w-sm mx-auto">
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pilih Kota / Kabupaten</label>
          <select id="countries" value={lokasi} onChange={handleLokasi} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {lokasiAll.map((item, i) => (
              <option key={i} value={item.id}>{item.lokasi}</option>
            ))}
          </select>
        </form>
        </div>
        <div className="relative overflow-x-auto mb-16">
          <table className="text-[10px] md:text-sm text-gray-500 dark:text-gray-400 w-full">
            <thead className="text-white uppercase bg-primary-600 border-b-4 border-b-yellow-500 dark:bg-gray-700 dark:text-gray-400 text-center">
              <tr className="overflow-auto">
                <th scope="col" className="px-2 py-3">
                  Hari Tanggal
                </th>
                <th scope="col" className="px-2 py-3">
                  Imsak
                </th>
                <th scope="col" className="px-2 py-3">
                  Subuh
                </th>
                <th scope="col" className="px-2 py-3">
                  Dzuhur
                </th>
                <th scope="col" className="px-2 py-3">
                  Ashar
                </th>
                <th scope="col" className="px-2 py-3">
                  Maghrib
                </th>
                <th scope="col" className="px-2 py-3">
                  Isya
                </th>
              </tr>
            </thead>
            <tbody>
              {jadwalSholat.length > 0 ? (
                jadwalSholat.map((item, index) => (
                  <TableJadwal key={index} item={item}/>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">No data available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default Page;