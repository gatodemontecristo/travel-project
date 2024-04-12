import { Paragraph, ParagraphProps } from "./Paragraph"

interface FooterFinalProps {
    title:string,
    footerData?:ParagraphProps[]
}

export const FooterFinal = ({title,footerData=[]}:FooterFinalProps) => {
  return (
    <footer className="w-full h-auto bg-secondary dark:bg-moonCard1 lg:px-16 px-8 lg:py-20 py-32 lg:mt-24 mt-16 lg:space-y-2 space-y-1 ">
    <p className="lg:text-3xl text-2xl text-white font-bold mb-5">
      {title}
    </p>
    {footerData.map((itemText) => (
      <Paragraph type={itemText.type} text={itemText.text}></Paragraph>
    ))}
  </footer>
  )
}
