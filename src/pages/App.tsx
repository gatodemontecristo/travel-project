import { Fragment, useEffect } from "react";
import {
  Banner,
  ButtonHead,
  Card,
  FAQForm,
  Grid,
  NavItem,
  Paragraph,
  Section,
  Title,
} from "../components";
import { FAQData, footerData, idData, recomendacionesData } from "../data";
import { v4 as uuidv4 } from "uuid";
import {
  MagnifyingGlassIcon,
  MoonIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

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
  const htmlElement = document.querySelector("html")
  const onClickDark = () =>{
    htmlElement?.classList.contains("dark") ? 
    htmlElement?.classList.remove("dark") : 
    htmlElement?.classList.add("dark")
  }

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
              Perú Travel
            </h1>
          </a>

          <div className="flex flex-row justify-center items-center lg:gap-4 text-base lg:text-lg font-bold">
            {idData.map((data) => (
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
            <ButtonHead color="text-gray-500 dark:text-white">
              <UserIcon className="h-6 w-6 fill-curren" />
            </ButtonHead>
          </div>
        </nav>
      </header>

      <Banner
        buttonText="Explore More"
        titleText="Find more locations like this"
        imgPath="machupichu.jpg"
      ></Banner>
      <Section>
        <Title title="Our Recommendations"></Title>
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
        <Title title="Trending Stays"></Title>
        <Grid></Grid>
      </Section>
      <Section>
        <FAQForm title="FAQ">
          {FAQData.map((itemText) => (
            <Paragraph type={itemText.type} text={itemText.text}></Paragraph>
          ))}
        </FAQForm>
      </Section>
      <footer className="w-full h-auto bg-secondary px-16 py-20 mt-24  space-y-2 ">
        <p className="text-3xl text-white font-bold mb-5">Acerca de</p>
        {footerData.map((itemText) => (
          <Paragraph type={itemText.type} text={itemText.text}></Paragraph>
        ))}
      </footer>
    </div>
  );
}

export default App;
