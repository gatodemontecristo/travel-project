import { useEffect, useState } from "react";
import {
  Banner,
  ButtonHead,
  Card,
  FAQForm,
  FooterFinal,
  Grid,
  MenuResponsive,
  NavItem,
  Paragraph,
  ParagraphProps,
  Section,
  Title,
} from "../components";
import { v4 as uuidv4 } from "uuid";
import {
  LanguageIcon,
  MagnifyingGlassIcon,
  MoonIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import {
  HeartIcon,
  HomeModernIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
import { useTranslation } from "react-i18next";
import { bannerDataProps, navDataProps, recomendacionesProps } from "../interfaces";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const navbarContainer = document.getElementById("myCustomNav");
      if (navbarContainer) {
        if (window.scrollY > 0) {
          navbarContainer.classList.add("fixed");
        } else {
          navbarContainer.classList.remove("fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const htmlElement = document.querySelector("html");
  const onClickDark = () => {
    htmlElement?.classList.contains("dark")
      ? htmlElement?.classList.remove("dark")
      : htmlElement?.classList.add("dark");
  };

  const [language, setlanguage] = useState('es')
  const {i18n} = useTranslation("global");
  const {t} = useTranslation();
  const handleChangeLanguage = ()=>{
    i18n.changeLanguage(`${language=="es" ? "en" : "es"}`);
    setlanguage(`${language=="es" ? "en" : "es"}`);
  }
  const navData:navDataProps = t("navData", { returnObjects: true });
  const bannerData:bannerDataProps = t("bannerData", { returnObjects: true });
  const recomendacionesData:recomendacionesProps[] = t("recomendacionesData", { returnObjects: true });
  const FAQData:ParagraphProps[] = t("FAQData", { returnObjects: true });
  const footerData:ParagraphProps[] = t("footerData", { returnObjects: true });
  return (
    <div className="dark:bg-moonPrimary transition-all duration-300">
      <header>
        <nav
          id="myCustomNav"
          className="hidden z-10 md:flex flex-row justify-between items-center w-full h-16 pl-2 lg:px-16 pr-4 border-solid border-b-2 border-gray-300 dark:border-gray-600 text-primary dark:text-white bg-white dark:bg-gray-900 transition-all duration-300"
        >
          <a
            href="https://github.com/KidBourbon/travel-website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className="text-base lg:text-xl font-bold px-4 py-2 lg:rounded-full lg:transition-all lg:duration-300 lg:ease-in-out lg:transform text-tertiary dark:text-primary">
              {navData.logo}
            </h1>
          </a>

          <div className="flex flex-row justify-center items-center lg:gap-4 text-base lg:text-lg font-bold">
            {navData.idData.map((data) => (
              <NavItem title={data.title} hrefId={data.hrefId}></NavItem>
            ))}
          </div>

          <div className="flex flex-row justify-center items-center lg:gap-2">
            <ButtonHead color="text-primary dark:text-white">
              <MagnifyingGlassIcon className="h-6 w-6 fill-curren" />
            </ButtonHead>
            <ButtonHead color="text-primary" clickEvent={onClickDark}>
              <MoonIcon className="h-6 w-6 fill-curren" />
            </ButtonHead>
            <ButtonHead color="text-primary" clickEvent={handleChangeLanguage}>
              <LanguageIcon className="h-6 w-6 fill-curren" />
            </ButtonHead>
            <ButtonHead color="text-gray-500 dark:text-white">
              <UserIcon className="h-6 w-6 fill-curren" />
            </ButtonHead>
          </div>
        </nav>
      </header>

      <Banner
        buttonText={bannerData.button}
        titleText={bannerData.title}
        imgPath="machupichu.jpg"
        searchText={bannerData.search}
        onClickBtn={onClickDark}
        onClickBtn2={handleChangeLanguage}
        logoText={navData.logo}
      ></Banner>
      <Section>
        <Title title={bannerData.subtitle1}></Title>
        <div className="flex flex-row gap-4  pb-6 pt-4 overflow-x-auto">
          {recomendacionesData.map((data, index) => (
            <Card
              key={uuidv4()}
              tipo={index % 2 != 0 ? "claro" : "oscuro"}
              imagen={data.imagen}
              subtitulo={data.subtitulo}
              titulo={data.titulo}
            ></Card>
          ))}
        </div>
      </Section>

      <Section>
        <Title title={bannerData.subtitle2}></Title>
        <Grid></Grid>
      </Section>
      <Section>
        <FAQForm title={bannerData.subtitle3}>
          {FAQData.map((itemText) => (
            <Paragraph type={itemText.type} text={itemText.text}></Paragraph>
          ))}
        </FAQForm>
      </Section>
      <FooterFinal title={bannerData.subtitle4} footerData={footerData}></FooterFinal>
      <MenuResponsive>
        <ButtonHead color="text-primary dark:text-white">
          <HomeModernIcon className="h-7 w-7 fill-curren" />
        </ButtonHead>
        <ButtonHead color="text-primary dark:text-white">
          <MagnifyingGlassIcon className="h-7 w-7 fill-curren" />
        </ButtonHead>

        <ButtonHead color="text-primary dark:text-white">
          <HeartIcon className="h-7 w-7 fill-curren" />
        </ButtonHead>

        <ButtonHead color="text-primary dark:text-white">
          <UserCircleIcon className="h-7 w-7 fill-curren" />
        </ButtonHead>
      </MenuResponsive>
    </div>
  );
}

export default App;
