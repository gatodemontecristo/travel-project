import { ReactElement } from "react";

interface SectionProps {
  children?: ReactElement | ReactElement[];
}

export const Section = ({ children }: SectionProps) => {
  return <section className="w-full  my-10 px-16 ">{children}</section>;
};
