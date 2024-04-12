export interface ParagraphProps {
  text: string;
  type: "title" | "detail"| "footer";
}

export const Paragraph = ({ text, type }: ParagraphProps) => {
  return (
    <p
      className={`${
        type == "title"
          ? "text-2xl font-medium text-principal text-secondary opacity-80 dark:text-primary transition-all duration-300"
          : (type == "detail"
              ? "text-md dark:text-white transition-all duration-300"
              : "text-sm text-white dark:text-gray-200"
          ) 
      }`}
    >
      {text}
    </p>
  );
};
