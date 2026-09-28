import Head from "next/head";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Features from "@/components/Features/Features";
import Projects from "@/components/Projects/Projects";
import WhyChoose from "@/components/WhyChoose/WhyChoose";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tata Pravesh | Beautiful homes begin here</title>
        <meta name="description" content="Discover premium Tata Pravesh doors and windows for safer, smarter and more beautiful homes." />
        <meta name="theme-color" content="#2d68c4" />
      </Head>

      <Header />
      <main id="home">
        <Banner />
        <Features />
        <Projects />
        <WhyChoose />
      </main>
    </>
  );
}
