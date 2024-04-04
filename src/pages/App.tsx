import { Banner, Card, Title } from '../components'
import { recomendacionesData } from '../data'
import { v4 as uuidv4 } from 'uuid';

function App() {

  return (
    <>
    <Banner buttonText="Explore More" titleText="Find more locations like this"></Banner>
     <section className="w-full h-screen mt-10">
      <Title title="Our Recommendations"></Title>
      <div className='flex flex-row gap-4'>
        {recomendacionesData.map((data,index)=>
          <Card key={uuidv4()} tipo={index%2==0 ? 'claro' : 'oscuro'} imagen={data.imagen} subtitulo={data.subtitulo} titulo={data.titulo} ></Card>
        )}
        {/* <Card tipo='oscuro'></Card>
        <Card tipo='claro'></Card> */}
      </div>
     </section>
     </>
  )
}

export default App
