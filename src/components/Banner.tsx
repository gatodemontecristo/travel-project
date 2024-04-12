
export interface BannerProps{
    buttonText:string,
    titleText:string,
    imgPath:string
}

export const Banner = ({buttonText,titleText,imgPath}:BannerProps) => {
  return (
    <div className="w-full lg:h-full lg:bg-none h-[32rem] bg-machupichuM bg-cover bg-left dark:bg-moonPrimary">
      <div className="w-1/5 absolute mt-32 mx-16 flex flex-col gap-5">
        <h2 className="text-4xl text-white font-normal  transition-all duration-300">{titleText}</h2>
        <button className="w-2/4 min-w-24 max-w-44 h-11 rounded-full text-white font-bold shadow-lg bg-primary ease-in-out
        hover:bg-white hover:text-primary transform hover:-translate-y-1 hover:scale-110 dark:text-moonPrimary dark:bg-white dark:hover:text-white dark:hover:bg-moonPrimary transition-all duration-300">
          {buttonText}
        </button>
      </div>
      <img className="lg:block hidden" src={`./assets/${imgPath}`} alt="" />
     
    </div>
  );
};
