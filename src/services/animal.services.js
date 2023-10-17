import axios from 'axios'

const BASE_URL_WITH_USER = import.meta.env.VITE_BASE_URL_API + '/animal/'

export const getAnimals = async () => {
  return await axios.get(BASE_URL_WITH_USER)
}

export const getAnimal = async (id) => {
  return await axios.get(BASE_URL_WITH_USER + id)
}

export const createAnimal = async (Animal) => {
  return await axios.post(BASE_URL_WITH_USER, Animal)
}

export const putAnimal = async (id, data) => {
  return await axios.put(BASE_URL_WITH_USER + id, data)
}

export const deleteAnimal = async (id) => {
  return await axios.delete(BASE_URL_WITH_USER + id)
}