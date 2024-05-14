// app/layout.tsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/globals.css';

// Import your navbar and footer components
import NavBarPage from './components/navbar/NavBarPage';
import Footer from './components/Footer/page';


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <head> 
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css'/>  
      </head>
      
      <body>
        <NavBarPage />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;

// export default function RootLayout({ children, }: { children: React.ReactNode }) {
//   return (