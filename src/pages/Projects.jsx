import ProjectContainer from "../components/ProjectContainer";
import Clarternance from "../assets/Projects/Clarternance.png";
import Portfolio from "../assets/Projects/Portfolio.png";
import Hangman from "../assets/Projects/Hangman.png";
import Navigation from "../components/Navigation";

const ClarternanceDescription = (
  <p>
    Clarternance est un site web de <b>recherche d'emploi</b> développée avec
    <b>Express.js</b>, utilisant <b>EJS</b> comme moteur de vues et{" "}
    <b>PostgreSQL</b> pour la gestion des données. L’interface est responsive
    grâce à <b>Bootstrap 5</b>.
  </p>
);

const PortfolioDescription = (
  <p>
    Mon portfolio est une site web développée avec <b>React</b>, utilisant{" "}
    <b>JSX</b> pour la structure des composants et <b>Tailwind</b> pour la mise
    en forme et le design responsive. L’objectif est de présenter mes projets et
    mon parcours de manière claire, fluide et esthétique.
  </p>
);
const HangmanDescription = (
  <p>
    Hangman est un <b>jeu du pendu</b> développé en <b>Python</b>, utilisant la
    bibliothèque <b>Pygame</b> pour la gestion de l’affichage, des événements et
    des interactions utilisateur. Le jeu propose une interface simple et
    intuitive permettant de deviner des mots tout en s’amusant.
  </p>
);

const DevinetteDescription = (
  <p>
    Chatbot L3 est un programme de <b>jeu de devinettes interactif</b> développé
    en <b>C++</b>. Le chatbot pense à un mot et répond aux questions du joueur
    par “oui” ou “non” jusqu’à ce que celui-ci devine la réponse. Ensuite, les
    rôles s’inversent : c’est au chatbot de deviner le mot choisi par le joueur.
    Le projet communique avec un serveur LLM grâce à la bibliothèque <b>CPR</b>{" "}
    pour gérer <b>les requêtes HTTP</b>.
  </p>
);

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
          description={ClarternanceDescription}
          urlImg={Clarternance}
          urlProject="https://github.com/Thibolognaize/Job-board"
        />

        <ProjectContainer
          title="Portfolio"
          skills="React / Tailwind CSS / JavaScript"
          description={PortfolioDescription}
          urlImg={Portfolio}
          urlProject="https://github.com/elifdenizg/elifdenizg.github.io"
        />

        <ProjectContainer
          title="Hangman"
          skills="Python / Pygame"
          description={HangmanDescription}
          urlImg={Hangman}
          urlProject="https://github.com/elifdenizg/Pre-Wading-Pool/tree/main/Day8to10/hangman_pyg"
        />

        <div className="flex justify-center content-center gap-10 mx-[16vw] bg-white/75 p-10 ">
          <div className=" flex flex-col w-2/3 justify-center">
            <div className="my-2">
              <h3 className="font-semibold text-[#131313] text-2xl">Chatbot</h3>
              <p className="italic text-sm text-[#131313]">C++ / CPR / HTTP</p>
            </div>
            <p className="mr-1 text-[#131313]">{DevinetteDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
