export interface TitleProps{
  title:string,
  size?:string
}
export const Title = ({title,size="text-3xl"}:TitleProps) => {
  return (
    <h1 className={` pt-4 ${size} text-primary font-bold mb-5`}>
      {title}
    </h1>
  );
};
