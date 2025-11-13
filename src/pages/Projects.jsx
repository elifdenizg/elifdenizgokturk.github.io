import ProjectContainer from "../components/ProjectContainer";
import Clarternance from "../assets/Projects/Clarternance.png";
import Portfolio from "../assets/Projects/Portfolio.png";
import Hangman from "../assets/Projects/Hangman.png";
import Navigation from "../components/Navigation";
import ProjectData from "../data/ProjectData"


const Projects = () => {
  return (
    <div className="flex flex-col text-white pb-10">
      {Navigation()}
      <div className="flex flex-col gap-10">
        <div className="mx-[16vw]">
          <h2 className="text-5xl font-bold mb-4">Projets</h2>
          <p className="text-lg">
            Cette page regroupe les différents projets que j’ai réalisés au
            cours de mon parcours académique. Chaque projet met en avant mes
            compétences en développement et en algorithmique. Les langages et
            technologies principales sont indiqués sous chaque projet.
          </p>
        </div>

        <ProjectContainer
          title="Clarternance"
          skills="Bootstrap / Express / PostgresqlPython, Pygame"
          description={ProjectData.ClarternanceDescription}
          urlImg={Clarternance}
          urlProject="https://github.com/Thibolognaize/Job-board"
        />

        <ProjectContainer
          title="Portfolio"
          skills="React / Tailwind CSS / JavaScript"
          description={ProjectData.PortfolioDescription}
          urlImg={Portfolio}
          urlProject="https://github.com/elifdenizg/elifdenizg.github.io"
        />

        <ProjectContainer
          title="Hangman"
          skills="Python / Pygame"
          description={ProjectData.HangmanDescription}
          urlImg={Hangman}
          urlProject="https://github.com/elifdenizg/Pre-Wading-Pool/tree/main/Day8to10/hangman_pyg"
        />

        <div className="flex justify-center content-center gap-10 mx-[16vw] bg-white/75 p-10 ">
          <div className=" flex flex-col w-2/3 justify-center">
            <div className="my-2">
              <h3 className="font-semibold text-[#131313] text-2xl">Chatbot</h3>
              <p className="italic text-sm text-[#131313]">C++ / CPR / HTTP</p>
            </div>
            <p className="mr-1 text-[#131313]">{ProjectData.DevinetteDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
