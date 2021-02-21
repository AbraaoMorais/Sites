import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Style from '../styles/global.css'

function MyApp({ Component, pageProps }) {
    return(
     <React.Fragment> 
      <Layout></Layout> {/* exibe componente em todas as paginas por props */}
      <Component {...pageProps} />
    </React.Fragment>
    )  
}
  
  export default MyApp