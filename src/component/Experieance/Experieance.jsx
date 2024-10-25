import { useState } from "react";
import Container from "../Container/Container";
import WorkCard from "../WorkCard/WorkCard";

const Experieance = () => {
  const [reactBd, setreactBd] = useState(true);
  const [googleBd, setgoogleBd] = useState(false);
  const [appleBd, setappleBd] = useState(false);
  const [splashBd, setsplashBd] = useState(false);
  const [AmazoonBd, setAmazoonBd] = useState(false);

  const handleRect = () => {
    setreactBd(true);
    setAmazoonBd(false);
    setappleBd(false);
    setgoogleBd(false);
    setsplashBd(false);
  };
  const handleGoogle = () => {
    setreactBd(false);
    setAmazoonBd(false);
    setappleBd(false);
    setgoogleBd(true);
    setsplashBd(false);
  };
  const handleAmazoon = () => {
    setreactBd(false);
    setAmazoonBd(true);
    setappleBd(false);
    setgoogleBd(false);
    setsplashBd(false);
  };
  const handleApple = () => {
    setreactBd(false);
    setAmazoonBd(false);
    setappleBd(true);
    setgoogleBd(false);
    setsplashBd(false);
  };
  const handleSpless = () => {
    setreactBd(false);
    setAmazoonBd(false);
    setappleBd(false);
    setgoogleBd(false);
    setsplashBd(true);
  };

  return (
    <Container
      id={"Experience"}
      className="py-20 flex lg:px-0 md:px-24  flex-col items-start text-lg space-y-6"
    >
      <div className="lg:ml-40">
        <div>
          <h1 className="text-2xl font-semibold text-lightColor mb-3">
            <span className="mr-2 text-designColor">02.</span> Where I have
            worked
            <span className="text-gray-500"> ______________</span>
          </h1>
        </div>
        <div className="w-full mt-10 lg:flex gap-8">
          <ul className="mt-6 gap-6 space-y-5 border-l-2 shadow-2xl border-black">
            <li
              onClick={handleRect}
              className={`${
                reactBd
                  ? "border-l-2 border-designColor text-designColor"
                  : "border-l-hovarColor text-darktext"
              }  bg-transparent hover:bg-slate-600 text-sm duration-300 px-4 font-medium`}
            >
              ReactBd
            </li>
            <li
              onClick={handleGoogle}
              className={`${
                googleBd
                  ? "border-l-2 border-designColor text-designColor"
                  : "border-l-hovarColor text-darktext"
              }  bg-transparent hover:bg-slate-600 text-sm duration-300 px-4 font-medium`}
            >
              GoogleBd
            </li>
            <li
              onClick={handleApple}
              className={`${
                appleBd
                  ? "border-l-2 border-designColor text-designColor"
                  : "border-l-hovarColor text-darktext"
              }  hover:bg-slate-600 text-sm duration-300 px-4 font-medium`}
            >
              AppleBd
            </li>
            <li
              onClick={handleSpless}
              className={`${
                splashBd
                  ? "border-l-2 border-designColor text-designColor"
                  : "border-l-hovarColor text-darktext"
              }  hover:bg-slate-600 text-sm duration-300 px-4 font-medium`}
            >
              SplashBd
            </li>
            <li
              onClick={handleAmazoon}
              className={`${
                AmazoonBd
                  ? "border-l-2 border-designColor text-designColor"
                  : "border-l-hovarColor text-darktext"
              }  mx-auto bg-transparent hover:bg-slate-600 text-sm duration-300 px-4 font-medium`}
            >
              AmazoonBd
            </li>
          </ul>
          <div className="">
            {reactBd && (
              <WorkCard
                jobtitle={"Reactbd"}
                des={
                  "Write modern, performant, maintainable code for a diverse array of client and internal projects"
                }
              ></WorkCard>
            )}
            {AmazoonBd && (
              <WorkCard
                jobtitle={"AmazoonBd"}
                des={
                  "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
                }
              ></WorkCard>
            )}
            {splashBd && (
              <WorkCard
                jobtitle={"SplasBd"}
                des={
                  "Write modern, performant, maintainable code for a diverse array of client and internal projects"
                }
              ></WorkCard>
            )}
            {appleBd && (
              <WorkCard
                jobtitle={"AppleBd"}
                des={
                  "Write modern, performant, maintainable code for a diverse array of client and internal projects"
                }
              ></WorkCard>
            )}
            {googleBd && (
              <WorkCard
                jobtitle={"GoogleBd"}
                des={
                  "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis"
                }
              ></WorkCard>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experieance;
