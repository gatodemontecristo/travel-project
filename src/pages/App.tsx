import { Banner, Title } from '../components'
import '../styles/App.css'

function App() {

  return (
    <>
    <Banner buttonText="Explore More" titleText="Find more locations like this"></Banner>
     <section className="w-full h-screen mt-10">
      <Title title="Our Recommendations"></Title>
     </section>
     </>
  )
}

export default App
