import { autorun, makeAutoObservable, runInAction, toJS } from 'mobx'
import { IRootStore } from '../Store'
import { reactNativeDesktopNative } from 'libs'

export interface IBook {
  title: string,
  createdAt: string,
}

export let createUIStore = (root: IRootStore) => {
  const persist = async () => {
    const plainState = toJS(store)
    await reactNativeDesktopNative.keychainWrite('state', JSON.stringify(plainState))
  }

  const hydrate = async () => {
    let stringState = await reactNativeDesktopNative.keychainRead('state')

    if (stringState) {
      let parsedStore = JSON.parse(stringState)

      runInAction(() => {
        store.books = parsedStore.books.map((book: any) => ({
          title: book.title,
          date: new Date(book.date)
        }))
      })
    }
  }

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

  hydrate().then(() => {
    autorun(persist)
  })

  return store
}