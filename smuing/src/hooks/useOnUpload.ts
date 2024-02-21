import { useState } from 'react'

const useOnUpload = () => {
  const [imageSrc, setImageSrc]: any = useState(null)

  const onUpload = (event: any) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result || null)
        resolve()
      }
    })
  }
  return {
    imageSrc,
    onUpload,
  }
}
export default useOnUpload
