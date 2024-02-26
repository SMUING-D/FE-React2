import ProjectsList from '../components/projectslist/ProjectList'

const ProjectsPage: React.FC = () => {
  return (
    <div className="w-full flex flex-1 flex-col items-center bg-rgb-35-39-49 py-7 pt-[100px]">
      <h1 className="py-5 text-5xl font-bold">Projects</h1>
      <p className="py-5 font-bold lg:text-2xl sm:text-xl">UMC 동일 지부 내 타학교 학생과</p>
      <p className="py-5 font-bold lg:text-2xl sm:text-xl">상명대학교 학생이 협업해서 만들어낸 프로젝트입니다.</p>
      <ProjectsList />
    </div>
  )
}
export default ProjectsPage
