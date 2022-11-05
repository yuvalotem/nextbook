import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { HeaderLayout, ThemeProvider } from '../components'

export default function App({ Component, pageProps }: AppProps) {

  return (<ThemeProvider>
    <HeaderLayout>
      <Component {...pageProps} />
    </HeaderLayout>
  </ThemeProvider>)
}
