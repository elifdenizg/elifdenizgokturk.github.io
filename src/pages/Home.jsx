import HomeCard from "../components/HomeCard"
import Me from "../assets/me.png"

const CardClassName = "text-2xl font-bold p-20 border-1 border-white"

const Home = () => {
  return (
    <body className="min-h-screen w-full">
    <div className="flex justify-center items-center flex-col  text-white m-4">
      <h1 className="text-8xl font-black">Elif Deniz Göktürk</h1>
      <div className="columns-3 gap-2 items-center justify-s text-white">
        <img src={Me} alt="edg" className="w-64 h-auto mt-8 position-fixed" />
        <HomeCard title="ABOUT ME" url="./AboutMe" />
        <HomeCard title="PROJECTS" url="./Projects" />
        <HomeCard title="CONTACT" url="./Contact" />
      </div>
    </div>
    </body>
  );
};

export default Home;