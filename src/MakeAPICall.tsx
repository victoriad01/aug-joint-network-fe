import axios from 'axios'

export const APICall = async (data: any, url: string, method: string) => {
  const token = ''
  let statusCode
  let response
  let e

  let liveAPI = 'https://jointprayer.org/api/v1'

  try {
    let res = await axios({
      method: method,
      url: liveAPI + url,
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
