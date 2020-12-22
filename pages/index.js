import Head from "next/head";
import Hero from "../src/components/hero.comp";
import Cases from "../src/components/cases.comp";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Virgofolio</title>
      </Head>

      <main>
        {/* <Hero /> */}
        <Cases />
      </main>
    </div>
  );
}
