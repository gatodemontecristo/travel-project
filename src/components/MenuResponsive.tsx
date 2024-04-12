import { ReactNode } from "react"

export const MenuResponsive = ({children}:{children:ReactNode}) => {
  return (
    <section className="flex md:hidden flex-row justify-evenly items-center fixed left-0 bottom-0 w-full h-16 border-solid border-t-2 border-gray-200 dark:border-gray-400 bg-white dark:bg-gray-800 transition-all duration-300">
    {children}
  </section>
  )
}
