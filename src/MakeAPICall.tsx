import axios from 'axios'

export const APICall = async (data: any, url: string, method: string) => {
  const token = ''
  let statusCode
  let response
  let e

  let localAPI = 'http://localhost:80/api/v1'

  let liveAPI = 'http://65.0.161.243/api/v1'
  try {
    let res = await axios({
      method: method,
      url: localAPI + url,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data,
    })
    statusCode = res.status
    response = res.data
  } catch (error) {
    e = error
  }
  return { response, statusCode, e }
}
