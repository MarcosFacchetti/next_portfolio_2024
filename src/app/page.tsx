import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiPython,
  SiExpress,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiMysql,
  SiGodotengine,
  SiBlender,
  SiMicrosoftexcel,
  SiTailwindcss,
  SiMongodb,
  SiGimp,
  SiAudacity,
  SiNextdotjs,
} from "react-icons/si";

const habilidades = {
  Frontend: [
    { name: 'HTML', icon: SiHtml5 },
    { name: 'CSS', icon: SiCss3 },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'React', icon: SiReact },
    { name: 'Next', icon: SiNextdotjs },
    { name: 'Bootstrap', icon: SiBootstrap },
    { name: 'Tailwind', icon: SiTailwindcss },

  ],
  Backend: [
    { name: 'Python', icon: SiPython },
    { name: 'Express.js', icon: SiExpress },
    { name: 'Django', icon: SiDjango },
    { name: 'Flask', icon: SiFlask },
    { name: 'FastApi', icon: SiFastapi },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Mongodb', icon: SiMongodb },

  ],
  Extras: [
    { name: 'Godot', icon: SiGodotengine },
    { name: 'Blender', icon: SiBlender },
    { name: 'Excel', icon: SiMicrosoftexcel },
    { name: 'Gimp', icon: SiGimp},
    { name: 'Audacity', icon: SiAudacity},


  ],
};

const Home = () => {
  return (
    <div className="flex justify-center items-center pt-12">
      <div className='text-center'>
        <h1 className="text-4xl font-bold mb-4">Marcos Facchetti</h1>
        <p className="text-2xl mb-4">Programador Fullstack</p>
        <div className="mb-4">
          <p className="text-lg">+3 años de experiencia</p>
          <p className="text-lg">Nacido en Argentina el 9/11/2000</p>
        </div>
        <div>
          <p className="text-2xl pt-10 mb-5">Tecnologías</p>
          <ul className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(habilidades).map(([category, skills], index) => (
              <li key={index} className="flex flex-col items-center">
                <p className="text-lg font-bold mb-2">{category}</p>
                <ul className="flex flex-wrap justify-center">
                  {skills.map((skill, idx) => (
                    <li key={idx} className="text-base ml-4 mt-2 mr-2 flex items-center">
                      <skill.icon className="mr-1 transition text-xl hover:scale-[1.5]" /> {skill.name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
