import FormContents from '../components/formcontents/FormContents'
import useFormHandling from '../hooks/useFormHandling'

const FormPage: React.FC = () => {
  const {
    isButton,
    formContent,
    addQuestion,
    duplicateQuestion,
    addOption,
    handleRequire,
    deleteQuestion,
    editTitle,
    editLabel,
    editFieldType,
    handleSubmit,
    editList,
  } = useFormHandling()

  return (
    <div className="flex flex-col items-center min-h-screen gap-10 px-4 pt-32 bg-rgb-35-39-49">
      <div className="p-4 text-black bg-indigo-400 rounded-md">
        <h1 className="text-3xl font-semibold">폼 생성 페이지</h1>
      </div>
      <form
        method="post"
        onSubmit={(event) => {
          event.preventDefault()
          handleSubmit()
        }}
        className="flex flex-col items-center w-full bg-indigo-400 rounded-lg"
      >
        {formContent.map((field, index) => (
          <FormContents
            key={index}
            field={field}
            editTitle={editTitle}
            editFieldType={editFieldType}
            deleteQuestion={deleteQuestion}
            addOption={() => addOption(field.name)}
            handleRequire={() => handleRequire(field.name)}
            duplicateQuestion={() => duplicateQuestion(field.name)}
            editLabel={editLabel}
            editList={editList}
          />
        ))}
        {isButton && (
          <button
            type="submit"
            className="flex justify-center items-center w-[100px] sm:w-[200px] text-sm sm:text-lg mb-6 p-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 hover:scale-110"
          >
            제출하기
          </button>
        )}
      </form>
      <div className="fixed flex flex-col items-center bg-white rounded-md right-5 sm:right-20">
        <button onClick={() => addQuestion()}>
          <div className="flex items-center justify-center h-10 p-5 bg-gray-500 rounded-md hover:bg-gray-400 hover:scale-110">
            질문 추가하기
          </div>
        </button>
      </div>
    </div>
  )
}

export default FormPage
