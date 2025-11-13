import Me from "../assets/AboutMe/me2.jpeg";
import Istanbul from "../assets/AboutMe/istanbul.png";
import Mugla from "../assets/AboutMe/mugla.png";
import Strasbourg from "../assets/AboutMe/strasbourg.png";
import Table from "../assets/AboutMe/table.png";
import Me2 from "../assets/AboutMe/me3.png";
import Navigation from "../components/Navigation";
import AboutMeData from "../data/AboutMeData";

const AboutMe = () => {
  return (
    <div className="flex flex-col text-white">
      {Navigation()}
      <div className="flex h-screen justify-center gap-10 mx-[16vw] p-30">
        <img src={Me} className="h-[55vh] w-auto" />
        <div className="flex flex-col h-[55vh] w-1/3 justify-center">
          <h2 className="text-5xl font-bold my-5">À Propos</h2>
          {AboutMeData.General}
        </div>
      </div>
      {AboutMeData.Cities}
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-1/3">
          <b className="text-lg mt-2">Muğla</b>
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
        {AboutMeData.Personal}
      </div>
    </div>
  );
};

export default AboutMe;
