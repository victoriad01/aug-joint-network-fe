import axios from 'axios'

export const APICall = async (data: any, url: string, method: string) => {
  const token = ''
  let statusCode
  let response
  let e

  let liveAPI = 'http://3.109.54.17/api/'
  // let localAPI = 'http://localhost:5000/api'
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
