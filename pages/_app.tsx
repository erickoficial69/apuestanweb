import { AppProps } from "next/app";
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { App_provider } from "../context/wp_context/app_context";
import Head from 'next/head'
import CriticalStyles from "../components/styled_components/critical_critical";

function Myapp({ Component, pageProps }: AppProps) {
 
  return <App_provider>
    <Head>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/logo512.png" />
        <link rel="apple-touch-icon" href="/logo512.png"/>        
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta name="theme-color" content="#ff4141" />
        
        { /* @ts-ignore */ }
        <link href="/index.css" rel="stylesheet" media="all" />
        
      </Head>
      <CriticalStyles/>
      <Header {...pageProps} />
      <main>
        <Component {...pageProps}/>
        <Footer />
      </main>
  </App_provider>;
}

export default Myapp