
function ProjectContainer({urlImg, urlProject, description }) {
  return (
    <div className="flex justify-center content-center gap-10 mx-[16vw] border-1 p-3 cursor-pointer" onClick={() => window.location.replace(urlProject)}>
      <img src={urlImg} className="w-1/2"/>
      <p className="text-lg flex flex-col w-1/2 justify-center">
        {description}
      </p>
    </div>
  );
}

export default ProjectContainer;
