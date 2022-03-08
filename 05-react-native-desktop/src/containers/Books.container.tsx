import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useStore } from 'Store'
import tw from 'tailwind-rn'
import { useDynamicColor } from 'libs'
import { Button } from 'components/button.component'
import { useNavigation } from '@react-navigation/native'

interface IProps {}

export const BooksContainer = observer((props: IProps) => {
  let root = useStore()
  let [title, setTitle] = useState('')
  const dc = useDynamicColor()
  const navigation = useNavigation()

  useEffect(() => {
    root.ui.fetchBooks()
  }, []) 

  const placeHolderBackground = dc('bg-black', 'bg-white')

  return (
    <View style={tw('p-3')}>
      <Text style={tw('font-bold')}>My favorite book</Text>
      {root.ui.uppercasedBooks.map((book: any) => (
        <TouchableOpacity key={book.createdAt} onPress={() => navigation.navigate('Book', { title: book.title})}>
          <View style={tw('py-1')}>
            <Text style={tw('text-sm')}>{book.title}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <Text style={tw('font-bold mt-6 mb-2')}>New book</Text>
      <View style={tw('flex-row')}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={tw(`flex-1 ${placeHolderBackground} rounded p-1`)}
          placeholder='Book title'
        />
        <Button title="Add" type="primary" onPress={() => root.ui.addBook(title)} />
      </View>
    </View>
  )
})