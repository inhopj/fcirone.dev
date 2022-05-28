import '../styles/globals.css'
import type { AppProps } from 'next/app'

// TODO - consider using a shared page Layout for the header and the page skeleton
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp
