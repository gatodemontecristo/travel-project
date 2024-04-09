import { ReactElement } from "react";
import { Title } from "./Title";

interface FAQFormProps {
  children?: ReactElement | ReactElement[];
  title: string;
}

export const FAQForm = ({ children, title }: FAQFormProps) => {
  return (
    <>
      <Title title={title} size="text-5xl"></Title>
      <div className="flex flex-col gap-3">{children}</div>
    </>
  );
};
