import Head from "next/head";
import React, { useEffect, useRef } from "react";
import AnimatedText from "./components/AnimatedText";
import Layout from "./components/Layout";
import Image from "next/image";
import ProfilePic from "../public/images/profile/face3.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import TransitionEffect from "./components/TransitionEffect";

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 3000,
  });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Jonathan Duarte | About</title>
        <meta
          name="description"
          content="Portfolio Website of Jonathan Duarte"
        />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purpose!" className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-xl font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                I am a passionate full-stack developer with a focus on web and
                blockchain technologies. With a keen eye for design and a love
                for problem-solving, I bring ideas to life by creating
                innovative and secure digital solutions.
              </p>
              <p className="font-medium my-4">
                As a dedicated advocate of blockchain, I believe in its
                potential to revolutionize industries and empower individuals.
                With expertise in React.js and a strong foundation in web
                development, I strive to bridge the gap between cutting-edge
                technology and exceptional user experiences.
              </p>
              <p className="font-medium">
                Driven by curiosity and fueled by continuous learning, I stay
                updated on the latest trends and advancements in the web and
                blockchain realms. My goal is to deliver solutions that not only
                meet the demands of today but also shape the digital landscape
                of tomorrow.
              </p>
            </div>

            <div className="col-span-3 relative h-max rounded-2xl border-2 corder-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                priority={true}
                src={ProfilePic}
                alt="Jonathan Duarte"
                className="w-full h-auto rounded-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-around xl:col-span-8 xl:flex-row xl:items-center md:order-3 xs:space-x-2">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Completed Projects of Blockchain
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumber value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Hacakthons Participated
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Experience in Blockchain domain using Ethereum, Truffle and
                  Ganache.
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
