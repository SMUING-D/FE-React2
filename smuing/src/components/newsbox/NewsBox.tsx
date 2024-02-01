import { newsData } from '../../types/types'

const NewsBox: React.FC = () => {
  const newsData: newsData[] = [
    {
      id: 1,
      title: 'UMC 5기 데모데이',
      description:
        'UMC 5기 방학 프로젝트가 2024 방학 중 진행됩니다. KISS 지부 아이디어를 토대로한 PM 챌린저의 기획 소개를 통해 여러 차례에 걸쳐 개발자가 매칭됩니다. 1차 매칭은 12월 10일(일)에 시작됩니다. 많은 관심 바랍니다!',
      image: '/images/demoday.webp',
    },
    {
      id: 2,
      title: '5th UMC iOS Conference',
      description:
        'iOS를 같이 공부하고 있는 사람들의 이야기도 들으며 행사에 참여한 다른 챌린저들과 의미 있는 시간을 가져볼 수 있으면 좋겠습니다.',
      image: '/images/conference.webp',
    },
  ]

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-7 rounded-t-3xl mb-10">
      {newsData.map(({ id, title, description, image }) => (
        <div className="w-full h-[800px]" key={id}>
          <div className="mt-5 h-full w-full flex flex-col justify-center items-center gap-4  bg-slate-800 rounded-b-3xl">
            <img className="rounded-t-3xl w-full h-3/5" src={image} alt={title} />
            <div className="p-4 flex flex-col items-center justify-center gap-10 h-2/5">
              <h1 className="text-2xl md:text-4xl">{title}</h1>
              <p className="text-sm md:text-xl lg:text-2xl">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsBox
