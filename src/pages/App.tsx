import {  useEffect } from "react";
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
import { HeartIcon, HomeModernIcon, UserCircleIcon } from "@heroicons/react/16/solid";

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
        onClickBtn={onClickDark}
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
      <footer className="w-full h-auto bg-secondary dark:bg-moonCard1 lg:px-16 px-8 py-20 lg:mt-24 mt-16 lg:space-y-2 space-y-1 ">
        <p className="lg:text-3xl text-2xl text-white font-bold mb-5">Acerca de</p>
        {footerData.map((itemText) => (
          <Paragraph type={itemText.type} text={itemText.text}></Paragraph>
        ))}
      </footer>
      <section  className="flex md:hidden flex-row justify-evenly items-center fixed left-0 bottom-0 w-full h-16 border-solid border-t-2 border-gray-200 dark:border-gray-400 bg-white dark:bg-gray-800 transition-all duration-300">
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

      {/* <a href="#recommendations">
        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-current text-primary dark:text-white transition-all duration-300" fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.17202C3.92211 4.42214 4.93934 4.00087 6 4.00087C7.06066 4.00087 8.07789 4.42214 8.828 5.17202L10 6.34302L11.172 5.17202C11.541 4.78998 11.9824 4.48525 12.4704 4.27561C12.9584 4.06598 13.4833 3.95563 14.0144 3.95102C14.5455 3.9464 15.0722 4.04761 15.5638 4.24873C16.0554 4.44986 16.502 4.74687 16.8776 5.12244C17.2532 5.49801 17.5502 5.94462 17.7513 6.4362C17.9524 6.92779 18.0536 7.45451 18.049 7.98562C18.0444 8.51674 17.934 9.04162 17.7244 9.52964C17.5148 10.0177 17.21 10.459 16.828 10.828L10 17.657L3.172 10.828C2.42212 10.0779 2.00085 9.06068 2.00085 8.00002C2.00085 6.93936 2.42212 5.92213 3.172 5.17202Z"></path>
        </svg>
      </a>

      <button>
        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-current text-primary dark:text-white transition-all duration-300" fill-rule="evenodd" clip-rule="evenodd" d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"></path>
        </svg>
      </button> */}
    </section>
    </div>
  );
}

export default App;
