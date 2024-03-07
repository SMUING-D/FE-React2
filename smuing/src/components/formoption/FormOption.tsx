import useOnUpload from '../../hooks/useOnUpload'
import { FormOptionProps } from '../../types/types'

const FormOption: React.FC<FormOptionProps> = ({ field, editLabel, editList }) => {
  const { name, question_type, label, list } = field
  const { imageSrc, onUpload } = useOnUpload()
  return (
    <div className="w-full mt-8 mb-10 text-black">
      {question_type === 'shortAnswer' && (
        <input
          onChange={(e) => editLabel(name, e.target.value)}
          type="text"
          className="block w-full h-10 px-5 rounded-md "
          placeholder={'내용을 입력해주세요'}
          value={label}
        />
      )}
      {question_type === 'paragraph' && (
        <textarea
          onChange={(e) => editLabel(name, e.target.value)}
          rows={4}
          className="block w-full h-10 px-5 rounded-md "
          placeholder={'내용을 입력해주세요'}
          value={label}
        />
      )}
      {question_type === 'checkbox' && (
        <div className="flex flex-col">
          {list.map((checkBox, index) => (
            <div key={index} className="flex p-3">
              <input type="checkbox" />
              <input
                onChange={(e) => editList(name, index, e.target.value)}
                type="text"
                className="block w-full h-10 px-5 rounded-md"
                placeholder="질문을 추가해주세요"
              />
            </div>
          ))}
        </div>
      )}
      {question_type === 'multipleChoice' && (
        <div className="flex flex-col">
          {list.map((option, index) => (
            <div key={index} className="flex p-3">
              <input type="radio" name="option" />
              <input
                onChange={(e) => editList(name, index, e.target.value)}
                type="text"
                className="block w-full h-10 px-5 rounded-md"
                placeholder="질문을 추가해주세요"
              />
            </div>
          ))}
        </div>
      )}
      {question_type === 'imageBox' && (
        <div>
          <label className="p-3 bg-red-300 rounded-lg cursor-pointer" htmlFor="Img">
            이미지 추가
          </label>
          {imageSrc && <img className="w-1/2 mt-3" src={imageSrc} />}
          <input className="hidden" id="Img" type="file" accept="image/*" onChange={(event) => onUpload(event)} />
          <input
            onChange={(e) => editLabel(name, e.target.value)}
            type="text"
            className="block w-full h-10 px-5 rounded-md "
            placeholder="내용을 추가해주세요"
            value={label}
          />
        </div>
      )}
    </div>
  )
}

export default FormOption
