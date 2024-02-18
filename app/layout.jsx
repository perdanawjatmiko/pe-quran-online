import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ngaji Kuy by Perdanaerda",
  applicationName: 'Perdana Erda Ngaji Kuy Next.js',
  description: "Portfolio Website read Quran by Perdana Erda using NextJS",
  authors: {
    name: "Perdana Erda",
    url: "https://www.linkedin.com/in/perdana-wahyu-jatmiko/"
  },
  keywords: ['personal web', 'portfolio web', 'nextjs', 'portfolio', 'javascript', 'quran online'],
  creator: "Perdana Erda",
  openGraph: {
    title: 'Ngaji Kuy by Perdanaerda',
    description: 'Portfolio Website read Quran by Perdana Erda using NextJS',
    url: 'https://nextjs.org',
    siteName: 'Perdana Erda',
    images: [
      {
        url: '/images/erda-old.png', // Must be an absolute URL
        width: 400,
        height: 300,
      },
      {
        url: '/images/erda-old.png', // Must be an absolute URL
        width: 900,
        height: 800,
        alt: 'Perdana Erda',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-lime-100'>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
