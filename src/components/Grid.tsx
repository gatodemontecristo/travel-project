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
      <p className="text-3xl leading-9 font-semibold">{titulo}</p>
      <p className="text-md mt-2 text-xl">{subtitulo}</p>
    </div>
  );
};

export const Grid = () => {
  const destacadasColeccion = { ...destacadasData };
  console.log(destacadasColeccion);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row items-center justify-center">
        <CardTrend
          titulo={destacadasColeccion[0].titulo}
          subtitulo={destacadasColeccion[0].subtitulo}
          imagen={destacadasColeccion[0].imagen}
          styles="h-96 text-white"
        ></CardTrend>
      </div>

      <div className="flex flex-row w-full gap-8">
        <div className="flex flex-col w-2/3">
          <CardTrend
            titulo={destacadasColeccion[1].titulo}
            subtitulo={destacadasColeccion[1].subtitulo}
            imagen={destacadasColeccion[1].imagen}
            styles="h-full text-black"
          ></CardTrend>
        </div>
        <div className="flex flex-col w-1/3 gap-8">
          <div className="flex flex-row">
          <CardTrend
            titulo={destacadasColeccion[2].titulo}
            subtitulo={destacadasColeccion[2].subtitulo}
            imagen={destacadasColeccion[2].imagen}
            styles="h-96 text-black"
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
