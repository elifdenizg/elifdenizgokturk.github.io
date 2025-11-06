import ProjectContainer from "../components/ProjectContainer";
import pic from "../assets/AboutMe/istanbul.png";
import Navigation from "../components/Navigation";

const Projects = () => {
  const ClarternanceDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.";
  return (
    <div className="flex flex-col text-white">
      {Navigation()}
      <ProjectContainer
        urlImage={pic}
        urlProject="https://github.com/Thibolognaize/Job-board"
        description={ClarternanceDescription}
      />
    </div>
  );
};

export default Projects;
