import React from "react";
import AudioPlay from "./AudioPlay";

const DetailAyat = ({nomorAyat, teksLatin, teksArab, teksIndonesia, audio}) => {
  return (
    <div className="p-4 rounded-lg flex flex-col gap-5 dark:bg-primary-800 bg-primary-100">
      <div className="flex items-center justify-between gap-8">
        <div className="text-primary-800 dark:text-primary-400 font-semibold">
          {nomorAyat}
        </div>
        <div className="text-primary-800 dark:text-primary-300 font-lateef text-2xl leading-loose font-medium">
          {teksArab}
        </div>
      </div>
      <div className="">
        <p className="text-sky-500 dark:text-purple-400 font-semibold text-sm mb-2 mt-5">
          {teksLatin}
        </p>
        <p className="text-primary-800 dark:text-primary-200 font-semibold text-sm">
          {teksIndonesia}
        </p>
        <div className="mt-4">
          <AudioPlay src={audio}/>
        </div>
      </div>
    </div>
  );
};

export default DetailAyat;
