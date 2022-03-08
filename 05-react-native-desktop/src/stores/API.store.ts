import { IRootStore } from 'Store'

interface IBook {
  title: string,
  createdAt: string,
}

const database: IBook[] = []

export let createApiStore = (root: IRootStore) => {
  let store = {
    fetchBooks: () => {
      return database
    },
    addBook: (title: string) => {
      database.push({
        title,
        createdAt: (new Date()).toISOString()
      })

      return database
    }
  }

  return store
}