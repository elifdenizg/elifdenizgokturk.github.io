import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div>
      {Navigation()}
      <h2 className="text-5xl font-bold mb-10 mx-[16vw]">Contact</h2>
      <div className="flex justify-center text-xl">
        <div className="border-1 bg-[#131313] flex flex-col justify-center items-center w-[68vw] h-[60vh] z-0">
          <div className="flex-col m-10">
            <h3 className="text-center text-2xl font-bold">Mes Coordonnés</h3>
            <div className="flex flex-row gap-3">
              <div className="font-bold flex justify-end">
                N° Téléphone: <br />
                Email:
              </div>
              <div>
                0603569288 <br />
                edgokturk@protonmail.com
              </div>
            </div>
          </div>

          <p className="mb-10">
            Cliquez sur le logo correspondant pour visiter les sites internets!
          </p>
          <div className="flex gap-10">
            <div className="cursor-pointer">
              <i
                class="devicon-github-original"
                style={{ fontSize: "50px" }}
                onClick={() =>
                  window.location.replace("https://github.com/elifdenizg")
                }
              ></i>
            </div>
            <div className="cursor-pointer">
              <i
                class="devicon-linkedin-plain"
                style={{ fontSize: "50px" }}
                onClick={() =>
                  window.location.replace(
                    "https://www.linkedin.com/in/edgokturk/"
                  )
                }
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
