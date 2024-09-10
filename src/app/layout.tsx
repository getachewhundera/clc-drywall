// app/layout.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/globals.css';

// Import your navbar and footer components
import NavBarPage from './components/navbar/NavBarPage';
import Footer from './components/Footer/page';
import CopyrightFooter from './components/Footer/copyright-footer/copyrightFooter';


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css' />
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css' crossOrigin='' />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/swiper@8.4.7/swiper-bundle.min.css'/>
        <script src='https://cdn.jsdelivr.net/npm/swiper@8.4.7/swiper-bundle.min.js'/>
      </head>

      <body>
        <NavBarPage />
        {children}
        <Footer />
        <CopyrightFooter /> 
      </body>
    </html>
  );
}

export default RootLayout;