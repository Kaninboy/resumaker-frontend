// app/providers.tsx
'use client'

import '@fontsource/rubik/400.css'
import '@fontsource/rubik/700.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    fonts: {
        heading: `'Rubik', sans-serif`,
        body: `'Rubik', sans-serif`,
      },
    colors: {
      primary: {
        100: "#4A8CF8",
        200: "#4A8CF8",
        300: "#4A8CF8",
        400: "#4A8CF8",
        500: "#4A8CF8",
        600: "#4A8CF8",
        700: "#4A8CF8",
        800: "#4A8CF8",
        900: "#4A8CF8",
      },
    },
  })

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}