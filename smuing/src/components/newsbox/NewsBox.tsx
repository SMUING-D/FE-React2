import NEWS_DATA from '../../constants/NEWS_DATA'

const NewsBox: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 mb-10 lg:flex-row px-7 rounded-t-3xl">
      {NEWS_DATA.map(({ id, title, description, image }) => (
        <div className="w-full h-[800px]" key={id}>
          <div className="flex flex-col items-center justify-center w-full h-full gap-4 mt-5 bg-slate-800 rounded-b-3xl">
            <img className="w-full rounded-t-3xl h-3/5" src={image} alt={title} />
            <div className="flex flex-col items-center justify-center gap-10 p-4 h-2/5">
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
