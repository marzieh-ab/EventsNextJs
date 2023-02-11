import '@/styles/globals.css'
import '@/styles/general.sass'
import Mainlayout from './../src/components/layout/Main-layout';

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <>
     
      <Mainlayout>
        <Component {...pageProps} />
      </Mainlayout>
    </>
  )
}
