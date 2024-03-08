import { useRef, useState } from 'react'

import { createNotice } from '../api/notice'
import Xbtn from '../assets/img/XBtn.svg'
import LoginNav from '../components/login/LoginNav'
import TextArea from '../components/textarea/TextArea'
import { titleText } from '../constants/ADD_ANNOUNCE'

// import { AddAnnounce } from '../../types/types'

const AddAnnounce = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState<{ [key: string]: string }>({})
  const [imageFiles, setImageFiles] = useState<File[]>([])

  const getWindowWidth = () => window.innerWidth

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }
  const handleTextChange = (newValue: string, textTitle: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [`${textTitle.toLowerCase().replace(' ', '')}`]: newValue,
    }))
  }

  const handleAnnounceAdd = async () => {
    // const formDataWithImages = { ...formData, images: imageFiles }
    // console.log('공지사항 등록')
    // console.log('공지사항 정보:', formDataWithImages)

    try {
      const formData1 = new FormData()

      formData1.append('title', formData.title)
      formData1.append('content', formData.content)

      // Append each image file to FormData
      imageFiles.forEach((file) => {
        formData1.append(`images`, file)
      })

      const response = await createNotice(formData1)
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  const handleAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files

    if (files && files.length > 0) {
      const selectedFile = files[0]
      setImageFiles((prevFiles) => [...prevFiles, selectedFile])
    }
    console.log(imageFiles)
  }

  const handleImageDelete = (index: number) => {
    const newImages = [...imageFiles]
    newImages.splice(index, 1)
    setImageFiles(newImages)
    console.log(imageFiles)
  }

  return (
    <div className="bg-rgb-35-39-49">
      <LoginNav title="SMUMC for management team (add announcement)" />
      <div className="w-full h-full min-h-screen">
        <div className="text-center pt-[80px]">
          <p className="text-white text-4xl pb-[10px] sm: mt-[20px]">공지사항 등록</p>
          <p className="text-white text-sm">*운영진들만 접근 가능한 프로젝트 등록 페이지입니다.</p>
        </div>

        <div className="text-center pt-4 sm:pt-[10px]">
          {titleText.map((title, index) => (
            <TextArea
              key={index}
              value={formData[title.value] || ''}
              onChange={(newValue) => handleTextChange(newValue, title.value)}
              placeholder={`프로젝트 ${title.text}을(를) 입력해주세요`}
              width={getWindowWidth() < 768 ? 'auto' : '700'}
              height={title.height}
              maxChars={title.max}
              textTitle={title.text}
            />
          ))}
        </div>

        <div>
          <button className="bg-gray-600 w-[200px] h-[50px] ml-[20px] mb-[20px] rounded-lg" onClick={handleButtonClick}>
            공지사항 이미지 추가하기
          </button>
          <input
            ref={fileInputRef}
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleAddImage}
            style={{ display: 'none' }}
          />
        </div>
        <div className="flex overflow-x-auto">
          {imageFiles.map((file, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[250px] h-[250px] bg-gray-600 ml-[20px] rounded-xl p-[5px] mb-[10px]"
            >
              <img src={Xbtn} onClick={() => handleImageDelete(index)} className="float-right w-[30px] h-[30px]" />
              <img
                src={URL.createObjectURL(file)}
                alt={`Selected Image ${index + 1}`}
                style={{
                  width: '200px',
                  height: '200px',
                  margin: '10px',
                  textAlign: 'center',
                  alignItems: 'center',
                  marginLeft: '20px',
                  borderRadius: '10px',
                  paddingBottom: '10px',
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center pb-[40px] mt-[50px]">
          <button
            type="button"
            className="sm:w-[200px] mt-4 sm:mt-[10px] py-2 border rounded-md focus:outline-none focus:border-blue-500 text-white"
            onClick={handleAnnounceAdd}
          >
            공지사항 등록하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddAnnounce
