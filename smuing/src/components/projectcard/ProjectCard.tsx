import { useState } from 'react'

type Project = {
  id: number
  name: string
  description: string
  theme: string[]
  github: string | null
  year: number
  member: string[]
  stack: string[]
  img: string
  release: string | null
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <div
      className="w-[400px] h-[400px] margin cursor-pointer flex justify-center items-center"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="p-[10px]">
        <img
          className=" w-[360px] h-[360px] object-cover rounded-[3rem] border-[10px] border-indigo-200 "
          src={project.img}
          alt={project.name}
        />
      </div>
      {isHovering && (
        <div className=" absolute bg-stone-800 rounded-[3rem] opacity-100 z-10 w-[360px] h-[360px] flex flex-col justify-center items-center text-white gap-2.5">
          <p className="text-3xl">{project.name}</p>
          <p className="text-sm">{project.description}</p>
          <div className="flex gap-2.5">
            {project.theme.map((item, index) => (
              <div className="rounded-[3rem] p-[10px] border-2 border-solid border-indigo-500/50" key={index}>
                {item}
              </div>
            ))}
          </div>
          <div className="whitespace-pre-line flex flex-wrap justify-center items-center gap-3">
            {project.member.map((member, index) => (
              <div
                className="text-sm whitespace-pre-wrap border-2 border-solid rounded-[5px] border-rose-600"
                key={index}
              >
                {member}
              </div>
            ))}
          </div>
          {project.github && (
            <a href={project.github} className="">
              깃허브 주소
            </a>
          )}
          {project.release && (
            <a href={project.release} className="">
              배포 주소
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export default ProjectCard
