import About from '@/components/about'
import ButtonR from '@/components/buttonr'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Real from '@/components/real'
import Services from '@/components/services'


export default function Home() {
  return (
    <>
      <Navbar/>
      
     
      <About/>
      <Services/>
      <Real/>
      <Contact/>
      <Footer/>
      <ButtonR/>
    </>
  )
}
