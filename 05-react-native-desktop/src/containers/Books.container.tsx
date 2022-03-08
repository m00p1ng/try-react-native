import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { View, Text, Button, TextInput } from 'react-native'
import { useStore } from 'Store'
import tw from 'tailwind-rn'

interface IProps {}

export const Books = observer((props: IProps) => {
  let root = useStore()
  let [title, setTitle] = useState('')

  useEffect(() => {
    root.ui.fetchBooks()
  }, [])

  return (
    <View style={tw('p-4')}>
      {root.ui.uppercasedBooks.map((book: any) => (
        <View key={book.createdAt}>
          <Text>{book.title}</Text>
        </View>
      ))}

      <TextInput value={title} onChangeText={setTitle} />
      <Button title="Add button" onPress={() => root.ui.addBook(title)} />
    </View>
  )
})