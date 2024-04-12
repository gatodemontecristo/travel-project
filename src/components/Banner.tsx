import { MagnifyingGlassIcon, MoonIcon } from "@heroicons/react/16/solid";
import { ButtonHead } from "./ButtonHead";

export interface BannerProps {
  buttonText: string;
  titleText: string;
  imgPath: string;
  onClickBtn?: () => void
}

export const Banner = ({ buttonText, titleText, imgPath,onClickBtn }: BannerProps) => {
  return (
    <div className="w-full lg:h-full lg:bg-none h-[32rem] bg-machupichuM bg-cover bg-left dark:bg-moonPrimary relative lg:p-0 p-5">
      <div className="w-1/5 absolute mt-32 mx-16 lg:flex flex-col gap-5 hidden">
        <h2 className="text-4xl text-white font-normal  transition-all duration-300">
          {titleText}
        </h2>
        <button
          className="w-2/4 min-w-24 max-w-44 h-11 rounded-full text-white font-bold shadow-lg bg-primary ease-in-out
        hover:bg-white hover:text-primary transform hover:-translate-y-1 hover:scale-110 dark:text-moonPrimary dark:bg-white dark:hover:text-white dark:hover:bg-moonCard1 transition-all duration-300"
        >
          {buttonText}
        </button>
      </div>
      <img className="lg:block hidden" src={`./assets/${imgPath}`} alt="" />

      <div className="flex flex-row justify-between lg:hidden  w-full">
        <div className="bg-white px-4 py-2 rounded-full font-medium text-tertiary dark:text-primary dark:bg-moonPrimary text-lg transition-all duration-300">
          <p>Peru Travel</p>
        </div>
        <ButtonHead color="text-primary bg-white text-xl dark:bg-moonPrimary" clickEvent={onClickBtn}>
          <MoonIcon className="h-6 w-6 fill-curren" />
        </ButtonHead>
      </div>

      <div className="self-center relative  w-full lg:hidden top-5 ">
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-6 w-6 fill-current text-primary" />
        <input
          className="w-full h-12 pl-10 pr-4 text-center text-wrap rounded-full outline-none shadow-md transition-all duration-300 focus-within:shadow-none focus:ring-2 focus:ring-primary dark:text-white dark:focus:ring-white dark:bg-gray-900"
          id="input"
          name="input"
          placeholder="Search"
          type="search"
        />
      </div>
      <div className=" bottom-10 w-[calc(100%-40px)] absolute flex flex-row justify-center">
        <button
          className="w-2/4  h-12 text-center rounded-full text-white font-bold shadow-lg bg-primary ease-in-out
        hover:bg-white hover:text-primary transform hover:-translate-y-1 hover:scale-110 dark:text-moonPrimary dark:bg-white dark:hover:text-white dark:hover:bg-moonCard1 transition-all duration-300
         lg:hidden  " 
        >
          {buttonText}
        </button>
      </div>

    </div>
  );
};
