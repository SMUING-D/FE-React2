import FormSettingBox from '../components/formsettingbox/FormSettingBox'
import { FORM_SETTING_DATA } from '../constants/FORM_SETTING_DATA'
import { FormSettingData } from '../types/types'

const FormSettingPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-rgb-35-39-49">
      <div className="w-11/12 mt-[120px] py-6 grid lg:grid-cols-4 md:grid-cols-3 gap-4 rounded-xl ">
        {FORM_SETTING_DATA.map((data: FormSettingData) => (
          <FormSettingBox key={data.id} data={data} />
        ))}
      </div>
    </div>
  )
}

export default FormSettingPage
