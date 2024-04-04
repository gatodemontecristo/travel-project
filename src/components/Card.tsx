import { recomendacionesProps } from "../interfaces"

interface CardProps extends recomendacionesProps{
  tipo:"oscuro"|"claro"
}

export const Card = ({tipo,imagen,titulo,subtitulo}:CardProps) => {

    

  return (
    <div className="Card">
        <div className={`w-48 h-2/3 ${imagen} bg-top bg-cover bg-no-repeat rounded-t-lg`}></div>
        {/* <img src="./assets/catarata.jpg" alt="" /> */}
        <div className={`flex flex-col h-1/3 items-center px-3 text-center ${tipo=='oscuro' ? 'Card-Title-Color' : 'Card-Title-White'} rounded-b-lg`}>
            <h3 className="text-xl px-4 py-2 font-semibold  leading-4">{titulo}</h3>
            <p className="text-sm px-4 overflow-ellipsis pr-2 leading-4">{subtitulo}</p>
        </div>
    </div>
  )
}
