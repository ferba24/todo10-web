import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="64f36307-81ed-48ba-b126-fe0272becd73";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp