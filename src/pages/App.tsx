import { Banner, Card, Title } from "../components";
import { recomendacionesData } from "../data";
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
        <div className="flex flex-col gap-8">
          <div className="flex flex-row items-center justify-center">
            <div className="w-full h-96 bg-cordillera bg-cover bg-top rounded-2xl p-8">
              <p className="text-3xl leading-9 font-semibold">Chicago</p>
              <p className="text-md mt-2">2 rooms, bathroom and kitchen</p>
            </div>
          </div>


          <div className="flex flex-row w-full gap-8">
            <div className="flex flex-col w-2/3">
              <div className="w-full h-full bg-carnaval bg-cover bg-center rounded-2xl p-8">
              <p className="text-3xl leading-9 font-semibold">Chicago</p>
              <p className="text-md mt-2">2 rooms, bathroom and kitchen</p>
              </div>
            </div>
            <div className="flex flex-col w-1/3 gap-8">
              <div className="flex flex-row">
                <div className="w-full h-96 bg-lalibertad bg-cover bg-center rounded-2xl p-8">
                <p className="text-3xl leading-9 font-semibold">Chicago</p>
              <p className="text-md mt-2">2 rooms, bathroom and kitchen</p>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-full h-96 bg-parquemanu bg-cover bg-center rounded-2xl p-8">
                <p className="text-3xl leading-9 font-semibold">Chicago</p>
              <p className="text-md mt-2">2 rooms, bathroom and kitchen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
