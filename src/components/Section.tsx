import { ReactElement } from "react";

interface SectionProps {
  children?: ReactElement | ReactElement[];
  idSection: string;
}

export const Section = ({ children,idSection }: SectionProps) => {
  return <section id={idSection} className="w-full  lg:my-10 my-5 lg:px-16 px-6 transition-all duration-300">{children}</section>;
};
