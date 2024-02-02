import React from 'react'
import { useState } from 'react'

import PROJECTS_DATA from '../../constants/PROJECTS_DATA'
import { Project } from '../../types/types'
import ProjectCard from '../projectcard/ProjectCard'

const ProjectsList: React.FC = () => {
  const yearArray: (string | number)[] = ['전체', ...new Set(PROJECTS_DATA.map((project) => project.year))]
  const [data, setData] = useState<Project[]>(PROJECTS_DATA)
  const handleYear = (year: string | number) => {
    if (year === '전체') {
      setData(PROJECTS_DATA)
      return
    }
    const filteredData = PROJECTS_DATA.filter((project) => project.year === year)
    setData(filteredData)
  }
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {yearArray.map((year, idx) => (
          <button
            className="w-[100] h-[50] text-white border-4 rounded-2xl border-orange-300 py-3 px-8 hover:scale-110 mx-2.5"
            key={idx}
            onClick={() => handleYear(year)}
          >
            {year === '전체' ? '전체' : `${year}기`}
          </button>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {data.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsList
