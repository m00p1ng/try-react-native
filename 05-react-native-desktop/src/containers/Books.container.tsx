import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import tw from 'tailwind-rn'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { useStore } from 'Store'
import { useDynamicColor, reactNativeDesktopNative } from 'libs'
import { Button } from 'components/button.component'
import { useNavigation } from '@react-navigation/native'
import { IBook } from 'stores'

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

  const renderBook = ({ item }: ListRenderItemInfo<IBook>) => {
    return (
      <TouchableOpacity 
        // @ts-ignore
        enableFocusRing={false}
        onPress={() => navigation.navigate('Book', { title: item.title})}
      >
        <View style={tw('py-1 flex-row')}>
          <Icon name="book" />
          <Text style={tw('text-sm')}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={tw('p-3 flex-1')}>
      <Text style={tw('font-bold')}>My favorite book</Text>
      <FlatList
        data={root.ui.books}
        renderItem={renderBook}
        keyExtractor={(book) => book.title}
      />

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
      <Button title="Quit" type="primary" onPress={reactNativeDesktopNative.closeApp} />
    </View>
  )
})