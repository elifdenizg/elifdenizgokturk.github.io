import ProjectContainer from "../components/ProjectContainer";
import pic from "../assets/AboutMe/istanbul.png";
import Navigation from "../components/Navigation";

const Projects = () => {
  const ClarternanceDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const PortfolioDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const HangmanDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.";


  return (
    <div className="flex flex-col gap-10 text-white">
      {Navigation()}
      <h2 className="text-5xl font-bold flex justify-center">Projets</h2>
      <ProjectContainer
        urlImg={pic}
        urlProject="https://github.com/Thibolognaize/Job-board"
        description={ClarternanceDescription}
      />

      <ProjectContainer
        urlImg={pic}
        urlProject="https://github.com/Thibolognaize/Job-board"
        description={PortfolioDescription}
      />

      <ProjectContainer
        urlImg={pic}
        urlProject="https://github.com/Thibolognaize/Job-board"
        description={HangmanDescription}
      />
    </div>
  );
};

export default Projects;
