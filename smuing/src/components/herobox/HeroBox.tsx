const HeroBox: React.FC = () => {
  const textArr: string[] = ['UNIVERSITY', 'MAKEUS', 'CHALLENGE']
  return (
    <div className="h-[900px] w-full bg-[url('./assets/img/coding.webp')] bg-cover text-white">
      <div className="mt-6 text-7xl flex-col pt-40 pl-20 space-y-6 font-bold">
        {textArr.map((element, index) => (
          <p key={index}>{element}</p>
        ))}
        <p className="text-3xl">상명대 코딩 동아리</p>
        <div className="text-2xl space-y-8">
          <button className="mt-[100px] px-9 py-4 rounded-full animate-button bg-[#b5a995] hover:bg-blue-600 active:animate-activeButton">
            6기 모집 준비중
          </button>
          <p className="font-bold">2024년 초, 6기 모집 예정입니다. 자세한 일정은 NOTICES를 참고하세요.</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBox
