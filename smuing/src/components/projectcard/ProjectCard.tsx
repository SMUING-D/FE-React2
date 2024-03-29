import { motion } from 'framer-motion'
import { useState } from 'react'
import { CgWebsite } from 'react-icons/cg'
import { IoLogoGithub } from 'react-icons/io'

import { Project } from '../../types/types'

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }
  console.log(project)

  return (
    <div
      className="w-[400px] h-[400px] margin cursor-pointer flex justify-center items-center"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <motion.div
        className="p-[10px]"
        animate={{
          scale: [0.3, 1.03, 0.95],
          borderRadius: ['20%', '30%', '40%', '30%', '20%'],
        }}
      >
        <img
          className=" w-[360px] h-[360px] object-cover rounded-[3rem] border-[10px] border-indigo-200 "
          src={project.img}
          alt={project.name}
        />
      </motion.div>
      {isHovering && (
        <motion.div
          className=" absolute bg-stone-800 rounded-[3rem] opacity-100 z-10 w-[380px] h-[380px] flex flex-col justify-center items-center text-white gap-2.5"
          animate={{
            scale: [0.3, 1.03, 0.95],
            borderRadius: ['20%', '30%', '40%', '30%', '20%'],
          }}
        >
          <p className="text-3xl">{project.name}</p>
          <p className="p-5 text-sm">{project.description}</p>
          <div className="flex gap-2.5">
            {project.theme.map((item, index) => (
              <div
                className="rounded-[3rem] p-[10px] w-[100px] border-2 flex items-center justify-center border-solid border-white"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 whitespace-pre-line">
            {project.member.map((member, index) => (
              <div
                className="text-sm p-1 whitespace-pre-wrap border-2 border-solid rounded-[5px] border-orange-300"
                key={index}
              >
                {member}
              </div>
            ))}
          </div>
          <div className="flex justify-center ">
            {project.github && (
              <a href={project.github} className="">
                <IoLogoGithub size={40}></IoLogoGithub>
              </a>
            )}
            {project.release && (
              <a href={project.release} className="">
                <CgWebsite size={40}></CgWebsite>
              </a>
            )}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default ProjectCard
