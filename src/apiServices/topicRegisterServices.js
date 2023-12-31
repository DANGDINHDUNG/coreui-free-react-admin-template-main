import request from '../utils/request'

export const getTopicRegister = async () => {
  try {
    const response = await request.get('/TopicRegister/GetAll')
    // Success 🎉
    console.log(response)
    return response.data
  } catch (error) {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      console.log(error.request)
    } else {
      console.log('Error', error.message)
    }
    console.log(error)
  }
}
export const createTopicRegister = async (topicRegister) => {
  try {
    const response = await request.post('/TopicRegister/AddTopicRegister', topicRegister)
    console.log(topicRegister)
    return response.data
  } catch (error) {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      console.log(error.request)
    } else {
      console.log('Error', error.message)
    }
    console.log(error)
  }
}
export const getTopicRegisterbyID = async (id) => {
  try {
    const response = await request.get(`/TopicRegister/GetTopicRegisterByID/${id}`)
    console.log(response)
    return response.data
  } catch (error) {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      console.log(error.request)
    } else {
      console.log('Error', error.message)
    }
    console.log(error)
  }
}

export const GetTopicStatus = async (id) => {
  try {
    const response = await request.get(`/TopicRegister/GetTopicStatus/${id}`)
    console.log(response)
    return response.data
  } catch (error) {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      console.log(error.request)
    } else {
      console.log('Error', error.message)
    }
    console.log(error)
  }
}

export const updateTopicRegister = async (id, topicRegister) => {
  try {
    const response = await request.put(`/TopicRegister/UpdateTopicRegister/${id}`, topicRegister)
    console.log(topicRegister)
    return response.data
  } catch (error) {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      console.log(error.request)
    } else {
      console.log('Error', error.message)
    }
    console.log(error)
  }
}
export const deleteTopicRegister = async (id) => {
  try {
    const response = await request.delete(`/TopicRegister/DeleteTopicRegister/${id}`)
    return response.data
  } catch (error) {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      console.log(error.request)
    } else {
      console.log('Error', error.message)
    }
    console.log(error)
  }
}

export const sendStatusMail = async (mailData) => {
  try {
    const response = await request.post('/Mail/SendEmail', mailData)
    console.log(mailData)
    return response.data
  } catch (error) {
    if (error.response) {
      console.log(error.response.data)
      console.log(error.response.status)
      console.log(error.response.headers)
    } else if (error.request) {
      console.log(error.request)
    } else {
      console.log('Error', error.message)
    }
    console.log(error)
  }
}