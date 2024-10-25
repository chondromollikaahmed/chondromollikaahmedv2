import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Loader from "../components/Loader";
import HeaderComponent from "../components/Header";
import Footer from "../components/Footer";
import { Fragment } from "react";
import { getProject, Project } from "./handler";


// import styles css

import '../public/assets/css/vendors/bootstrap.css';
import '../public/assets/fonts/font-awesome/css/font-awesome.css';
import '../public/assets/css/vendors/magnific-popup.css';
import '../public/assets/css/vendors/splitting.css';
import '../public/assets/css/vendors/swiper.css';
import '../public/assets/css/vendors/animate.css';
import '../public/assets/css/style.css';
import '../public/assets/css/dark.css';


const inter = Inter({ subsets: ["latin"] });

import { Jost, Caveat, Roboto } from 'next/font/google';

const jost = Jost({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });
const caveat = Caveat({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });
export const metadata: Metadata = {
  
  // write metadata for seo of my personal portfoili Chondromollika Ahmed UI/UX Designer and Frontend Developer
  title: "Chondromollika Ahmed - UI/UX Designer",
  description: "UI/UX Designer and Frontend Developer",
  //add more metadata for seo like author, keywords, etc

};




export type field=string[];

export default async function RootLayout({
  children, pageClassName,
}: Readonly<{
  children: React.ReactNode;
  pageClassName?: string;
}>) {

  console.log("layout");
  console.log(process.env.client_id);
  console.log(process.env.behance_user_name);
  return (
    <html lang="en">
      
      
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Jost%3A0%2C100%3B0%2C200%3B0%2C300%3B0%2C400%3B0%2C500%3B0%2C600%3B0%2C700%3B0%2C800%3B0%2C900%3B1%2C100%3B1%2C200%3B1%2C300%3B1%2C400%3B1%2C500%3B1%2C600%3B1%2C700%3B1%2C800%3B1%2C900%7CCaveat%3A400%3B500%3B600%3B700&display=swap"
          type="text/css"
          media="all" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CRoboto+Slab%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=swap"
          type="text/css"
          media="all" />
              

      </head>

      <body className={inter.className}>
        <Loader />
        <Fragment>

          <div className="container-page">
            <HeaderComponent />


            <div className="wrapper">
              {children}
            </div>


            <Footer />
          </div>


          {/* cursor */}
          <div className="cursor" />

        </Fragment>
      </body>

    </html>
  );
}
