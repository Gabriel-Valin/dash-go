import { ChakraProvider } from '@chakra-ui/provider'
import { AppProps } from 'next/dist/shared/lib/router/router'
import { SidebarProvider } from '../contexts/sidebarContext'
import { theme } from '../styles/theme'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarProvider>
        <Component {...pageProps} />
      </SidebarProvider>
    </ChakraProvider>
  )
}

export default MyApp
