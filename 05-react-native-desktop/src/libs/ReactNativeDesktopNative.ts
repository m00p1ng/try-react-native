import { NativeModules } from 'react-native'

interface IReactNativeDesktopNative {
  keychainWrite: (key: string, payload: string) => Promise<boolean>
  keychainRead: (key: string) => Promise<string>
  closeApp: () => void
  openDesktopWindow: () => void
}

function createReactNativeDesktopNative(nativeModule: any): IReactNativeDesktopNative {
  return {
    keychainRead: nativeModule.keychainRead,
    keychainWrite: nativeModule.keychainWrite,
    closeApp: nativeModule.closeApp,
    openDesktopWindow: nativeModule.openDesktopWindow,
  }
}

export const reactNativeDesktopNative = createReactNativeDesktopNative(
  NativeModules.ReactNativeDesktopNative
)