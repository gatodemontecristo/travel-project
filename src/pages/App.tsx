import {
  Banner,
  Card,
  FAQForm,
  Grid,
  Paragraph,
  Section,
  Title,
} from "../components";
import { FAQData, footerData, recomendacionesData } from "../data";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <>
      <Banner
        buttonText="Explore More"
        titleText="Find more locations like this"
        imgPath="machupichu.jpg"
      ></Banner>
      <Section>
        <Title title="Our Recommendations"></Title>
        <div className="flex flex-row gap-4  pb-6 pt-4 overflow-x-auto">
          {recomendacionesData.map((data, index) => (
            <Card
              key={uuidv4()}
              tipo={index % 2 != 0 ? "claro" : "oscuro"}
              imagen={data.imagen}
              subtitulo={data.subtitulo}
              titulo={data.titulo}
            ></Card>
          ))}
        </div>
      </Section>

      <Section>
        <Title title="Trending Stays"></Title>
        <Grid></Grid>
      </Section>
      <Section>
        <FAQForm title="FAQ">
          {FAQData.map((itemText) => (
            <Paragraph type={itemText.type} text={itemText.text}></Paragraph>
          ))}
        </FAQForm>
      </Section>
      <footer className="w-full h-auto bg-secondary px-16 py-20 mt-24  space-y-2 ">
        <p className="text-3xl text-white font-bold mb-5">Acerca de</p>
        {footerData.map((itemText) => (
            <Paragraph type={itemText.type} text={itemText.text}></Paragraph>
          ))}
      </footer>
    </>
  );
}

export default App;
