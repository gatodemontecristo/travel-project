import { MouseEvent, ReactNode } from "react";

export interface ButtonHead {
  color:string;
  children: ReactNode;
  clickEvent?:   (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void | (() => void);
}

export const ButtonHead = ({ color, children,clickEvent }: ButtonHead) => {
  return (
    <button
      id="moon-btn-desktop"
      className={`${color} px-4 py-2 rounded-full border-solid border-2 border-transparent transform transition-all duration-300 ease-in-out lg:hover:border-primary dark:lg:hover:border-white`}
      onClick={clickEvent}
    >
      {children}
    </button>
  );
};
