import React from "react";

const ListSurat = ({count, suratArti, suratCount, suratName , active}) => {
  return (
    <div className={`w-full text-white rounded flex flex-row justify-start gap-8 items-center py-2 px-4 cursor-pointer ${active == count ? 'bg-primary-100' : 'bg-gray-100'}`}>
      <span className="text-xl font-bold text-black">{count}</span>
      <div>
        <h2 className="text-primary-500 text-2xl font-semibold">{suratName}</h2>
        <p className="text-primary-500 text-base">{suratArti} - {suratCount} Ayat</p>
      </div>
    </div>
  );
};

export default ListSurat;
