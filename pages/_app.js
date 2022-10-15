import '../styles/globals.css'
import NavBar from '../components/NavBar'
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#933DC9"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
        showSpinner={false} 
      />
      <NavBar />
      <Component {...pageProps} />

    </>
  )
}

export default MyApp
