import NavBar from '../components/NavBar'

//Styles
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="app-container">
      <NavBar />
      <Component {...pageProps} />
    </div>
    
  )
}

export default MyApp
