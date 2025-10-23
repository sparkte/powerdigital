"use client";
import React from 'react';
import HeroAnimation from "./heroanimation";
import TaylorGuitarsLogoPdm from '../../images/Taylor_Guitars_logo_pdm.png';
import GrazaPdm from '../../images/Graza_pdm.png';
import HippeasPdm from '../../images/hippeas_pdm.png';
import JhonnyWasPdm from '../../images/jhonny_was_pdm.png';
import OneillLogoPdm from '../../images/oneill-logo_pdm.png';
import PowerSvg from '../../images/power.svg';
import AliceOliviaPdm from '../../images/Alice_Olivia_pdm.png';
import AlliantPdm from '../../images/Alliant_pdm.png';
import AsicsPdm from '../../images/asics_pdm.png';
import AviatorNationPdm from '../../images/aviator-nation_pdm.png';
import CatalinaCrunch from '../../images/Catalina-crunch_pdm.png';
import CoolaPdm from '../../images/coola_pdm.png';
import CrocsPdm from '../../images/crocs_pdm.png';
import CymbiotikaPdm from '../../images/Cymbiotika_pdm.png';
import DataworldPdm from '../../images/dataworld_pdm.png';
import GoldBellyPdm from '../../images/Gold_belly_pdm.png';
import GorjanaPdm from '../../images/gorjana_pdm.png';
import CustomLogoCarousel from "./LogoCarousel";
import Fullheader from './fullheader';
import { useState } from "react";
import Metadtalinks from './metadtalinks';
// import Seprator from './seprator';
import Education from './education';
import Seprator2 from './seprator2';
import Services from './services';
import Marketing from './marketing';
import Casestudies from './casestudies';
import Powerdigital from './powerdigital';
import Dualllayout1 from './duallayout1';
import Dualllayout2 from './dualllayout2';
const logos = [
  AliceOliviaPdm,
  AviatorNationPdm,
  AsicsPdm,
  CrocsPdm,
  CoolaPdm,
  CymbiotikaPdm,
  GoldBellyPdm,
  DataworldPdm, 
  GrazaPdm,
  GorjanaPdm,
  JhonnyWasPdm,
  HippeasPdm,
  OneillLogoPdm,
  TaylorGuitarsLogoPdm,
  CatalinaCrunch,
  AlliantPdm,
  // Repeat logos as needed for the marquee effect
];
export default function Main() {
    const [showNavbarLogo, setShowNavbarLogo] = useState(false);

  return (
    <>
    <Metadtalinks/>
  <Fullheader showLogo={showNavbarLogo} />
  <main>
    <HeroAnimation PowerSvg={PowerSvg} onHeroLogoHide={setShowNavbarLogo}/>
    {/* <Seprator/> */}
    <Dualllayout1/>
    <Dualllayout2/>
   <Powerdigital/>
    <Casestudies/>
    <Marketing/>
    <CustomLogoCarousel logos={logos}></CustomLogoCarousel>
    <Services/>
    <Seprator2/>
    <Education/>
  </main>
    </>
  )
}
