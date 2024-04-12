import { destacadasData } from "../data";
import { CardTrendProps } from "../interfaces";

export const CardTrend = ({
  titulo,
  subtitulo,
  styles,
  imagen,
}: CardTrendProps) => {
  return (
    <div
      className={`w-full bg-cover bg-top rounded-2xl p-8 ${imagen} ${styles}`}
    >
      <p className="lg:text-3xl text-2xl lg:leading-9 leading-5 font-semibold">
        {titulo}
      </p>
      <p className=" lg:mt-2 mt-1 lg:text-xl text-lg">{subtitulo}</p>
    </div>
  );
};

export const Grid = () => {
  const destacadasColeccion = { ...destacadasData };
  console.log(destacadasColeccion);
  return (
    <div className="flex flex-col lg:gap-8 gap-4">
      <div className="flex flex-row items-center justify-center">
        <CardTrend
          titulo={destacadasColeccion[0].titulo}
          subtitulo={destacadasColeccion[0].subtitulo}
          imagen={destacadasColeccion[0].imagen}
          styles="h-96 text-white"
        ></CardTrend>
      </div>

      <div className="flex lg:flex-row flex-col w-full lg:gap-8 gap-4">
        <div className="flex flex-col lg:w-2/3 w-full">
          <CardTrend
            titulo={destacadasColeccion[1].titulo}
            subtitulo={destacadasColeccion[1].subtitulo}
            imagen={destacadasColeccion[1].imagen}
            styles="lg:h-full h-96 text-black"
          ></CardTrend>
        </div>
        <div className="flex flex-col lg:w-1/3 w-full lg:gap-8 gap-4">
          <div className="flex flex-row">
            <CardTrend
              titulo={destacadasColeccion[2].titulo}
              subtitulo={destacadasColeccion[2].subtitulo}
              imagen={destacadasColeccion[2].imagen}
              styles="h-96 text-white"
            ></CardTrend>
          </div>
          <div className="flex flex-row">
            <CardTrend
              titulo={destacadasColeccion[3].titulo}
              subtitulo={destacadasColeccion[3].subtitulo}
              imagen={destacadasColeccion[3].imagen}
              styles="h-96 text-black"
            ></CardTrend>
          </div>
        </div>
      </div>
    </div>
  );
};
