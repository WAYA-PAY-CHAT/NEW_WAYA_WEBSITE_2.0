import axios from 'axios'
// import { history } from '..';
export const baseURL = 'https://wayapay.herokuapp.com/api/';
export const imageUrl = "https://wayapay.herokuapp.com"

// export function handleResponse(response) {
//   return response.text().then((text) => {
//     let data = "";
//     try {
//       data = text && JSON.parse(text);
//     } catch (error1) {
//       // ...
//     }
//     if (!response.ok) {
//       const error = (data && data.message) || response.statusText;
//       if (error === "Token has expired") {
//         localStorage.removeItem('user_data')

//       }
//       return Promise.reject(error);
//     }
//     return data;
//   }).catch(err => err)
// }

const apiClient = axios.create({
  baseURL,
})

apiClient.interceptors.request.use(request => {
  const userData = JSON.parse(localStorage.getItem('user_data'))
  if (userData && userData.token) {
    request.headers.Authorization = `Bearer ${userData.token}`
    // request.headers.token = userData.token
  }
  return request
})

apiClient.interceptors.response.use(undefined, error => {
  // Errors handling
  const { response } = error
  console.log(error, response)
  // if (response.status === 401 && response.statusText === "Unauthorized") {
  //   localStorage.removeItem('user_data')
  //   history.push("/")
  // }
  return response

})

export default apiClient