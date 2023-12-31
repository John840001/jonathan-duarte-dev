import React from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "../components/icons";
// import project1 from "../public/images/projects/crypto-screener-cover-image.jpg";
import skill from "../public/images/projects/skill.jpg";
import portfolio from "../public/images/projects/portfolio.jpg";
import asme from "../public/images/projects/asme.jpg";
import TransitionEffect from "../components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs-rounded-[1.5rem] " />
      <div className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full">
        <Image
          src={img}
          alt={type}
          className="w-full h-auto lg:w-full"
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
          {title}
        </h2>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon className={"icon"} />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, img, type, github, link }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <div className="w-full cursor-pointer overflow-hidden rounded-lg">
        <Image
          priority={true}
          src={img}
          alt={type}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
          {title}
        </h2>
        <div className="mt-2 flex items-center justify-center space-x-2">
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon className={"icon"} />
          </Link>
          {link && (
            <Link href={link} target="_blank" className="w-8 md:w-6">
              Link
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  // console.log(project1)
  return (
    <>
      <Head>
        <title>Jonathan Duarte | Projects</title>
        <meta
          name="description"
          content="Portfolio Website of Jonathan Duarte"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination is the limit!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Skill Verification Using Blockchain"
                summary="A blockchain based skill verification system that allows users to verify their skills and achievements."
                img={skill}
                github="https://github.com/John840001/Skill-Verification-Using-BlockChain"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Portfolio Website"
                img={portfolio}
                type="Project"
                github="https://github.com/John840001/jonathan-duarte-dev"
                link="https://jonathan-duarte.vercel.app/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="ASMExCRCE Website"
                img={asme}
                type="Project"
                github="https://github.com/John840001/ASME-Web"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
