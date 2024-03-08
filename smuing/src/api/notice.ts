import api from './index'

export const createNotice = async (formData: string) => {
  const accessToken = localStorage.getItem('accessToken')

  const params = {
    directory: 'notice',
  }
  try {
    const response = await api.post('/notice/create', formData, {
      headers: {
        Authorization: accessToken,
        'Content-Type': 'multipart/form-data',
      },
      params: params,
    })

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const infinityScrollNotice = async (page: number, size: number) => {
  const accessToken = localStorage.getItem('accessToken')
  const params = {
    noticeId: page,
    size: size,
  }
  try {
    const response = await api.get(`/notice/show`, {
      params: params,
      headers: {
        Authorization: accessToken,
      },
    })
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}
