import ProjectContainer from "../components/ProjectContainer";
import pic from "../assets/AboutMe/istanbul.png";
import Navigation from "../components/Navigation";

const Projects = () => {
  const ClarternanceDescription =
    "Clarternance est une plateforme de Job Board (tableau d’offres d’emploi) développée avec Express.js, utilisant EJS comme moteur de vues pour générer des pages dynamiques et PostgreSQL pour la gestion des données. L’interface est responsive grâce à Bootstrap 5.";

  const PortfolioDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const HangmanDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const DevinetteDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.";

  return (
    <div className="flex flex-col text-white">
      {Navigation()}
      <div className="flex flex-col gap-10">
        <div className="mx-[16vw]">
          <h2 className="text-5xl font-bold mb-4">Projets</h2>
          <p className="text-lg">Liste des projets réalisés par moi meme. 
          les languages utilisés sont notés en dessous de titre des projets. Les tech sont en bold dans les description. <br />
          Apres la presentation des projets il y a une recap de mes skills et les tech que je sais utiliser
          </p>
        </div>

        <ProjectContainer
          urlImg={pic}
          urlProject="https://github.com/Thibolognaize/Job-board"
          title="Clarternance"
          skills="EJS / JavaScript / HTML / CSS"
          description={ClarternanceDescription}
        />

        <ProjectContainer
          urlImg={pic}
          urlProject="https://github.com/Thibolognaize/Job-board"
          title="Clarternance"
          skills="Bootstrap / Express / Postgresql"
          description={ClarternanceDescription}
        />

        <ProjectContainer
          urlImg={pic}
          urlProject="https://github.com/Thibolognaize/Job-board"
          title="Clarternance"
          skills="Bootstrap / Express / Postgresql"
          description={ClarternanceDescription}
        />

        <ProjectContainer
          urlImg={pic}
          urlProject="https://github.com/Thibolognaize/Job-board"
          title="Clarternance"
          skills="Bootstrap / Express / Postgresql"
          description={ClarternanceDescription}
        />
      </div>
    </div>
  );
};

export default Projects;
