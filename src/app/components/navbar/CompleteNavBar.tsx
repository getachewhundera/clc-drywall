'use client'
//this part Creates the full NavBar containing the TopNav, MainMenu, & SearchBar


import React, { useRef } from 'react'
import TopNav from './TopNav'
import MainNavBarMenu from './MainNavBarMenu' 
import SearchBar from './SearchBar'
import useVerticalScrollEvent from '../../hooks/useVerticalScrollEvent'

//Styles 
import './navbar.module.css'; 

type Props = {}


export default function CompleteNavBar(props: Props) {
  const stickyRef = useRef<HTMLDivElement>(null);

  useVerticalScrollEvent((evt:any) => {
    if(evt.currentTarget.scrollY >= 172) {
      (stickyRef.current as HTMLDivElement).classList.add('navbar_fixed');
      return;
    } 
    if (stickyRef.current && evt.currentTarget.scrollY <= 42) {
      (stickyRef.current as HTMLDivElement).classList.remove('navbar_fixed');
      return;
    }
    // if(evt.currentTarget.scrollY <= 42) {
    //   (stickyRef.current as HTMLDivElement).classList.remove('navbar_fixed');
    //   return;
    // }
    
  });

  return(
    <header className="header_area" ref={stickyRef}>
    <TopNav />
    <MainNavBarMenu /> 
    <SearchBar />
  </header>
  );
};