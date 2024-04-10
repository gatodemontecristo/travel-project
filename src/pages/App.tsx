import {
  Banner,
  Card,
  FAQForm,
  Grid,
  Paragraph,
  Section,
  Title,
} from "../components";
import { FAQData, footerData, recomendacionesData } from "../data";
import { v4 as uuidv4 } from "uuid";

function App() {
  return (
    <>
    <header>
      <nav className="hidden fixed z-10 md:flex flex-row justify-between items-center w-full h-16 pl-2 lg:pl-4 pr-4 lg:pr-6 border-solid border-b-2 border-gray-300 dark:border-gray-600 text-primary dark:text-white bg-white dark:bg-gray-900 transition-all duration-300">
        <a href="https://github.com/KidBourbon/travel-website" target="_blank" rel="noopener noreferrer">
          <h1 className="text-base lg:text-lg font-bold px-4 py-2 lg:rounded-full lg:transition-all lg:duration-300 lg:ease-in-out lg:hover:bg-primary dark:lg:hover:bg-white lg:hover:text-white dark:lg:hover:text-black lg:transform lg:hover:scale-105">
            Kid B. Travel
          </h1>
        </a>

        <div className="flex flex-row justify-center items-center lg:gap-4 text-base lg:text-lg font-bold">
          <a className="md:p-3 lg:p-0 lg:px-4 lg:py-2 lg:rounded-full lg:transition-all lg:duration-300 lg:ease-in-out lg:hover:bg-primary dark:lg:hover:bg-white lg:hover:text-white dark:lg:hover:text-black lg:transform lg:hover:scale-105" href="#">Home</a>
          <a className="md:p-3 lg:p-0 lg:px-4 lg:py-2 lg:rounded-full lg:transition-all lg:duration-300 lg:ease-in-out lg:hover:bg-primary dark:lg:hover:bg-white lg:hover:text-white dark:lg:hover:text-black lg:transform lg:hover:scale-105" href="#recommendations">Locations</a>
          <a className="md:p-3 lg:p-0 lg:px-4 lg:py-2 lg:rounded-full lg:transition-all lg:duration-300 lg:ease-in-out lg:hover:bg-primary dark:lg:hover:bg-white lg:hover:text-white dark:lg:hover:text-black lg:transform lg:hover:scale-105" href="#trendings">Stays</a>
          <a className="md:p-3 lg:p-0 lg:px-4 lg:py-2 lg:rounded-full lg:transition-all lg:duration-300 lg:ease-in-out lg:hover:bg-primary dark:lg:hover:bg-white lg:hover:text-white dark:lg:hover:text-black lg:transform lg:hover:scale-105" href="#faqs">FAQs</a>
          <a className="md:p-3 lg:p-0 lg:px-4 lg:py-2 lg:rounded-full lg:transition-all lg:duration-300 lg:ease-in-out lg:hover:bg-primary dark:lg:hover:bg-white lg:hover:text-white dark:lg:hover:text-black lg:transform lg:hover:scale-105" href="#footer">About Us</a>
        </div>

        <div className="flex flex-row justify-center items-center lg:gap-2">
          <a id="search-desktop" className="p-2 rounded-full border-solid border-2 border-transparent transform transition-all duration-300 ease-in-out lg:hover:border-primary dark:lg:hover:border-white" href="#">
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-current text-primary dark:text-white" fill-rule="evenodd" clip-rule="evenodd" d="M8 3.99997C6.93913 3.99997 5.92172 4.4214 5.17157 5.17155C4.42143 5.92169 4 6.93911 4 7.99997C4 9.06084 4.42143 10.0783 5.17157 10.8284C5.92172 11.5785 6.93913 12 8 12C9.06087 12 10.0783 11.5785 10.8284 10.8284C11.5786 10.0783 12 9.06084 12 7.99997C12 6.93911 11.5786 5.92169 10.8284 5.17155C10.0783 4.4214 9.06087 3.99997 8 3.99997ZM2 7.99997C1.99988 7.05568 2.22264 6.12468 2.65017 5.28271C3.0777 4.44074 3.69792 3.71157 4.4604 3.1545C5.22287 2.59743 6.10606 2.22819 7.03815 2.07681C7.97023 1.92543 8.92488 1.99618 9.82446 2.28332C10.724 2.57046 11.5432 3.06587 12.2152 3.72927C12.8872 4.39266 13.3931 5.20531 13.6919 6.10111C13.9906 6.9969 14.0737 7.95056 13.9343 8.88452C13.795 9.81848 13.4372 10.7064 12.89 11.476L17.707 16.293C17.8892 16.4816 17.99 16.7342 17.9877 16.9964C17.9854 17.2586 17.8802 17.5094 17.6948 17.6948C17.5094 17.8802 17.2586 17.9854 16.9964 17.9876C16.7342 17.9899 16.4816 17.8891 16.293 17.707L11.477 12.891C10.5794 13.5293 9.52335 13.9081 8.42468 13.9861C7.326 14.0641 6.22707 13.8381 5.2483 13.3329C4.26953 12.8278 3.44869 12.063 2.87572 11.1223C2.30276 10.1816 1.99979 9.10141 2 7.99997Z"></path>
            </svg>
          </a>

          <button id="moon-btn-desktop" className="p-2 rounded-full border-solid border-2 border-transparent transform transition-all duration-300 ease-in-out lg:hover:border-primary dark:lg:hover:border-white" href="#">
            <svg width="24" height="24" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-current text-primary dark:text-white" d="M25.0748 19.2748C22.9267 20.2465 20.5334 20.5405 18.214 20.1177C15.8945 19.6949 13.7589 18.5753 12.0918 16.9082C10.4246 15.241 9.30509 13.1055 8.88228 10.786C8.45946 8.46654 8.75347 6.0733 9.72512 3.92514C8.01494 4.69801 6.51777 5.87422 5.36208 7.35288C4.20638 8.83154 3.42666 10.5685 3.08979 12.4147C2.75293 14.261 2.86898 16.1614 3.428 17.9529C3.98702 19.7444 4.97232 21.3736 6.29935 22.7006C7.62639 24.0276 9.25556 25.0129 11.0471 25.572C12.8386 26.131 14.739 26.247 16.5852 25.9102C18.4315 25.5733 20.1684 24.7936 21.6471 23.6379C23.1257 22.4822 24.302 20.985 25.0748 19.2748V19.2748Z"></path>
            </svg>
          </button>

          <a id="user-desktop" className="p-2 rounded-full border-solid border-2 border-transparent transform transition-all duration-300 ease-in-out lg:hover:border-primary dark:lg:hover:border-white" href="#">
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-current text-gray-500 dark:text-white" fill-rule="evenodd" clip-rule="evenodd" d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"></path>
            </svg>
          </a>
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
