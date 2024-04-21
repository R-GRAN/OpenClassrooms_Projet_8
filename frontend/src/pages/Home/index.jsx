import Banner from "../../components/Banner";
import Contact from "../../components/Contact";
import FooterApp from "../../components/FooterApp";
import HeaderApp from "../../components/HeaderApp";
import Portfolio from "../../components/Portfolio";
import Presentation from "../../components/Presentation";
import Skills from "../../components/Skills";

function Home() {
  return (
    <>
      <HeaderApp />
      <Banner />
      <Presentation />
      <Skills />
      <Portfolio />
      <Contact/>
      <FooterApp/>
    </>
  );
}

export default Home;
