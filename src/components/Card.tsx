import { recomendacionesProps } from "../interfaces"

interface CardProps extends recomendacionesProps{
  tipo:"oscuro"|"claro"
}

export const Card = ({tipo,imagen,titulo,subtitulo}:CardProps) => {

    

  return (
    <div className="Card">
        <div className={`lg:w-48 w-full h-2/3 ${imagen} bg-top bg-cover bg-no-repeat rounded-t-lg`}></div>
        {/* <img src="./assets/catarata.jpg" alt="" /> */}
        <div className={`flex flex-col h-1/3 items-center px-3 text-center ${tipo=='oscuro' ? 'Card-Title-Color' : 'Card-Title-White'} rounded-b-lg`}>
            <h3 className="leading-4 lg:leading-4 lg:text-xl text-lg  px-4 lg:py-2 py-1 font-semibold  ">{titulo}</h3>
            <p className="text-sm px-4 overflow-ellipsis pr-2 leading-4">{subtitulo}</p>
        </div>
    </div>
  )
}
