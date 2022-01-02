
import { ChakraProvider } from '@chakra-ui/provider'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { theme } from '../styles/theme'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
