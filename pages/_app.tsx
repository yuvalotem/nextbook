import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HeaderLayout, ThemeProvider } from '../components'
import { UserContextProvider } from '../context'

export default function App({ Component, pageProps }: AppProps) {

  return (<ThemeProvider>
    <UserContextProvider>
      <HeaderLayout>
        <Component {...pageProps} />
      </HeaderLayout>
    </UserContextProvider>
  </ThemeProvider>)
}
