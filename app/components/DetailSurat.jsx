import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import DetailAyat from "./DetailAyat";

const DetailSurat = ({nomorSurat}) => {
  const [detailSurat, setDetailSurat] = useState({
    nomor: null,
    nama: "",
    namaLatin: "",
    jumlahAyat: null,
    tempatTurun: "",
    arti: "",
    deskripsi: "",
    audioFull: {},
    ayat: [],
    suratSelanjutnya: {
      nomor: null,
      nama: "",
      namaLatin: "",
      jumlahAyat: null
    },
    suratSebelumnya: false
  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://equran.id/api/v2/surat/'+ nomorSurat);
        setDetailSurat(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [nomorSurat]);

  return (
    <div className="flex flex-col justify-start gap-4">
      <div className="py-4 px-8 bg-gradient-to-r from-green-600 to-sky-500 rounded-lg">
        <div className="flex items-center justify-between pb-12">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold text-white">
              {detailSurat.namaLatin} - {detailSurat.nama}
            </h1>
            <span className="text-white text-sm font-semibold">
              {detailSurat.arti} - {detailSurat.jumlahAyat} ayat -{" "}
              {detailSurat.tempatTurun}
            </span>
          </div>
          <div className="">
            <div className="text-xl text-white px-4 py-2 border border-white rounded-full">
              {nomorSurat}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start gap-2 overflow-y-auto">
        {detailSurat.ayat.length > 0 ? 
        (detailSurat.ayat.map((ayat, i) => (
          <DetailAyat key={i} nomorAyat={ayat.nomorAyat} teksLatin={ayat.teksLatin} teksArab={ayat.teksArab} teksIndonesia={ayat.teksIndonesia} />
        )))
      : (
        <p>Loading...</p>
      )}

        
      </div>
    </div>
  );
};

export default DetailSurat;
