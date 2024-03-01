import { useState } from 'react'

const useOnUpload = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null)

  const onUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)

      return new Promise<void>((resolve) => {
        reader.onload = () => {
          setImageSrc(reader.result as string)
          resolve()
        }
      })
    }
  }
  return {
    imageSrc,
    onUpload,
  }
}
export default useOnUpload
