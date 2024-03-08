import api from './index'

export const createNotice = async (formData) => {
  // const requestBody = {
  //   title: title,
  //   content: content,
  //   images: images,
  // }
  const accessToken = localStorage.getItem('accessToken')

  try {
    const response = await api.post('/api/notice/create', formData, {
      headers: {
        Authorization: accessToken,
        'Content-Type': 'multipart/form-data', // Set the content type to multipart form data
      },
    })

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
