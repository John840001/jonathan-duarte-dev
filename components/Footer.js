import React from "react";
import Layout from "../components/Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Built by <Link href="/">&nbsp;Jonathan Duarte</Link>
        </div>
        <Link href="mailto:jonathanduarte840@gmail.com">Contact Me</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
