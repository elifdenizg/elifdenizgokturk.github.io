import { useNavigate } from "react-router-dom";

function ProjectContainer(urlImg, urlProject, description) {
  const navigate = useNavigate();
  return (
    <div
      className="flex h-screen justify-center gap-10 mx-[16vw]"
      onClick={() => navigate(urlProject)}
    >
      <img src={urlImg} className="h-[55vh] w-auto" />
      <p className="text-lg flex flex-col h-[55vh] w-1/3 justify-center">
        {description}
      </p>
    </div>
  );
}

export default ProjectContainer;
