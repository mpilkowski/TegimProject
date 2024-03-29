import ServicesCard from "./ServicesCard";
import bulletpoint from "../assets/bulletpoint.svg";
import "../serviceStyle.css";

function ServicesSection() {
  return (
    <div
      id="services"
      className="Container flex justify-start mb-[40px] lg:pt-[40px]  px-[20px]  lg:pl-[100px] scroll-mt-16"
    >
      <div className="flex flex-col gap-8  w-screen max-w-[1490px]  mt-[48px] md:px-[0px]">
        <div className="flex flex-row items-center gap-4 ">
          <img src={bulletpoint} alt="" />
          <h2 className="font-custom2 text-3xl">Usługi</h2>
        </div>
        {/* pkt3 układ kart w services */}
        <div className="flex flex-row gap-4 justify-around   flex-wrap  xl:flex-nowrap ">
          <ServicesCard
            serviceName="Sprzedaż"
            serviceIco="icon1"
            serviceContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lectus
          quis est, nec malesuada neque volutpat. Massa semper et ut malesuada
          sit enim amet. Cras massa facilisi in ultrices arcu volutpat sapien
          eget. Adipiscing sodales at id at laoreet sem."
          />

          <ServicesCard
            serviceName="Zakup"
            serviceIco="icon2"
            serviceContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
          lectus quis est, nec malesuada neque volutpat. Massa semper et ut
          malesuada sit enim amet. Cras massa facilisi in ultrices arcu"
          />

          <ServicesCard
            serviceName="Wynajem"
            serviceIco="icon3"
            serviceContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
          lectus quis est, nec malesuada neque volutpat. Massa semper et ut
          malesuada sit enim amet. Cras massa facilisi in ultrices arcu
          volutpat sapien eget. Adipiscing sodales at id at laoreet sem.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus"
          />
          <ServicesCard
            serviceName="Najem"
            serviceIco="icon4"
            serviceContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
          lectus quis est, nec malesuada neque volutpat. Massa semper et ut
          malesuada sit enim amet. Cras massa facilisi in ultrices arcu"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
