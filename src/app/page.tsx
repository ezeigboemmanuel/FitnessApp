import Banner from './components/Banner'
import Exercises from './components/Exercises'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

import './styles.css'

export default function Home() {
  return (
    <main className="main">
      <Navbar />
      <Banner />
      <Exercises />
      <Footer />
    </main>
  )
}
