import '@/styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Title Tag */}
        <title>Amardeep Lakshkar | Portfolio</title>

        {/* Meta Description Tag */}
        <meta name="description" content="Full Stack MERN Web Developer.
A Web Developer based In Madhya Pradesh,India
Passionate web developer from Mandsaur, Madhya Pradesh, specializing in crafting exceptional websites with a robust stack including JavaScript, HTML, CSS, React, Node.js, Express.js, and MongoDB, dedicated to creating visually appealing and seamlessly functional web experiences, with a keen interest in continuous learning and sharing insights through blogging." />

        {/* Canonical Tag */}
        <link rel="canonical" href="https://amardeep-portfolio.vercel.app" />
        <link rel="icon" type="image/png" href="https://res.cloudinary.com/duscymcfc/image/upload/v1703950330/portfolio/pu7qn2rwgy9bc6bv7xot.png" />
        {/* Open Graph Tags */}
        <meta property="og:title" content="Amardeep Lakshkar | Portfolio" />
        <meta property="og:description" content="YFull Stack MERN Web Developer.
A Web Developer based In Madhya Pradesh,India
Passionate web developer from Mandsaur, Madhya Pradesh, specializing in crafting exceptional websites with a robust stack including JavaScript, HTML, CSS, React, Node.js, Express.js, and MongoDB, dedicated to creating visually appealing and seamlessly functional web experiences, with a keen interest in continuous learning and sharing insights through blogging." />
        <meta property="og:url" content="https://amardeep-portfolio.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://res.cloudinary.com/duscymcfc/image/upload/v1704024637/rsp3wtvefdkzls0hwg0k.png" />
        <meta property="og:image:alt" content="Amardeep Lakshkar | Portfolio" />
        <meta property="og:site_name" content="Amardeep Lakshkar" />

        {/* Twitter Card Tags (optional) */}
        <meta name="twitter:card" content="will be update soon" />
        <meta name="twitter:site" content="@amardeeplaksh04" />
        <meta name="twitter:title" content="Amardeep Lakshkar | Portfolio" />
        <meta name="twitter:description" content="A Web Developer based In Madhya Pradesh,India
Passionate web developer from Mandsaur, Madhya Pradesh, specializing in crafting exceptional websites with a robust stack including JavaScript, HTML, CSS, React, Node.js, Express.js, and MongoDB, dedicated to creating visually appealing and seamlessly functional web experiences, with a keen interest in continuous learning and sharing insights through blogging." />
        <meta name="twitter:image" content="https://res.cloudinary.com/duscymcfc/image/upload/v1704024637/rsp3wtvefdkzls0hwg0k.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
