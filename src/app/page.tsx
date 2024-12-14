import Image from "next/image";
import Header from "../components/homepage/Header";
import Hero from "@/components/homepage/Hero";
import Clients from "@/components/homepage/Clients";
import Services from "@/components/homepage/Services";
import Testimonials from "@/components/homepage/Testimonials";
import Stats from "@/components/homepage/Stats";
import Approach from "@/components/homepage/Approach";
import Header3 from "@/components/homepage/Header3";
import Services2 from "@/components/homepage/Services2";
import Ourpromise from "@/components/homepage/Ourpromise";

export default function Home() {
  return (
    <main>
      <Header3 />
      <Services />
      <Services2 />
      <Testimonials />
      <Stats />
      <Approach />
      <Ourpromise />
      {/* <Contact/> */}
    </main>
  );
}
