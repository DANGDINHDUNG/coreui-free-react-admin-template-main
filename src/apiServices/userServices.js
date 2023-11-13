import request from '../utils/request'

export const getUser = async () => {
  const response = await request.get('/users')
  return response.data
}
