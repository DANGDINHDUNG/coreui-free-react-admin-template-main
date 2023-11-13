import request from '../utils/request'

export const getTopic = async () => {
  const response = await request.get('/Topic')
  return response.data
}
