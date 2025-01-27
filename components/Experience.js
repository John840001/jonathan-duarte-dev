import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl dark:text-light sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            className="text-primary capitalize dark:text-primaryDark"
            target="_blank"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Full Stack Developer"
            company="Helpy Moto"
            companyLink="https://helpymoto.com/"
            time="April 2023 - July 2023"
            address="Remote"
            work="Helpy Moto is a startup that is building a platform to connect customers with service providers like Mechanics, Cleaners and Drivers. I am an Intern responsible for building the web application using React and Tailwind CSS. I am also responsible for building the backend using Node.js, Express, and MongoDB."
          />
          <Details
            position="Software Developer"
            company="Ingram Micro Pvt. Ltd."
            companyLink="https://www.ingrammicro.com/"
            time="July 2024 - Current"
            address="Office @ Kanjurmarg(W), Mumbai."
            work="I am a Trainee Software developer at Ingram Micro. It is an organization that provides B2B Customer Services. It also manages different businesses with the help of a platform called Xvantage that is developed by Ingram Micro. My main task is to manage development in the ERP System developed by Ingram Micro."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
