export type IdSections =
  | "#"
  | "#recommendations"
  | "#trendings"
  | "#faqs"
  | "#footer";

  export interface NavItemProps {
    title:string,
    hrefId:IdSections
  }

export const NavItem = ({title,hrefId}:NavItemProps) => {
  return (
    <a
      className="md:p-3 lg:p-0 lg:px-4 lg:py-2 lg:rounded-full lg:transition-all lg:duration-300 lg:ease-in-out lg:hover:bg-primary dark:lg:hover:bg-white lg:hover:text-white dark:lg:hover:text-black lg:transform lg:hover:scale-105"
      href={hrefId}
    >
      {title}
    </a>
  );
};
