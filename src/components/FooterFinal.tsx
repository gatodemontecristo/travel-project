import { Paragraph, ParagraphProps } from "./Paragraph"
import { v4 as uuidv4 } from "uuid";
interface FooterFinalProps {
    title:string,
    footerData?:ParagraphProps[],
    idFooter:string
}

export const FooterFinal = ({title,footerData=[],idFooter}:FooterFinalProps) => {
  return (
    <footer id={idFooter} className="w-full h-auto bg-secondary dark:bg-moonCard1 lg:px-16 px-8 lg:py-20 py-32 lg:mt-24 mt-16 lg:space-y-2 space-y-1 ">
    <p className="lg:text-3xl text-2xl text-white font-bold mb-5">
      {title}
    </p>
    {footerData.map((itemText) => (
      <Paragraph key={uuidv4()} type={itemText.type} text={itemText.text}></Paragraph>
    ))}
  </footer>
  )
}
