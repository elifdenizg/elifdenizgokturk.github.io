function ProjectContainer({ urlImg, urlProject, title, skills, description }) {
  return (
    <div
      className="flex justify-center content-center gap-10 mx-[16vw] bg-white/75 p-10 cursor-pointer hover:bg-white"
      onClick={() => window.location.replace(urlProject)}
    >
      <img src={urlImg} className="w-1/2 border-1 " />
      <div className=" flex flex-col w-1/2 justify-center">
        <div className="my-2">
          <h3 className="font-semibold text-[#131313] text-2xl">{title}</h3>
          <p className="italic text-sm text-[#131313]">{skills}</p>
        </div>
        <p className="mr-1 text-[#131313]">{description}</p>
      </div>
    </div>
  );
}

export default ProjectContainer;
