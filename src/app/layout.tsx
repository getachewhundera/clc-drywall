'use client'
//Styling: 
import 'bootstrap/dist/css/bootstrap.css'; 
import './styles/globals.css'; 
// import { Inter } from "next/font/google";
// import { Roboto } from "next/font/google";

//Pages import: 
import Footer from "./components/Footer/page";
import NavaBarPage from "./components/navbar/NavBarPage"; 




// const inter = Inter({ subsets: ["latin"] });


// const roboto = Roboto({
//   weight: ['400', '700'],
//   style: ['normal', 'italic'],
//   subsets: ['latin'],
// });


export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (      
 
    <html lang="en">
      {/* External CSS Links */}
 {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css" />

      <style jsx global>{` html, body {
               font-family: ${roboto.style.fontFamily};
           }`
      }</style> */}
      <body>
        <NavaBarPage />
        <main>
          {children}
        </main>
        <Footer />
      </body>

    </html>
  )
}

// className={inter.className}