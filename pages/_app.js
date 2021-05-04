import 'tailwindcss/tailwind.css'
import '../components/styles.css'
import InfoProvider from '../context/InfoContext'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <InfoProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>Jasan Hernández, Software Engineer</title>
      </Head>
      <Component {...pageProps} />
    </InfoProvider>
  )
}

 export default MyApp