import { useEffect } from "react";
import {
  Banner,
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
  return (
    <>
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
            <h1 className="text-base lg:text-xl font-bold px-4 py-2 lg:rounded-full lg:transition-all lg:duration-300 lg:ease-in-out   lg:transform text-tertiary ">
              Perú Travel
            </h1>
          </a>

          <div className="flex flex-row justify-center items-center lg:gap-4 text-base lg:text-lg font-bold">
            {idData.map((data) => (
              <NavItem title={data.title} hrefId={data.hrefId}></NavItem>
            ))}
          </div>

          <div className="flex flex-row justify-center items-center lg:gap-2">
            <button
              id="moon-btn-desktop"
              className="p-2 rounded-full border-solid border-2 border-transparent transform transition-all duration-300 ease-in-out lg:hover:border-primary dark:lg:hover:border-white"
              href="#"
            >
              <MagnifyingGlassIcon className="h-6 w-6 fill-current text-primary" />
            </button>

            <button
              id="moon-btn-desktop"
              className="p-2 rounded-full border-solid border-2 border-transparent transform transition-all duration-300 ease-in-out lg:hover:border-primary dark:lg:hover:border-white"
              href="#"
            >
              <MoonIcon className="h-6 w-6 fill-current text-primary" />
            </button>

            <button
              id="moon-btn-desktop"
              className="p-2 rounded-full border-solid border-2 border-transparent transform transition-all duration-300 ease-in-out lg:hover:border-primary dark:lg:hover:border-white"
              href="#"
            >
              <UserIcon className="h-6 w-6 fill-current text-gray-500" />
            </button>
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
    </>
  );
}

export default App;
