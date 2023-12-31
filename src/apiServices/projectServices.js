import request from '../utils/request'

export const getProject = async () => {
  try {
    const response = await request.get('/Project/GetAll')
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
export const createProject = async (project) => {
  try {
    const response = await request.post('/Project/AddProject', project)
    console.log(project)
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
export const getProjectbyID = async (id) => {
  try {
    const response = await request.get(`/Project/GetProjectByID/${id}`)
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
export const updateProject = async (id, project) => {
  try {
    const response = await request.put(`/Project/UpdateProject/${id}`, project)
    console.log(project)
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
export const deleteProject = async (id) => {
  try {
    const response = await request.delete(`/Project/DeleteProject/${id}`)
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
