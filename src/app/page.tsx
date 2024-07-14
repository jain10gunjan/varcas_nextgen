import Image from "next/image";
import Header from "../components/homepage/Header";
import Hero from "@/components/homepage/Hero";
import Clients from "@/components/homepage/Clients";
import Services from "@/components/homepage/Services";
import Testimonials from "@/components/homepage/Testimonials";
import Stats from "@/components/homepage/Stats";
import Approach from "@/components/homepage/Approach";
import Contact from "@/components/homepage/Contact";
import Footer from "@/components/homepage/Footer";
import Header2 from "@/components/homepage/Header2";

export default function Home() {
  return (
    <main>
      {/* <Header/> */}
      <Header2/>
      {/* <Hero/> */}
      <Clients/>
      <Services/>
      <Testimonials/>
      <Stats/>
      <Approach/>
      <Contact/>
      <Footer/>
    </main>
  );
}
