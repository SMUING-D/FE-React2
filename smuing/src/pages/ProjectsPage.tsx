import ProjectsList from '../components/projectslist/ProjectList'

const ProjectsPage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center bg-slate-700">
      <div className="w-full flex flex-col items-center py-7 ">
        <h1 className="text-5xl font-bold py-5">Projects</h1>
        <p className="lg:text-2xl font-bold py-5 sm:text-xl">UMC 동일 지부 내 타학교 학생과</p>
        <p className="lg:text-2xl font-bold py-5 sm:text-xl">상명대학교 학생이 협업해서 만들어낸 프로젝트입니다.</p>
      </div>
      <ProjectsList />
    </div>
  )
}
export default ProjectsPage
