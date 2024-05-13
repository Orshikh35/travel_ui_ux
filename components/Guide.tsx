import Image from "next/image";
import React from "react";

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          Алсын хараа
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Эрхэм зорилго</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Чадварлаг мэргэжилтэн Ёс зүй, хариуцлага Оюунлаг, хүнлэг, нэгдмэл
            байдал
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1040}
          height={200}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

       
      </div>
    </section>
  );
};

export default Guide;
