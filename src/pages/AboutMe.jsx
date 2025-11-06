import Me from "../assets/meAP.jpg";
import Istanbul from "../assets/istanbul.png";
import Mugla from "../assets/mugla.png";
import Strasbourg from "../assets/strasbourg.png";

const AboutMe = () => {
  return (
    <div className="flex flex-col text-white ">
      <h1 className="text-7xl font-black mb-6 my-10 mx-15">
        Elif Deniz Göktürk
      </h1>
      <div className="flex gap-10 h-screen justify-center gap-10 mx-[16vw]">
        <img src={Me} className="h-[55vh] w-auto" />
        <div className="flex flex-col h-[55vh] w-1/3 content-center">
          <h2 className="text-5xl my-5">À Propos</h2>
          <p className="text-lg z-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex">
          <div className="w-1/3 justify-self-center"><b>Mugla</b></div>
          <div className="w-1/3 justify-self-center"><b>Istanbul</b></div>
          <div className="w-1/3 justify-self-center"><b>Strasbourg</b></div>
      </div>
      <div className="flex">
        <img src={Mugla} className="w-1/3" />
        <img src={Istanbul} className="w-1/3" />
        <img src={Strasbourg} className="w-1/3" />
      </div>
      </div>
    </div>
  );
};

export default AboutMe;
