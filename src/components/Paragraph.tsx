export interface ParagraphProps {
  text: string;
  type: "title" | "detail";
}

export const Paragraph = ({ text, type }: ParagraphProps) => {
  return (
    <p
      className={`${
        type == "title"
          ? "text-2xl font-medium text-principal text-secondary opacity-80"
          : "text-md"
      }`}
    >
      {text}
    </p>
  );
};
