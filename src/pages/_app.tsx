import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

import store from '../store'
import { Header } from '../components/framework/Header'

if (process.env.NEXT_PUBLIC_API_MOCKING_ENABLED === '1') {
  require('../api/mocks')
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>DPC Next Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </Provider>
  )
}
