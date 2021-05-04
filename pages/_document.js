import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          {/*  Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{ 
              __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WLCT5CJ');
              `
            }}
          />
          {/* End Google Tag Manager */}
          <meta name="theme-color" content="#8b5cf6" />
          <meta property="og:description" content="En mi sitio web podrás conocer un poco más acerca de mi y de mi trabajo como Ingeniero de Software" key="description" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://jasanhdz.vercel.app/" key="url" />
          <meta property="og:image" content="https://jasanhdz.vercel.app/jasan.jpg" key="image" />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WLCT5CJ"
              height="0"
              width="0"
              style={{ 
                display: 'none', visibility: 'hidden'
              }}
            />
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
