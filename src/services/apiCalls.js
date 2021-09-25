import apiClient, { baseURL, handleResponse } from "./axios";
import { Routes } from "../routes";
import { history } from "..";

export const login = async (payload) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": 'application/json',
    },
    body: JSON.stringify(payload)
  };
  return fetch(`${baseURL}admin/auth/login`, requestOptions).then(handleResponse);
}

export const logout = () => {
  localStorage.removeItem("user_data")
  history.push(Routes.Signin)
}

// admin
export const fetchAdmin = async (payload) => {
  try {
    const data = JSON.parse(localStorage.getItem('user_data'))
    const url = payload.method === "PUT" ? `${baseURL}admin/admin/${payload.data.user_id}` : `${baseURL}admin/admin`
    const requestOptions = {
      method: payload.method,
      headers: {
        "Content-Type": 'application/json',
        "Authorization": "Bearer " + data.token || undefined
      },
      body: JSON.stringify(payload.data)
    };
    return fetch(url, requestOptions).then(handleResponse);
  } catch (error) {
    console.log(error)
  }

}

// how it works
export async function howItWorks() {
  return apiClient
    .get('/admin/how_it_works')
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

export async function createHowItWork(payload) {
  return apiClient
    .post('/admin/how_it_works', payload)
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

export async function updateHowItWork(payload) {
  return apiClient
    .put(`/admin/how_it_works/${payload.id}`, payload.data)
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

// blogs
export async function blogs() {
  return apiClient
    .get('/admin/blogs')
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

export async function createBlogs(payload) {
  return apiClient
    .post('/admin/blogs', payload)
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

export async function updateBlogs(payload) {
  return apiClient
    .put(`/admin/blogs/${payload.id}`, payload.data)
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

export async function deleteBlog(id) {
  return apiClient
    .delete(`/admin/blogs/${id}`)
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

// settings update
export async function updateSettings(payload) {
  return apiClient
    .put(`/admin/settings/${payload.type}`, payload.data)
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

export async function getSettings() {
  return apiClient
    .get(`/admin/settings`)
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

// abouts
export async function getAbouts() {
  return apiClient
    .get(`/admin/about/contents`)
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

export async function createAbout(payload) {
  return apiClient
    .post(`/admin/about/contents`, payload)
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

export async function updateAbout(payload) {
  return apiClient
    .put(`/admin/about/contents/${payload.id}`, payload.data)
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

export async function deleteAbout(id) {
  return apiClient
    .delete(`/admin/about/contents/${id}`)
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

// Contact
export async function contacts() {
  return apiClient
    .get('/admin/contacts')
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

export async function createContact(payload) {
  return apiClient
    .post('/admin/contacts', payload)
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

export async function updateContact(payload) {
  const url = payload.type === "update" ? `/admin/contacts/${payload.data.id}` : `/admin/contacts/${payload.id}/${payload.type}`
  return apiClient
    .put(url, payload.data)
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

export async function deleteContact(id) {
  return apiClient
    .delete(`/admin/contacts/${id}`)
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

export async function getSubScribers() {
  const url = `/admin/subscribers`
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

export async function getMessages() {
  const url = `/admin/messages`
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

// social links
export async function getSocialLinks() {
  const url = `/admin/social`
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

export async function updateSocial(payload) {
  const url = `/admin/social`
  return apiClient
    .put(url, payload)
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

// features
export async function createFeature(payload) {
  const url = `/admin/features`
  return apiClient
    .post(url, payload)
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

export async function updateFeature(payload) {
  const url = payload.type === "update" ? `/admin/features/${payload.id}` : `/admin/features/${payload.id}/${payload.type}`
  return apiClient
    .put(url, payload.data)
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

export async function getFeature() {
  const url = `/admin/features`
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

// business
export async function getBusiness(payload) {
  const url = `/admin/business/${payload}`
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

export async function updateBusiness(payload) {
  const url = payload.url
  return apiClient
    .put(url, payload.data)
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

export async function createBusiness(payload) {
  const url = payload.url
  return apiClient
    .post(url, payload.data)
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

export async function deleteBusiness(url) {
  return apiClient
    .delete(url)
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

// products
export async function getProducts() {
  return apiClient
    .get('/admin/products')
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

export async function createProduct(payload) {
  return apiClient
    .post('/admin/products', payload)
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

export async function updateProduct(payload) {
  return apiClient
    .put(`/admin/products/${payload.id}`, payload.data)
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

export async function deleteProduct(id) {
  return apiClient
    .delete(`/admin/products/${id}`)
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

// categories
export async function getCategories() {
  return apiClient
    .get('/admin/products/categories')
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

export async function createCategories(payload) {
  return apiClient
    .post('/admin/products/categories', payload)
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

export async function updateCategories(payload) {
  return apiClient
    .put(`/admin/products/categories/${payload.id}`, payload.data)
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

export async function deleteCategories(id) {
  return apiClient
    .delete(`/admin/products/categories/${id}`)
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

// home
export async function getHomePage() {
  return apiClient
    .get('/admin/home_page')
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

export async function updateHomePage(payload) {
  // `/admin/products/categories/${payload.type}`
  const url = payload.url
  return apiClient
    .put(url, payload.data)
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
