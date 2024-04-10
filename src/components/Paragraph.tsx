export interface ParagraphProps {
  text: string;
  type: "title" | "detail"| "footer";
}

export const Paragraph = ({ text, type }: ParagraphProps) => {
  return (
    <p
      className={`${
        type == "title"
          ? "text-2xl font-medium text-principal text-secondary opacity-80"
          : (type == "detail"
              ? "text-md"
              : "text-sm text-white"
          ) 
      }`}
    >
      {text}
    </p>
  );
};
