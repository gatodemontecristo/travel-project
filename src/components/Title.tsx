export interface TitleProps{
  title:string,
  size?:string
}
export const Title = ({title,size="lg:text-3xl text-2xl"}:TitleProps) => {
  return (
    <h1 className={` pt-4 ${size} text-primary lg:font-bold font-semibold mb-5 dark:text-white transition-all duration-300`}>
      {title}
    </h1>
  );
};
