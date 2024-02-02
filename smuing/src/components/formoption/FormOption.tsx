import { FormOptionProps } from '../../types/types'

const FormOption: React.FC<FormOptionProps> = ({ field, editLabel }) => {
  const { name, question_type, label, list } = field

  return (
    <div className="w-full mt-8 mb-10 text-black">
      {question_type === 'shortAnswer' && (
        <input
          onChange={(e) => editLabel(name, e.target.value)}
          type="text"
          className="block w-full h-10 px-5 rounded-md "
          placeholder={label}
        />
      )}
      {question_type === 'paragraph' && (
        <textarea
          onChange={(e) => editLabel(name, e.target.value)}
          rows={4}
          className="block w-full h-10 px-5 rounded-md "
          placeholder={label}
        />
      )}
      {question_type === 'checkbox' && (
        <div className="flex flex-col">
          {list.map((checkBox, index) => (
            <div key={index} className="flex p-3">
              <input type="checkbox" />
              <input
                onChange={(e) => editLabel(name, e.target.value)}
                type="text"
                className="block w-full h-10 px-5 rounded-md"
                placeholder={label}
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
                onChange={(e) => editLabel(name, e.target.value)}
                type="text"
                className="block w-full h-10 px-5 rounded-md"
                placeholder={label}
              />
            </div>
          ))}
        </div>
      )}
      {question_type}
    </div>
  )
}

export default FormOption
