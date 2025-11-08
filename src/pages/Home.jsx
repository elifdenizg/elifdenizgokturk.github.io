import HomeCard from "../components/HomeCard";
import Me from "../assets/me.png";

const Home = () => {
  return (
    <div className="flex min-h-screen text-white  my-10 max-w-screen ">
      <div className="flex flex-col gap-10 max-w mx-[16vw]">
        <div>
          <h1 className="text-7xl font-black mb-6">
            Elif Deniz Göktürk
          </h1>
          <p className="text-lg z-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
        <div className="relative flex gap-4 mt-4 z-0">
          <HomeCard title="À PROPOS" url="/AboutMe" />
          <HomeCard title="PROJETS" url="/Projects" />
          <HomeCard title="CONTACT INFO" url="/Contact" />
        </div>
      </div>

      <img 
        src={Me}
        alt="Elif Deniz Göktürk"
        className="absolute bottom-0 left-0 pt-5 h-[80vh] z-10"
      />
    </div>
  );
};

export default Home;
