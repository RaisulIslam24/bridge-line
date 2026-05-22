import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Footer from "../components/layout/Footer";
import AboutUs from "../components/sections/AboutUs";
import ContactUs from "../components/sections/ContactUs";
import Careers from "../components/sections/Careers";

const Home = () => {
  return (
    <>
      <Navbar />
      <section id="home"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="about"><AboutUs /></section>
      <section id="careers"><Careers /></section>
      <section id="contact"><ContactUs /></section>
      <Footer />
    </>
  );
};

export default Home;