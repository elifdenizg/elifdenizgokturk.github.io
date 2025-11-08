function ProjectContainer({ urlImg, urlProject, title, skills, description }) {
  return (
    <div
      className="flex justify-center content-center gap-10 mx-[16vw] border-1 p-3 cursor-pointer"
      onClick={() => window.location.replace(urlProject)}
    >
      <img src={urlImg} className="w-1/2" />
      <div className=" flex flex-col w-1/2 justify-center">
      <div className="my-2">
        <h3 className="font-semibold text-2xl">{title}</h3>
        <p className="italic text-sm">{skills}</p>
      </div>
        <p className="mr-1">{description}</p>
      </div>
    </div>
  );
}

export default ProjectContainer;
