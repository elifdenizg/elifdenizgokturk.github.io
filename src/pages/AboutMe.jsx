import Me from "../assets/AboutMe/meAP.jpg";
import Istanbul from "../assets/AboutMe/istanbul.png";
import Mugla from "../assets/AboutMe/mugla.png";
import Strasbourg from "../assets/AboutMe/strasbourg.png";
import Table from "../assets/AboutMe/table.png";
import Me2 from "../assets/AboutMe/me3.png";
import Navigation from "../components/Navigation";

const AboutMe = () => {
  return (
    <div className="flex flex-col text-white">
      {Navigation()}
      <div className="flex h-screen justify-center gap-10 mx-[16vw]">
        <img src={Me} className="h-[55vh] w-auto" />
        <div className="flex flex-col h-[55vh] w-1/3 justify-center">
          <h2 className="text-5xl my-5">À Propos</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <p className="text-lg m-7 flex text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-1/3">
          <b className="text-lg mt-2">Mugla</b>
          <img src={Mugla} className="w-full" />
        </div>

        <div className="flex flex-col items-center w-1/3">
          <b className="text-lg mt-2">Istanbul</b>
          <img src={Istanbul} className="w-full" />
        </div>

        <div className="flex flex-col items-center w-1/3">
          <b className="text-lg mt-2">Strasbourg</b>
          <img src={Strasbourg} className="w-full" />
        </div>
      </div>
      <div className="relative flex flex-col items-center m-5">
        <img src={Me2} className="h-[55vh] z-10 relative -mb-[8vh]" />
        <img src={Table} className="h-[55vh] z-20" alt="Table" />
        <p className="text-lg text-center -mt-[35vh] max-w-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
