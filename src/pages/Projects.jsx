import ProjectContainer from "../components/ProjectContainer";
import pic from "../assets/AboutMe/istanbul.png";
import Clarternance from "../assets/Projects/Clarternance.png";
import Portfolio from "../assets/Projects/Portfolio.png";
import Navigation from "../components/Navigation";

const ClarternanceDescription = (
  <p>
    Clarternance est une plateforme de Job Board développée avec
    <b> Express.js</b>, utilisant <b>EJS</b> comme moteur de vues et
    <b> PostgreSQL</b> pour la gestion des données. L’interface est responsive
    grâce à <b>Bootstrap 5</b>.
  </p>
);

const PortfolioDescription = (
  <p>
    Mon portfolio est une site web moderne développée avec <b>React</b>,
    utilisant <b>JSX</b> pour la structure des composants et <b>Tailwind CSS</b>{" "}
    pour la mise en forme et le design responsive. L’objectif est de présenter
    mes projets et mon parcours de manière claire, fluide et esthétique.
  </p>
);
const HangmanDescription = <p></p>;

const DevinetteDescription = <p></p>;

const JeuJavaDescription = <p></p>;

const Projects = () => {
  return (
    <div className="flex flex-col text-white">
      {Navigation()}
      <div className="flex flex-col gap-10">
        <div className="mx-[16vw]">
          <h2 className="text-5xl font-bold mb-4">Projets</h2>
          <p className="text-lg">
            Voici un aperçu des projets que j'ai développée. Sous chaque titre,
            vous trouverez les <b>langages</b> utilisés.
            <b> Les technologies clés</b> sont mises en <b>gras</b> dans les
            descriptions afin de mettre en avant les outils et frameworks qui
            ont façonné chaque réalisation.
          </p>
        </div>

        <ProjectContainer
          urlImg={Clarternance}
          urlProject="https://github.com/Thibolognaize/Job-board"
          title="Clarternance"
          skills="Bootstrap / Express / Postgresql"
          description={ClarternanceDescription}
        />

        <ProjectContainer
          urlImg={Portfolio}
          urlProject="https://github.com/Thibolognaize/Job-board"
          title="Portfolio"
          skills="JavaScript / CSS / HTML"
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
