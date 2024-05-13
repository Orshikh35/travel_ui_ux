import Image from "next/image";
import Button from "./Button";
import HeroImg from "../assets/69a0a891966cd96b1b9be7649cbc8a50.jpg";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">Товч танилцуулга</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          “Бүтээл” ХХК нь төслийн менежментийн цогц үйлчилгээг санал болгож
          байна. Манай хамт олон 2023 оноос ISO45001:2018 “Хөдөлмөрийн аюулгүй
          байдал, эрүүл ахуйн менежментийн тогтолцоо”-г үйл ажиллагаандаа
          нэвтрүүллээ.
        </p>

        <div className="flex flex-col w-full gap-3 sm:flex-row mt-4">
          <Button type="button" title="Дэлгэрэнгүй" variant="btn_green" />
          <Button
            type="button"
            title="Бид хэрхэн ажилладаг вэ?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div>
        <img
          src={HeroImg.src}
          alt=""
          className="h-[600px] w-[1000px] rounded-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
