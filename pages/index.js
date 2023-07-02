import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProfilePic from "../public/images/profile/developer.png";
import AnimatedText from "./components/AnimatedText";
import Layout from "./components/Layout";
import { LinkArrow } from "./components/icons";
import HireMe from "./components/HireMe";
import TransitionEffect from "./components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonathan Duarte</title>
        <meta
          name="description"
          content="Portfolio Website of Jonathan Duarte"
        />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light ">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/3 mt-3 md:w-full">
              <Image
                src={ProfilePic}
                priority={true}
                alt="Jonathan Duarte"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="px-6 w-2/3 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Hi There, I'm Jonathan Duarte."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Welcome to my world of turning ideas into innovative web
                applications powered by blockchain technology. Join me on this
                transformative journey. Explore the intersection of blockchain
                and web development as I craft cutting-edge solutions using
                React.js.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center md:p-2 md:px-4 md:text-base">
                <Link
                  href="/JONATHAN DUARTE RESUME.pdf"
                  // download={true}
                  target={"_blank"}
                  className="dark:bg-light dark:text-dark flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text lg font-semibold hover:bg-light hover:text-dark transition duration-300 ease-in-out border-2 border-solid border-transparent hover:border-dark
                  hover:dark:border-light hover:dark:bg-dark hover:dark:text-light
                  "
                >
                  Resume <LinkArrow className={"w-6 ml-2 sm:w-4"} />
                </Link>
                <Link
                  href="mailto:jonathanduarte840@gmail.com"
                  className="ml-5 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  {" "}
                  Contact{" "}
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
      </main>
    </>
  );
}
