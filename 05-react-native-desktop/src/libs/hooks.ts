import { useColorScheme } from "react-native"

export function useDynamicColor() {
  let theme = useColorScheme()

  return (darkThemeValue: string, lightThemValue: string) =>
    theme === 'dark' ? darkThemeValue : lightThemValue
}