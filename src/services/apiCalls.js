import apiClient from "./axios";


// how it works
export async function getSiteApi(url) {
  return apiClient
    .get(url)
    .then(response => {
      if (response) {
        const { data, status } = response
        if (status) {
          return data
        }
      }
      return false
    })
    .catch(err => console.log(err))
}

export async function sendData(payload) {
  return apiClient
    .post(payload.url, payload.data)
    .then(response => {
      if (response) {
        const { data, status } = response
        if (status) {
          return data
        }
      }
      return false
    })
    .catch(err => console.log(err))
}

