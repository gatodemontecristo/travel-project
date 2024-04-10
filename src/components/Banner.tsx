
export interface BannerProps{
    buttonText:string,
    titleText:string,
    imgPath:string
}

export const Banner = ({buttonText,titleText,imgPath}:BannerProps) => {
  return (
    <div className="w-full h-full bg-cover bg-center">
      <div className="w-1/5 absolute mt-32 mx-16 flex flex-col gap-5">
        <h2 className="text-4xl text-white font-normal">{titleText}</h2>
        <button className="w-2/4 min-w-24 max-w-44 h-11 rounded-full text-primary font-bold shadow-lg bg-white transition-all duration-300 ease-in-out
        hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110">
          {buttonText}
        </button>
      </div>
      <img src={`./assets/${imgPath}`} alt="" />
     
    </div>
  );
};
