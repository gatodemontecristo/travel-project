import { Banner, Card, FAQForm, Grid, Paragraph, Title } from "../components";
import { FAQData, recomendacionesData } from "../data";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <>
      <Banner
        buttonText="Explore More"
        titleText="Find more locations like this"
        imgPath="machupichu.jpg"
      ></Banner>
      <section className="w-full  mt-10 pl-6 pr-6 ">
        <Title title="Our Recommendations"></Title>
        <div className="flex flex-row gap-4  pb-6 overflow-x-auto">
          {recomendacionesData.map((data, index) => (
            <Card
              key={uuidv4()}
              tipo={index % 2 == 0 ? "claro" : "oscuro"}
              imagen={data.imagen}
              subtitulo={data.subtitulo}
              titulo={data.titulo}
            ></Card>
          ))}
          {/* <Card tipo='oscuro'></Card>
        <Card tipo='claro'></Card> */}
        </div>
      </section>
      <section className="w-full  mt-10 pl-6 pr-6 ">
        <Title title="Trending Stays"></Title>
        <Grid></Grid>
      </section>
      <section className="w-full  mt-10 pl-6 pr-6 ">
        <FAQForm title="FAQ">
          {FAQData.map((itemText) => (
            <Paragraph type={itemText.type} text={itemText.text}></Paragraph>
          ))}
        </FAQForm>
      </section>
      <footer className="w-full h-auto bg-secondary p-6 mt-8  space-y-2 " >
				<p className="text-lg text-white">Acerca de</p>
				<p className="text-sm text-white">Política de Privacidad</p>
				<p className="text-sm text-white">versionistas</p>
				<p className="text-sm text-white">Terminos y Condiciones</p>
				<p className="text-sm text-white">Empleos</p>
				<p className="text-sm text-white">Platzi Travel,Inc</p>
				<p className="text-sm text-white">Síguenos</p>
			</footer>
    </>
  );
}

export default App;
