export interface ParagraphProps {
  text: string;
  type: "title" | "detail"| "footer";
}

export const Paragraph = ({ text, type }: ParagraphProps) => {
  return (
    <p
      className={`${
        type == "title"
          ? "lg:text-2xl text-xl  font-medium text-principal text-secondary opacity-80 dark:text-primary transition-all duration-300"
          : (type == "detail"
              ? "lg:text-lg text-sm dark:text-white transition-all duration-300"
              : "text-sm text-white dark:text-gray-200"
          ) 
      }`}
    >
      {text}
    </p>
  );
};
