import Image from "next/image";
import Header from "../components/homepage/Header";
import Hero from "@/components/homepage/Hero";
import Clients from "@/components/homepage/Clients";
import Services from "@/components/homepage/Services";
import Testimonials from "@/components/homepage/Testimonials";
import Stats from "@/components/homepage/Stats";
import Approach from "@/components/homepage/Approach";
import Header3 from "@/components/homepage/Header3";

export default function Home() {
  return (
    <main>
      <Header3/>
      <Services/>
      <Testimonials/>
      <Stats/>
      <Approach/>
      {/* <Contact/> */}
    </main>
  );
}
