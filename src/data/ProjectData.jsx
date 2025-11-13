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

export default {
  ClarternanceDescription,
  PortfolioDescription,
  HangmanDescription,
  DevinetteDescription,
};
