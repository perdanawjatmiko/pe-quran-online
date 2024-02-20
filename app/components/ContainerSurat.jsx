'use client'
import React from "react";
import ListSurat from "./ListSurat";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailSurat from "./DetailSurat";

const ContainerSurat = () => {
const [asd, setAsd] = useState([])
const [detail, setDetail] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://equran.id/api/v2/surat');
        setAsd(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDropdown = (event) => {
    setDetail(event.target.value)
  }
  return (
    <div>
      <div className="md:grid md:grid-cols-12 gap-4 items-start">
        <div className="block md:hidden mb-4">
            <select id="dropdown" value={detail} onChange={handleDropdown} className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300">
                {asd.map((surat, i) => (
                    <option key={i} value={surat.nomor}>{surat.namaLatin}</option>
                ))}
            </select>
        </div>
        <div className="hidden md:flex col-span-4 bg-white border border-lime-50 rounded py-4 px-4 flex-col gap-2 max-h-screen overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-primary-500 scrollbar-rounded-full">
        {
            asd.map((surat, i) => {
                return (
                    <div key={i} onClick={() => setDetail(surat.nomor)}>
                        <ListSurat suratName={surat.namaLatin} suratCount={surat.jumlahAyat} suratArti={surat.arti} count={i + 1} active={detail}/>
                    </div>
                )
            })
        }
        </div>
        <div className="col-span-8 bg-white border border-lime-50 rounded py-4 px-4 flex flex-col gap-2 max-h-screen overflow-y-auto scrollbar-none md:scrollbar-thin scrollbar-thumb-primary-500 scrollbar-rounded-full">
          <DetailSurat nomorSurat={detail}/>
        </div>
      </div>
    </div>
  );
};

export default ContainerSurat;
