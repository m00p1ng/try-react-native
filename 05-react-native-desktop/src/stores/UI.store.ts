import { makeAutoObservable, runInAction } from 'mobx'
import { IRootStore } from '../Store'

export interface IBook {
  title: string,
  createdAt: string,
}

export let createUIStore = (root: IRootStore) => {
  let store = makeAutoObservable({
    books: [] as IBook[],
    get uppercasedBooks(): IBook[] {
      return store.books.map((book: IBook) => ({
        ...book,
        title: book.title.toUpperCase(),
      }))
    },
    addBook(title: string) {
      const books: IBook[] = root.api.addBook(title)

      if (books) {
        runInAction(() => {
          store.books = books
        })
      }
    },
    fetchBooks() {
      const books = root.api.fetchBooks()

      runInAction(() => {
        store.books = books
      })
    }
  })

  return store
}