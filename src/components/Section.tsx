import { ReactElement } from "react";

interface SectionProps {
  children?: ReactElement | ReactElement[];
}

export const Section = ({ children }: SectionProps) => {
  return <section className="w-full  lg:my-10 my-5 lg:px-16 px-6 transition-all duration-300">{children}</section>;
};
