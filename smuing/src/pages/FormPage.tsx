import FormContents from '../components/formcontents/FormContents'
import useFormHandling from '../hooks/useFormHandling'

const FormPage: React.FC = () => {
  const {
    isButton,
    formContent,
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
    <div className="flex flex-col min-h-screen px-4 pt-32 bg-rgb-35-39-49">
      <div className="p-4 text-white bg-[#070F2B] rounded-md">
        <h1 className="text-3xl font-semibold">제안서 제출</h1>
      </div>
      <form
        method="post"
        onSubmit={(event) => {
          event.preventDefault()
          handleSubmit()
        }}
        className="flex flex-col items-center w-full bg-[#070F2B] rounded-lg"
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
            className="flex justify-center items-center w-[100px] text-sm text-white sm:text-lg mb-6 p-3 rounded-lg bg-[#535C91] hover:bg-[#9290C3] hover:scale-110"
          >
            제출하기
          </button>
        )}
      </form>
    </div>
  )
}

export default FormPage
