import 'tailwindcss/tailwind.css'
import InfoProvider from '../context/InfoContext'

 function MyApp({ Component, pageProps }) {
   return (
     <InfoProvider>
       <Component {...pageProps} />
     </InfoProvider>
   )
 }

 export default MyApp