import Marquee from "react-fast-marquee";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";

const Becerilerim=()=> {
  const skills = [
    { id: 1, name: "HTML", icon: <FaHtml5 className="text-orange-600 w-12 h-12" /> },
    { id: 2, name: "CSS", icon: <FaCss3Alt className="text-blue-600 w-12 h-12" /> },
    { id: 3, name: "JavaScript", icon: <FaJs className="text-yellow-400 w-12 h-12" /> },
    { id: 4, name: "React", icon: <FaReact className="text-cyan-400 w-12 h-12" /> },
    { id: 5, name:  "Node.js", icon: <FaNodeJs className="text-green-500 w-12 h-12" /> },
  ];

  return (
    <section id="becerilerim" className="py-20 ">
      <h2 className="text-3xl font-bold text-center mb-10">Becerilerim</h2>

      <div className=" p-2">
        <Marquee speed={30} gradient={false} pauseOnHover={true}>
          {skills.map((skill) => (
            <div key={skill.id} className=" flex items-center space-x-1 sm:space-x-5 mx-5 sm:mx-21 ">
              {skill.icon}
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default Becerilerim;
