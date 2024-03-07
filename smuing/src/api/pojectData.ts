import api from './index'

export const getProjectData = async (numOfProjectsToSkip: number, numOfProjectsToLoad: number) => {
  console.log('프로젝트 api 연동')
  // 인피니티 스크롤임
  try {
    const response = await api.get(
      `/api/project/show/:period?projectId=${numOfProjectsToSkip}&size=${numOfProjectsToLoad}`,
    )
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log('프로젝트 불러오기 에러', error)
    throw error // 에러 발생시키기
  }
}
