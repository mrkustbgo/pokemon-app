import { NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Layout: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="description"
          content="A pokemon application built with Next.js, TailwindCSS, Redux Toolkit and Chakra UI."
        />
        <meta
          name="keywords"
          content="Pokemon Application, Pokemon App, Pokedex, Modern Poke App, Pokedex Application, PokeApi, Next.js, TailwindCSS"
        />
        <meta name="author" content="Erys Mozo and Mark Tabago" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pokedex | Next.js</title>
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
