import { ReactElement } from "react";
import { Title } from "./Title";

interface FAQFormProps {
  children?: ReactElement | ReactElement[];
  title: string;
}

export const FAQForm = ({ children, title }: FAQFormProps) => {
  return (
    <>
      <Title title={title} size="lg:text-5xl text-4xl"></Title>
      <div className="flex flex-col space-y-3">{children}</div>
    </>
  );
};
