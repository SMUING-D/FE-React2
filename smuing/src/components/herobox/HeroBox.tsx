import HERO_TEST_ARR from '../../constants/HERO_TEST_ARR'

const HeroBox: React.FC = () => {
  return (
    <div className=" w-full bg-[url('./assets/img/coding.webp')] bg-cover text-white">
      <div className="flex-col pt-40 pl-6 space-y-6 text-5xl font-bold sm:text-7xl sm:pl-20">
        {HERO_TEST_ARR.map((element, index) => (
          <p className="overflow-hidden" key={index}>
            {element}
          </p>
        ))}

        <p className="text-3xl sm:text-2xl">상명대 코딩 동아리</p>
        <div className="py-10 text-2xl">
          <button className="mt-[100px] px-9 py-4 rounded-full animate-button bg-[#b5a995] hover:bg-blue-600 active:animate-activeButton">
            6기 모집 준비중
          </button>
          <div className="flex flex-col gap-4 mt-5">
            <p className="text-xl font-bold sm:text-3xl">2024년 초, 6기 모집 예정입니다.</p>
            <p className="text-xl font-bold sm:text-3xl">자세한 일정은 NOTICES를 참고하세요.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBox
