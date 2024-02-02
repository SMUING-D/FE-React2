import { FormOptionProps } from '../../types/types'

const FormOption: React.FC<FormOptionProps> = ({ field, editLabel }) => {
  return (
    <div className="w-full mt-8 mb-10 text-black">
      {field.question_type == 'shortAnswer' && (
        <input
          onChange={(e) => editLabel(field.name, e.target.value)}
          type="text"
          className="block w-full h-10 px-5 rounded-md "
          placeholder={field.label}
        />
      )}
      {field.question_type == 'paragraph' && (
        <textarea
          onChange={(e) => editLabel(field.name, e.target.value)}
          rows={4}
          className="block w-full h-10 px-5 rounded-md "
          placeholder={field.label}
        />
      )}
      {field.question_type == 'checkbox' && (
        <div className="flex flex-col">
          {field.list.map((checkBox, index) => (
            <div key={index} className="flex p-3">
              <input type="checkbox" />
              <input
                onChange={(e) => editLabel(field.name, e.target.value)}
                type="text"
                className="block w-full h-10 px-5 rounded-md"
                placeholder={field.label}
              />
            </div>
          ))}
        </div>
      )}
      {field.question_type == 'multipleChoice' && (
        <div className="flex flex-col">
          {field.list.map((option, index) => (
            <div key={index} className="flex p-3">
              <input type="radio" name="option" />
              <input
                onChange={(e) => editLabel(field.name, e.target.value)}
                type="text"
                className="block w-full h-10 px-5 rounded-md"
                placeholder={field.label}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default FormOption
